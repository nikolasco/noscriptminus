pref("extensions.{73a6fe31-595d-460b-a920-fcc0f8843232}.description", "chrome://noscript/locale/about.properties");
pref("noscript.autoReload", true);
pref("noscript.autoReload.global", true);
pref("noscript.autoReload.allTabs", true);
pref("noscript.autoReload.useHistory", false);
pref("noscript.autoReload.useHistory.exceptCurrent", true);
pref("noscript.ctxMenu", true);
pref("noscript.statusIcon", true);
pref("noscript.sound", false);
pref("noscript.sound.oncePerSite", true);
pref("noscript.notify", true);
pref("noscript.notify.bottom", true);
pref("noscript.showAddress", false);
pref("noscript.showDomain", false);
pref("noscript.showTemp", true);
pref("noscript.showPermanent", true);
pref("noscript.showDistrust", true);
pref("noscript.showUntrusted", true);
pref("noscript.showBaseDomain", true);
pref("noscript.showGlobal", true);
pref("noscript.showRevokeTemp", true);
pref("noscript.showBlockedObjects", true);
pref("noscript.mandatory", "chrome: about: resource:");
pref("noscript.default", "chrome: resource: about:blank about:neterror about:config about:plugins about:credits addons.mozilla.org flashgot.net google.com googlesyndication.com informaction.com yahoo.com yimg.com maone.net noscript.net hotmail.com msn.com passport.com passport.net passportimages.com live.com recaptcha.net");
pref("noscript.forbidJava", true);
pref("noscript.forbidFlash", true);
pref("noscript.forbidSilverlight", true);
pref("noscript.forbidPlugins", true);
pref("noscript.forbidActiveContentParentTrustCheck", true);
pref("noscript.forbidIFrames", false);
pref("noscript.forbidIFramesContext", 1);
pref("noscript.forbidIFramesParentTrustCheck", true);

pref("noscript.forbidData", false);
pref("noscript.sound.block", "chrome://noscript/skin/block.wav");
pref("noscript.allowClipboard", false);
pref("noscript.allowLocalLinks", false);

pref("noscript.showPlaceholder", true);
pref("noscript.global", false);
pref("noscript.confirmUnblock", true);
pref("noscript.confirmUnsafeReload", true);
pref("noscript.statusLabel", false);
pref("noscript.forbidBookmarklets", false);
pref("noscript.allowBookmarks", false);
pref("noscript.notify.hideDelay", 5);
pref("noscript.notify.hidePermanent", true);

pref("noscript.notify.hide", false);
pref("noscript.truncateTitleLen", 255);
pref("noscript.truncateTitle", true);
pref("noscript.fixLinks", true);
pref("noscript.noping", true);
pref("noscript.consoleDump", 0);
pref("noscript.excaps", true);
pref("noscript.nselForce", true);
pref("noscript.nselNever", false);
pref("noscript.nselNoMeta", true);
pref("noscript.autoAllow", 0);
pref("noscript.toolbarToggle", 3);
pref("noscript.forbidImpliesUntrust", false);
pref("noscript.keys.toggle", "ctrl shift VK_BACK_SLASH.|");
pref("noscript.keys.ui", "ctrl shift S");

pref("noscript.forbidMetaRefresh", false);
pref("noscript.forbidMetaRefresh.remember", false);
pref("noscript.forbidMetaRefresh.notify", true);

pref("noscript.contentBlocker", false);

pref("noscript.toggle.temp", true);
pref("noscript.firstRunRedirection", true);

pref("noscript.xss.notify", true);
pref("noscript.xss.notify.subframes", true);

pref("noscript.xss.trustReloads", false);
pref("noscript.xss.trustData", true);
pref("noscript.xss.trustExternal", true);
pref("noscript.xss.trustTemp", true);

pref("noscript.filterXPost", true);
pref("noscript.filterXGet", true);
pref("noscript.filterXGetRx", "(?:<+(?=[^<>=\\d\\. ])|[\\\\\"\\x00-\\x07\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F])");
pref("noscript.filterXGetUserRx", "");
pref("noscript.filterXExceptions", "^http://([a-z]+)\\.google\\.(?:[a-z]{1,3}\\.)?[a-z]+/(?:search|custom|\\1)\\?\n^http://([a-z]*)\\.?search\\.yahoo\\.com/search(?:\\?|/\\1\\b)\n^http://[a-z]+\\.wikipedia\\.org/wiki/[^\"<>\?%]+$"); 
pref("noscript.injectionCheck", 2);
pref("noscript.injectionCheck.timeout", 800);
pref("noscript.injectionCheck.loops", 20);

pref("noscript.blockXIntranet", true);
pref("noscript.intranetMaskRx", "^(127\\.[\\d.]+)");

pref("noscript.globalwarning", true);

pref("noscript.jsredirectIgnore", false);
pref("noscript.jsredirectFollow", false);
pref("noscript.jsredirectForceShow", false);

pref("noscript.safeToplevel", true);
pref("noscript.utf7filter", true);

pref("noscript.safeJSRx", "(?:window\\.)?close\\s*\\(\\)");

pref("noscript.badInstall", false);

pref("noscript.fixURI", true);
pref("noscript.fixURI.exclude", "");

pref("noscript.blockNSWB", false);

pref("noscript.urivalid.aim", "\\w[^\\\\\?&\\x00-\\x1f#]*(?:\\?[^\\\\\\x00-\\x1f#]*(?:#[\\w\\-\\.\\+@]{2,32})?)?");
pref("noscript.urivalid.mailto", "[^\\x00-\\x07\\x09\\x0b\\x0c\\x0e-\\x1f]*");

pref("noscript.forbidExtProtSubdocs", true);

pref("noscript.forbidChromeScripts", false);

pref("noscript.forbidJarDocuments", true);
pref("noscript.forbidJarDocumentsExceptions", "^jar:https://samples\\.noscript\\.net/sample_apps.jar!.*\\.xul$\n");
pref("noscript.jarDoc.notify", true);

pref("noscript.forbidXBL", 4);
pref("noscript.forbidXHR", 1);

pref("noscript.whitelistRegExp", "");

pref("noscript.tempGlobal", false);

pref("noscript.lockPrivilegedUI", false);


pref("noscript.collapseObject", false);
pref("noscript.showUntrustedPlaceholder", true);

pref("noscript.jsHack", "window.urchinTracker = function() {}");
pref("noscript.jsHackRegExp", "");
pref("noscript.canonicalFQDN", true);

pref("noscript.allowedMimeRegExp", "");
pref("noscript.alwaysBlockUntrustedContent", true); 

pref("noscript.consoleLog", false);

pref("noscript.silverlightPatch", true);

pref("noscript.allowURLBarJS", true);

pref("security.chrome_access.noscript", true);
