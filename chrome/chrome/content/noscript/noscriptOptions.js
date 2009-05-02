/***** BEGIN LICENSE BLOCK *****

NoScript - a Firefox extension for whitelist driven safe JavaScript execution
Copyright (C) 2004-2005 Giorgio Maone - g.maone@informaction.com

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA

***** END LICENSE BLOCK *****/

g_ns=getNoscriptService();
g_urlList=null;
g_jsglobal=null;
g_urlText=null;
g_addButton=null;
g_removeButton=null;

function nso_init() {
  if(g_ns.uninstalling) { // this should never happen! 
    window.close();
    return;
  }
  g_urlText=document.getElementById("urlText");
  g_urlList=document.getElementById("urlList");
  g_jsglobal=document.getElementById("jsglobal");
  g_addButton=document.getElementById("addButton");
  g_removeButton=document.getElementById("removeButton");
  nso_populateUrlList(g_ns.sites);
  g_jsglobal.setAttribute("checked",g_ns.jsEnabled);
 
  visitCheckboxes(
    function(prefName,inverse,checkbox) {
      var val=g_ns.getPref(prefName);
      checkbox.setAttribute("checked",inverse?!val:val);
    }
  );
  
}

function nso_urlListChanged() {
  const selectedItems=g_urlList.selectedItems;
  var removeDisabled=true;
  for(var j=selectedItems.length; j-->0;) {
    if(selectedItems[j].getAttribute("disabled")!="true") {
      removeDisabled=false;
      break;
    }
  } 
  g_removeButton.setAttribute("disabled", removeDisabled);
  nso_urlChanged();
}

function nso_urlChanged() {
  var url=g_urlText.value;
  if(url.match(/\s/)) url=g_urlText.value=url.replace(/\s/g,'');
  var addEnabled=url.length>0 && (url=g_ns.getSite(url))!=null;
  if(addEnabled) {
    for(var j=g_urlList.getRowCount(); j-->0;) {
      if(g_urlList.getItemAtIndex(j).getAttribute("value")==url) {
        addEnabled=false;
        break;
      }
    }
  }
  g_addButton.setAttribute("disabled",!addEnabled);
}

function nso_populateUrlList(sites) {
  for(var j=g_urlList.getRowCount(); j-->0; g_urlList.removeItemAt(j));
  var site,item;
  for(j=0, len=sites.length; j<len; j++) {
    site=sites[j];
    item=g_urlList.appendItem(site,site);
    if(g_ns.isPermanent(site)) { 
      item.setAttribute("disabled","true");
    }
  }
  nso_urlListChanged();
}

function nso_urlList2Arr() {
  const sites=[];
  for(var j=g_urlList.getRowCount(); j-->0;) {
    sites[sites.length]=g_urlList.getItemAtIndex(j).getAttribute("value");
  }
  return sites;
}


function nso_allow() {
  var site=g_ns.getSite(g_urlText.value);
  var sites=nso_urlList2Arr();
  sites[sites.length]=site;
  sites=g_ns.sortedSiteSet(sites);
  nso_populateUrlList(sites);
  var item;
  for(var j=g_urlList.getRowCount(); j-->0;) {
    if((item=g_urlList.getItemAtIndex(j)).getAttribute("value")==site) {
      g_urlList.ensureElementIsVisible(item);
    }
  }
  g_addButton.setAttribute("disabled","true");
}



function nso_remove() {
  const selectedItems=g_urlList.selectedItems;
  for(var j=selectedItems.length; j-->0;) {
    if(!g_ns.isPermanent(selectedItems[j].getAttribute("value"))) {
      g_urlList.removeItemAt(g_urlList.getIndexOfItem(selectedItems[j]));
    }
  }
}

function nso_save() {
  visitCheckboxes(
    function(prefName,inverse,checkbox) {
      const checked=checkbox.getAttribute("checked")=="true";
      g_ns.setPref(prefName,inverse?!checked:checked);
    }
  );
  
  const sites=nso_urlList2Arr();

  const oldSS=g_ns.sitesString;
  g_ns.sites=sites;
  const oldGlobal=g_ns.jsEnabled;
  g_ns.jsEnabled=g_jsglobal.getAttribute("checked")=="true";
  if(
    (oldGlobal!=g_ns.jsEnabled || g_ns.sitesString!=oldSS) 
    && g_ns.getPref("autoReload",true)) {
    try {
      window.opener.BrowserReload();
    } catch(ex) {
      // dump(ex);
    }
  }
  g_ns.savePrefs();
}

function visitCheckboxes(callback) {
  const rxOpt=/^(inv|)opt-(.*)/;
  var j,checkbox,match;
  const opts=document.getElementsByTagName("checkbox");
  for(j=opts.length; j-->0;) {
    checkbox=opts[j];
    if(match=checkbox.id.match(rxOpt)) {
      callback(match[2],match[1]=="inv",checkbox);
    }
  }
}

