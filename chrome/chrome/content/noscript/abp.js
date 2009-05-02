ABP = {

  id: "NoScript.net",
  title: "NoScript Development Support Filterset",
  filters: [
    "! NoScript Development Support",
    "! Short whitelist of NoScript developer's sites blocked by EasyList specific rules.",
    "! Privacy: this is a local fixed subscription, no server gets ever contacted to update it.",
    "! Please feel free to disable it if you prefer not to support NoScript development this way.",
  ],
  domains: [
    "noscript.net",
    "flashgot.net",
    "oss.informaction.com",
    "forums.informaction.com",
    "hackademix.net",
    "demo.hackademix.net"
  ],
  
  init: function() {
    try {
      var filters = this.filters.concat(this.domains.map(function(d) { return "@@|http://" + d + "/" }));
      CC[ABID].createInstance().wrappedJSObject.updateExternalSubscription(this.id, this.title, filters, filters.length);
    } catch(e) {
      dump("ABP filterset error: " + e + "\n");
    }
  }
}

ABP.init();
