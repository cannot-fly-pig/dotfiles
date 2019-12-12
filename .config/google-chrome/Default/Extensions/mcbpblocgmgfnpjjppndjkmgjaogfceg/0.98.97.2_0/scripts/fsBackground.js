/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2019 Evgeny Suslikov (evgeny@suslikov.ru)
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,d,c){a!=Array.prototype&&a!=Object.prototype&&(a[d]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.Symbol=function(){var a=0;return function(d){return $jscomp.SYMBOL_PREFIX+(d||"")+a++}}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var d=0;return $jscomp.iteratorPrototype(function(){return d<a.length?{done:!1,value:a[d++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();var d=a[Symbol.iterator];return d?d.call(a):$jscomp.arrayIterator(a)};
$jscomp.polyfill=function(a,d,c,b){if(d){c=$jscomp.global;a=a.split(".");for(b=0;b<a.length-1;b++){var f=a[b];f in c||(c[f]={});c=c[f]}a=a[a.length-1];b=c[a];d=d(b);d!=b&&null!=d&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:d})}};$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill("Promise",function(a){function d(){this.batch_=null}function c(a){return a instanceof f?a:new f(function(b,c){b(a)})}if(a&&!$jscomp.FORCE_POLYFILL_PROMISE)return a;d.prototype.asyncExecute=function(a){null==this.batch_&&(this.batch_=[],this.asyncExecuteBatch_());this.batch_.push(a);return this};d.prototype.asyncExecuteBatch_=function(){var a=this;this.asyncExecuteFunction(function(){a.executeBatch_()})};var b=$jscomp.global.setTimeout;d.prototype.asyncExecuteFunction=function(a){b(a,
0)};d.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var a=this.batch_;this.batch_=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];try{c()}catch(k){this.asyncThrow_(k)}}}this.batch_=null};d.prototype.asyncThrow_=function(a){this.asyncExecuteFunction(function(){throw a;})};var f=function(a){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var b=this.createResolveAndReject_();try{a(b.resolve,b.reject)}catch(h){b.reject(h)}};f.prototype.createResolveAndReject_=
function(){function a(a){return function(e){c||(c=!0,a.call(b,e))}}var b=this,c=!1;return{resolve:a(this.resolveTo_),reject:a(this.reject_)}};f.prototype.resolveTo_=function(a){if(a===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof f)this.settleSameAsPromise_(a);else{a:switch(typeof a){case "object":var b=null!=a;break a;case "function":b=!0;break a;default:b=!1}b?this.resolveToNonPromiseObj_(a):this.fulfill_(a)}};f.prototype.resolveToNonPromiseObj_=function(a){var b=
void 0;try{b=a.then}catch(h){this.reject_(h);return}"function"==typeof b?this.settleSameAsThenable_(b,a):this.fulfill_(a)};f.prototype.reject_=function(a){this.settle_(2,a)};f.prototype.fulfill_=function(a){this.settle_(1,a)};f.prototype.settle_=function(a,b){if(0!=this.state_)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.state_);this.state_=a;this.result_=b;this.executeOnSettledCallbacks_()};f.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var a=
this.onSettledCallbacks_,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.onSettledCallbacks_=null}};var g=new d;f.prototype.settleSameAsPromise_=function(a){var b=this.createResolveAndReject_();a.callWhenSettled_(b.resolve,b.reject)};f.prototype.settleSameAsThenable_=function(a,b){var c=this.createResolveAndReject_();try{a.call(b,c.resolve,c.reject)}catch(k){c.reject(k)}};f.prototype.then=function(a,b){function c(a,b){return"function"==typeof a?function(b){try{d(a(b))}catch(n){e(n)}}:b}var d,e,g=new f(function(a,
b){d=a;e=b});this.callWhenSettled_(c(a,d),c(b,e));return g};f.prototype.catch=function(a){return this.then(void 0,a)};f.prototype.callWhenSettled_=function(a,b){function c(){switch(d.state_){case 1:a(d.result_);break;case 2:b(d.result_);break;default:throw Error("Unexpected state: "+d.state_);}}var d=this;null==this.onSettledCallbacks_?g.asyncExecute(c):this.onSettledCallbacks_.push(function(){g.asyncExecute(c)})};f.resolve=c;f.reject=function(a){return new f(function(b,c){c(a)})};f.race=function(a){return new f(function(b,
d){for(var e=$jscomp.makeIterator(a),f=e.next();!f.done;f=e.next())c(f.value).callWhenSettled_(b,d)})};f.all=function(a){var b=$jscomp.makeIterator(a),d=b.next();return d.done?c([]):new f(function(a,f){function e(b){return function(c){g[b]=c;h--;0==h&&a(g)}}var g=[],h=0;do g.push(void 0),h++,c(d.value).callWhenSettled_(e(g.length-1),f),d=b.next();while(!d.done)})};return f},"es6","es3");
var currentTab,currentFrameId,imgData=[],extVersion="0.0",extVersionFull="0.0",updateURL="",pendingCapFunction,capCallbackCompleted,executeScriptTO,capId=0,processedId=0,guiItemsLocked=!1,resumeMenuEnabled=!1,shortcutProcessing=!1,commPortName="FireShot Comm Port #"+Math.ceil(45309714203*Math.random()),capResult,capLinks,capResultFileNameLite,multiPDFMode,advFeaturesChecked=!1,tabURL,tabTitle,fPermissionsPageOpened=!1,fForcedPro=!1,fForceRegistered=!1,fSilentMode=!1,pendingResponse,pendingGMailJSON,
fInjectGmailScript=!1,extensionBrowser;function enableHotkey(a){a?setTimeout(function(){shortcutProcessing=!1},500):shortcutProcessing=!0}
function getVersionInfo(){var a=new XMLHttpRequest;a.open("GET",chrome.extension.getURL("manifest.json"),!0);a.onreadystatechange=function(){this.readyState==XMLHttpRequest.DONE&&(extVersion=JSON.parse(this.responseText).version.split(".",3).join("."),extVersionFull=JSON.parse(this.responseText).version.split(".",4).join("."),updateURL=JSON.parse(this.responseText).update_url,fSilentMode="hpbicldbpgipcloiojdbchegbbjiobbm"==extensionId||"adpnodbfhlagloahhdhjggicnfcpggkm"==extensionId,isWindows()&&
!isOnlyLite()?fsNativePlugin.init(function(){getConsolePtr()("Callback from fsNative");displayAnnouncements();switchToProIfRequired();updateContextMenu()}.bind(this)):displayAnnouncements())};a.send()}
function displayAnnouncements(){if("true"==getOption(cFirstTimeRun,"true"))localStorage[cFirstTimeRun]=!1,localStorage[cCurrentVersion]=extVersion,fSilentMode||openURL(getInstalledPageURL());else{var a=getOption(cCurrentVersion,"0.0");extVersion!=a&&(isNativeSupported()||fSilentMode||showBadge("https://getfireshot.com/updated-lite.php?app="+(isOpera()?"op":"ch")+"&ver="+extVersion))}}
function getInstalledPageURL(){var a="&app="+(isOpera()?"op":"ch");return isNativeSupported()?"https://getfireshot.com/installed.php?ver="+extVersion+a+"&native=1":"https://getfireshot.com/installed-lite.php?ver="+extVersion+a}
function nativeHostUpdated(a){getConsolePtr()("Native module has updated to the "+a+" version.");gaTrack("UA-1025658-9","fireshot.com","NativeHostUpdated");getOption(cCurrentVersion,"0.0")==extVersion||a!=extVersionFull||fSilentMode||showBadge("https://getfireshot.com/updated.php?app="+(isOpera()?"op":"ch")+"&ver="+a+"&h="+(isProMode()?"1":"0"))}
function switchToProIfRequired(){fForcedPro=isCustomBuild();fForceRegistered=isCustomBuild();localStorage[cPluginProModePref]="true"==getOption(cPluginProModePref,"false")||fForcedPro;localStorage[cRegisteredPref]="true"==getOption(cRegisteredPref,"false")||fForceRegistered}
function pluginEvent(a){var d=a.topic,c=a.data+"";"status"==d?a.code==statusHostReady?pluginCommand("setAddonVersion",{version:extVersionFull,browser:isOpera()?"Opera":"Chromium",id:extensionId}):(gaTrack("UA-1025658-9","fireshot.com","NativeError-"+a.data),alert("FireShot failed to update. The updater reported the following error: \r\n-----------------------------------------------\r\n"+a.data+"\r\n-----------------------------------------------\r\n\r\nFireShot will have to work in Lite mode."),
getConsolePtr()("Error from native module: "+a.data)):"openURL"==d?openURL(c):"enableResumeMenu"==d?(getConsolePtr()("enableResumeMenu "+c),resumeMenuEnabled="enable"==c,setTimeout(function(){updateContextMenu()},10)):"setupMode"==d?(localStorage[cPluginProModePref]=fForcedPro||"false"!=c,updateContextMenu()):"setRegistered"==d?(localStorage[cRegisteredPref]=fForceRegistered||"false"!=c,updateContextMenu()):"getInfo"==d?(a=new XMLHttpRequest,a.open("GET",c,!0),a.onreadystatechange=function(){this.readyState==
XMLHttpRequest.DONE&&pluginCommand("processInfo",{data:this.responseText})},a.send()):"saveCrashData"==d?(a="",d=c.split(" "),3<=d.length&&(a=d[2]),gaTrack("UA-1025658-9","fireshot.com","AV-"+encodeURIComponent(c),encodeURIComponent(a))):"base64Content"==d&&pendingResponse?pendingResponse(c):"sendToGmail"==d?openInGmail(c):"switchToLite"==d?switchToLiteMode():"getUSPTOData"==d&&doUSPTORequest(c)}
function openInGmail(a){pendingGMailJSON=a;chrome.permissions.contains({origins:["https://mail.google.com/*"]},function(a){a?openGmailComposer():openGmailPermissionsPage()})}function lockItems(){guiItemsLocked=!0;chrome.contextMenus.removeAll();chrome.browserAction.setTitle({title:"FireShot Editor is currently displayed.\r\nPlease close it to take the next capture.\r\n\r\n(switching to FireShot Pro also helps!)"});chrome.browserAction.setPopup({popup:""})}
function unlockItems(){guiItemsLocked=!1;setTimeout(function(){updateContextMenu()},10);chrome.browserAction.setTitle({title:"FireShot - Capture page"});chrome.browserAction.setPopup({popup:"fsPopup.html"})}function checkTabReadyForCapturing(a,d,c){var b=setTimeout(function(){b&&(b=void 0,c(!1))},d);chrome.tabs.executeScript(a,{code:"{}",runAt:"document_start"},function(){var a=!chrome.runtime.lastError;b&&(clearTimeout(b),b=void 0,c(a))})}
function initMessaging(){try{chrome.runtime.onMessage.addListener(function(a,d,c){switch(a.message){case "getPortName":c({portName:commPortName});break;case "loadScript":getConsolePtr()("execScript event");void 0!==executeScriptTO&&(clearTimeout(executeScriptTO),executeScriptTO=void 0);var b=d.frameId;chrome.tabs.executeScript(currentTab.id,fixObjectForOldChrome({file:"scripts/fsUtils.js",runAt:"document_start",frameId:b}),function(){chrome.tabs.executeScript(currentTab.id,fixObjectForOldChrome({file:"scripts/fsSelection.js",
runAt:"document_start",frameId:b}),function(){chrome.tabs.executeScript(currentTab.id,fixObjectForOldChrome({file:"scripts/fsLinks.js",runAt:"document_start",frameId:b}),function(){chrome.tabs.executeScript(currentTab.id,fixObjectForOldChrome({file:"scripts/fsContent.js",runAt:"document_start",frameId:b}),function(){setTimeout(pendingCapFunction,200)})})})});break;case "execScript":getConsolePtr()("execScript event");void 0!==executeScriptTO&&(clearTimeout(executeScriptTO),executeScriptTO=void 0);
setTimeout(pendingCapFunction,100);break;case "checkFSAvailabilityEvt":return getConsolePtr()("checkFSAvailabilityEvt"),c({FSAvailable:!0,FSNative:isNativeSupported(),FSUpgraded:"true"===localStorage[cPluginProModePref],FSVersion:extVersionFull}),!0;case "capturePageEvt":var f=parseInt(a.Action);f==cActionUpgrade?isNativeSupported()?doUpgrade():openURL("https://getfireshot.com/buy.php?SRC=ce-lite"):executeGrabber(f===cActionSilentSave?cActionSilentAdd:f,"true"==a.Entire?cModeEntire:cModeVisible,a.Data,
function(){f===cActionSilentSave&&pluginCommand("storeEncodedContent",{path:a.Data});f!==cActionBASE64Content&&pendingResponse&&pendingResponse("")},!0,d.frameId);break;case "getScreenshotsForGmail":return c(pendingGMailJSON),!0;case "switchToNativeEvt":installNative();break;case "activateFireShot":getConsolePtr()(a.name+" "+a.key),c("OK"),pluginCommand("activateFireShot",{name:a.name,key:a.key})}})}catch(a){}}
function checkBadgeAction(){return localStorage[cQueuedBadgeURLPref]&&"undefined"!=localStorage[cQueuedBadgeURLPref]?(openURL(localStorage[cQueuedBadgeURLPref]),showBadge(void 0),localStorage[cFirstTimeRun]=!1,localStorage[cCurrentVersion]=extVersion,!0):!1}
function checkActivationPage(a){chrome.tabs.query({currentWindow:!0,active:!0},function(d){try{if(0!==d.length&&d[0].url){var c=d[0];/https:\/\/getfireshot(\.com)?\/activate\.php/.test(c.url)&&(a(!0),chrome.tabs.executeScript(c.id,{file:"scripts/fsActivation.js",runAt:"document_start"},function(){""!==chrome.runtime.lastError&&(chrome.runtime.lastError="")}))}else a(!1)}catch(b){a(!1)}})}
function getMenuSettings(a){function d(c){var b="capturing-prohibited"===c,d="extension-page"===c;c="file-not-allowed"===c;var g="true"==localStorage[cPluginProModePref],l="true"==localStorage[cRegisteredPref],e=!isNativeSupported(),h=getLastMode();g={sepMain1:"visible",sepMain2:"visible",mnuFeaturesUnavailable:b?"visible":"hidden",mnuEnableFileSupport:c?"visible":"hidden",mnuQuickLaunch:!b||h!=cModeEntire&&h!=cModeSelected&&h!=cModeVisible?"enabled":"disabled",mnuCaptureVisible:b?"disabled":"visible",
mnuCaptureEntire:b?"disabled":"visible",mnuCaptureSelection:b?"disabled":"visible",mnuCaptureVisibleLite:b?"disabled":"visible",mnuCaptureEntireLite:b?"disabled":"visible",mnuCaptureSelectionLite:b?"disabled":"visible",mnuPreferencesLite:e?"visible":"hidden",mnuViewDemo:e?"hidden":"visible",mnuSupport:e?"hidden":"visible",mnuAbout:e?"hidden":"visible",sepEditor:e?"hidden":"visible",sepSupport1:e?"hidden":"visible",sepSupport2:e?"hidden":"visible",sepAdvanced:isWindows()?"visible":"hidden",mnuMiscellaneousFolder:e?
"hidden":"visible",mnuResume:e?"hidden":resumeMenuEnabled?"enabled":"disabled",mnuUpgrade:e?"hidden":g?"hidden":"visible",mnuRegister:e?"hidden":g&&!l?"visible":"hidden",mnuEnterLicense:e?"hidden":g&&!l?"visible":"hidden",mnuOpenFile:e?"hidden":g?"enabled":"disabled",mnuOpenClipboard:e?"hidden":g?"enabled":"disabled",mnuLicenseInfo:e?"hidden":g&&l?"visible":"hidden",divCaptureToolsLite:e?"visible":"hidden",divCaptureTools:e?"hidden":"visible",mnuFireShotNative:isWindows()&&e?"visible":"hidden"};for(var k in g)b?
g[k]="mnuFeaturesUnavailable"===k?"visible":"hidden":d?g[k]="mnuPreferencesLite"===k?"visible":"hidden":c&&(g[k]="mnuEnableFileSupport"===k?"visible":"hidden");a(g)}chrome.tabs.query({currentWindow:!0,active:!0},function(a){try{if(0!==a.length&&a[0].url){var b=a[0];/^chrome-extension.*/.test(b.url)?d("extension-page"):/^file:\/\/.*/.test(b.url)?chrome.extension.isAllowedFileSchemeAccess(function(a){a?d("capturing-allowed"):d("file-not-allowed")}):/^(http|https|ftp|ftps):\/\/.*/.test(b.url)&&!/^https?:\/\/chrome.google.com\/.*$/.test(b.url)?
d("capturing-allowed"):d("capturing-prohibited")}else d("capturing-prohibited")}catch(f){d("capturing-prohibited")}})}
function capturePage(a,d,c,b,f,g){void 0!==executeScriptTO&&(clearTimeout(executeScriptTO),executeScriptTO=void 0);capId++;currentTab=f;currentFrameId=g;capCallbackCompleted=b;pendingCapFunction=function(){doCapturing(a,d,c,b)};getConsolePtr()("capturePage: checking capabilities at "+f.url+". Tab state is: "+f.status);d==cModeBrowser&&void 0!==f.url&&void 0!==f.title?setTimeout(function(){getConsolePtr()("Calling captureBrowser directly...");enableHotkey(!1);lockItems();pluginCommand("captureBrowser",
{action:a+":-",url:f.url,title:f.title});unlockItems();enableHotkey(!0);capCallbackCompleted&&capCallbackCompleted()},100):(executeScriptTO=setTimeout(function(){getConsolePtr()("Calling doCapturing on timeout");pendingCapFunction()},1E3),chrome.tabs.executeScript(f.id,fixObjectForOldChrome({file:"scripts/fsScriptChecker.js",runAt:"document_start",frameId:g}),function(){chrome.runtime.lastError&&(clearTimeout(executeScriptTO),executeScriptTO=void 0,getConsolePtr()("Calling doCapturing on lastError"),
pendingCapFunction())}))}function getActionLocaleId(a){switch(a){case cActionSave:return"action_save";case cActionSavePDF:return"action_save_pdf";case cActionClipboard:return"action_copy";case cActionEMail:return"action_email";case cActionPaint:return"action_external";case cActionSendOneNote:return"action_onenote";case cActionUpload:return"action_upload";case cActionPrint:return"action_print";case cActionMultiPDF:return"action_save_pdf_single";default:return"action_edit"}}
function getLADescription(){var a=getActionLocaleId(getLastAction()),d=!isNativeSupported();switch(getLastMode()){case cModeVisible:var c=d?"action_capture_visible_lite":"action_capture_visible";break;case cModeSelected:c=d?"action_capture_selection_lite":"action_capture_selection";break;case cModeBrowser:c="action_capture_browser";break;case cModeTabs:c="action_capture_tabs";break;default:c=d?"action_capture_entire_lite":"action_capture_entire"}return d?chrome.i18n.getMessage(c):chrome.i18n.getMessage(c)+
" "+chrome.i18n.getMessage(a)}
function doCapturing(a,d,c,b){function f(a){chrome.tabs.captureVisibleTab(currentTab.windowId,{format:"jpeg"},function(b){var c=-1,d=-1;if(chrome.runtime.lastError)console.error(chrome.runtime.lastError.message);else try{var e=getJpegExtents(b);c=e[0];d=e[1];getConsolePtr()("Emulation extents: "+e[0]+" x "+e[1])}catch(m){getConsolePtr()(m.toString())}a(c,d)})}getConsolePtr()("doCapturing");if(capId<=processedId++)capId=processedId;else try{var g=chrome.tabs.connect(currentTab.id,{name:commPortName,
frameId:currentFrameId}),l=!0;g.onMessage.addListener(function(e){getConsolePtr()(JSON.stringify(e));switch(e.topic){case "initAborted":getConsolePtr()("init Aborted");b&&b();break;case "initDone":tabURL=e.url;tabTitle=e.title;l=!1;enableHotkey(!1);switch(d){case cModeVisible:case cModeEntire:f(function(a,b){a=closestToInt(a/e.cw);b=closestToInt(b/e.ch);pluginCommand("captureInit");g.postMessage({topic:"setRatio",ratioW:a,ratioH:b});g.postMessage({topic:"scrollNext"})});break;case cModeSelected:f(function(a,
b){a=closestToInt(a/e.cw);b=closestToInt(b/e.ch);pluginCommand("captureInit");g.postMessage({topic:"setRatio",ratioW:a,ratioH:b});g.postMessage({topic:"selectArea"})});break;case cModeBrowser:enableHotkey(!1),lockItems(),pluginCommand("captureBrowser",{action:a+":-",url:tabURL,title:tabTitle}),unlockItems(),enableHotkey(!0)}break;case "areaSelected":g.postMessage({topic:"scrollNext"});break;case "areaSelectionCanceled":enableHotkey(!0);g.onMessage.removeListener(arguments.callee);break;case "scrollDone":chrome.tabs.captureVisibleTab(currentTab.windowId,
{format:"png"},function(a){chrome.runtime.lastError||pluginCommand("captureTabPNG",{dataurl:a,datasize:a.length,x:e.x,y:e.y});g.postMessage({topic:"scrollNext"})});break;case "scrollFinished":getConsolePtr()("FINISHED ("+e.rows+" x "+e.cols+")");e.url=tabURL;e.title=tabTitle;e.key="-";e.action=a;e.browserVersion=parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2]);e.usrData=c;pendingResponse=function(a){pendingResponse=void 0;g.postMessage({topic:"sendFireShotCaptureCompleteEvent",data:a})};
lockItems();pluginCommand("captureDone",e);enableHotkey(!0);unlockItems();g.onMessage.removeListener(arguments.callee);b&&b(!0);break;case "setOption":localStorage[e.optionName]=e.optionValue}});g.onDisconnect.addListener(function(){l&&b&&b(!1)});g.postMessage({topic:"init",mode:d,debug:isDebug,options:JSON.stringify(localStorage),p:"true"==localStorage[cPluginProModePref],native:isNativeSupported(),frameMode:0<currentFrameId})}catch(e){b&&b(!1)}}
function genericOnClick(a,d){switch(a.menuItemId){case mnuTest:doTest();break;case mnuVisibleEdit:executeGrabber(cActionEdit,cModeVisible);break;case mnuVisibleSave:executeGrabber(cActionSave,cModeVisible);break;case mnuVisibleSavePDF:executeGrabber(cActionSavePDF,cModeVisible);break;case mnuVisibleSendOneNote:executeGrabber(cActionSendOneNote,cModeVisible);break;case mnuVisibleUpload:executeGrabber(cActionUpload,cModeVisible);break;case mnuVisiblePrint:executeGrabber(cActionPrint,cModeVisible);break;
case mnuVisibleCopy:executeGrabber(cActionClipboard,cModeVisible);break;case mnuVisibleEMail:executeGrabber(cActionEMail,cModeVisible);break;case mnuVisibleExtEditor:executeGrabber(cActionPaint,cModeVisible);break;case mnuEntireEdit:executeGrabber(cActionEdit,cModeEntire);break;case mnuEntireSave:executeGrabber(cActionSave,cModeEntire);break;case mnuEntireSavePDF:executeGrabber(cActionSavePDF,cModeEntire);break;case mnuEntireSendOneNote:executeGrabber(cActionSendOneNote,cModeEntire);break;case mnuEntireUpload:executeGrabber(cActionUpload,
cModeEntire);break;case mnuEntirePrint:executeGrabber(cActionPrint,cModeEntire);break;case mnuEntireCopy:executeGrabber(cActionClipboard,cModeEntire);break;case mnuEntireEMail:executeGrabber(cActionEMail,cModeEntire);break;case mnuEntireExtEditor:executeGrabber(cActionPaint,cModeEntire);break;case mnuSelectedEdit:executeGrabber(cActionEdit,cModeSelected);break;case mnuSelectedSave:executeGrabber(cActionSave,cModeSelected);break;case mnuSelectedSavePDF:executeGrabber(cActionSavePDF,cModeSelected);
break;case mnuSelectedSendOneNote:executeGrabber(cActionSendOneNote,cModeSelected);break;case mnuSelectedUpload:executeGrabber(cActionUpload,cModeSelected);break;case mnuSelectedPrint:executeGrabber(cActionPrint,cModeSelected);break;case mnuSelectedCopy:executeGrabber(cActionClipboard,cModeSelected);break;case mnuSelectedEMail:executeGrabber(cActionEMail,cModeSelected);break;case mnuSelectedExtEditor:executeGrabber(cActionPaint,cModeSelected);break;case mnuBrowserEdit:executeGrabber(cActionEdit,cModeBrowser);
break;case mnuBrowserSave:executeGrabber(cActionSave,cModeBrowser);break;case mnuBrowserSavePDF:executeGrabber(cActionSavePDF,cModeBrowser);break;case mnuBrowserSendOneNote:executeGrabber(cActionSendOneNote,cModeBrowser);break;case mnuBrowserUpload:executeGrabber(cActionUpload,cModeBrowser);break;case mnuBrowserPrint:executeGrabber(cActionPrint,cModeBrowser);break;case mnuBrowserCopy:executeGrabber(cActionClipboard,cModeBrowser);break;case mnuBrowserEMail:executeGrabber(cActionEMail,cModeBrowser);
break;case mnuBrowserExtEditor:executeGrabber(cActionPaint,cModeBrowser);break;case mnuAllTabsEdit:tabsPermissionRequired(function(){executeGrabber(cActionEdit,cModeTabs)});break;case mnuAllTabsSinglePDF:tabsPermissionRequired(function(){executeGrabber(cActionMultiPDF,cModeTabs)});break;case mnuAllTabsSave:tabsPermissionRequired(function(){executeGrabber(cActionSave,cModeTabs)});break;case mnuAllTabsSendOneNote:tabsPermissionRequired(function(){executeGrabber(cActionSendOneNote,cModeTabs)});break;
case mnuAllTabsUpload:tabsPermissionRequired(function(){executeGrabber(cActionUpload,cModeTabs)});break;case mnuAllTabsPrint:tabsPermissionRequired(function(){executeGrabber(cActionPrint,cModeTabs)});break;case mnuAllTabsClipboard:tabsPermissionRequired(function(){executeGrabber(cActionClipboard,cModeTabs)});break;case mnuAllTabsEMail:tabsPermissionRequired(function(){executeGrabber(cActionEMail,cModeTabs)});break;case mnuAllTabsExtEditor:tabsPermissionRequired(function(){executeGrabber(cActionPaint,
cModeTabs)});break;case mnuLastAction:captureLastUsedMode();break;case mnuPreferences:openExtensionPreferences();break;case mnuViewDemo:openDemoPage();break;case mnuSupport:openSupportPage();break;case mnuAPI:openAPIPage();break;case mnuUnlockProFeatures:case mnuUpgrade:doUpgrade();break;case mnuRegister:doRegister();break;case mnuEnterLicense:enterLicense();break;case mnuOpenFile:openFile();break;case mnuOpenClipboard:openClipboard();break;case mnuResume:resumeEditing();break;case mnuFireShotNative:installNative();
break;case mnuLicensingInfo:showLicenseInfo();break;case mnuAbout:showAbout()}}function updateLastActionInContextMenu(){chrome.commands.getAll(function(a){getLAShortcut(function(a){chrome.contextMenus.update(mnuLastAction,{title:getLADescription()+"    "+a},function(){""!==chrome.runtime.lastError&&(chrome.runtime.lastError="")})})})}
var fEntered=!1,mnuLastAction,mnuVisibleEdit,mnuVisibleSave,mnuVisibleSavePDF,mnuVisibleSendOneNote,mnuVisibleUpload,mnuVisiblePrint,mnuVisibleCopy,mnuVisibleEMail,mnuVisibleExtEditor,mnuEntireEdit,mnuEntireSave,mnuEntireSavePDF,mnuEntireSendOneNote,mnuEntireUpload,mnuEntirePrint,mnuEntireCopy,mnuEntireEMail,mnuEntireExtEditor,mnuSelectedEdit,mnuSelectedSave,mnuSelectedSavePDF,mnuSelectedSendOneNote,mnuSelectedUpload,mnuSelectedPrint,mnuSelectedCopy,mnuSelectedEMail,mnuSelectedExtEditor,mnuBrowserEdit,
mnuBrowserSave,mnuBrowserSavePDF,mnuBrowserSendOneNote,mnuBrowserUpload,mnuBrowserPrint,mnuBrowserCopy,mnuBrowserEMail,mnuBrowserExtEditor,mnuResume,mnuOpenFile,mnuOpenClipboard,mnuPreferences,mnuRegister,mnuEnterLicense,mnuUpgrade,mnuViewDemo,mnuSupport,mnuAPI,mnuLicensingInfo,mnuAbout,mnuFireShotNative,mnuTest,mnuAllTabsEdit,mnuAllTabsSinglePDF,mnuUnlockProFeatures,mnuAllTabsSave,mnuAllTabsSendOneNote,mnuAllTabsUpload,mnuAllTabsPrint,mnuAllTabsEMail,mnuAllTabsExtEditor,mnuAllTabsClipboard;
function updateContextMenu(){fEntered||(fEntered=!0,chrome.contextMenus.removeAll(function(){if("true"===getOption(cContextMenuIntegrationPref,"true")){var a="true"==localStorage[cPluginProModePref],d="true"==localStorage[cRegisteredPref],c=!isNativeSupported();if(!guiItemsLocked){"legfpnnmhhnhjgekmmbkilmijnjoehne"==extensionId&&(mnuTest=chrome.contextMenus.create({title:"do test",onclick:genericOnClick}),chrome.contextMenus.create({type:"separator"}));mnuLastAction=chrome.contextMenus.create({title:"Last action",
onclick:genericOnClick});chrome.contextMenus.create({type:"separator"});if(c)mnuEntireEdit=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_capture_entire_lite")+"...",onclick:genericOnClick}),mnuVisibleEdit=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_capture_visible_lite")+"...",onclick:genericOnClick}),mnuSelectedEdit=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_capture_selection_lite")+"...",onclick:genericOnClick}),chrome.contextMenus.create({type:"separator"});
else{var b=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_capture_visible")+"..."});mnuVisibleEdit=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_edit")+"...",parentId:b,onclick:genericOnClick});mnuVisibleSave=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_save")+"...",parentId:b,onclick:genericOnClick});mnuVisibleSavePDF=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_save_pdf")+"...",parentId:b,onclick:genericOnClick});mnuVisibleSendOneNote=
chrome.contextMenus.create({title:chrome.i18n.getMessage("action_onenote")+"...",parentId:b,onclick:genericOnClick});mnuVisibleUpload=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_upload")+"...",parentId:b,onclick:genericOnClick});mnuVisiblePrint=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_print")+"...",parentId:b,onclick:genericOnClick});mnuVisibleCopy=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_copy")+"...",parentId:b,onclick:genericOnClick});
mnuVisibleEMail=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_email")+"...",parentId:b,onclick:genericOnClick});mnuVisibleExtEditor=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_external")+"...",parentId:b,onclick:genericOnClick});b=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_capture_entire")+"..."});mnuEntireEdit=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_edit")+"...",parentId:b,onclick:genericOnClick});mnuEntireSave=
chrome.contextMenus.create({title:chrome.i18n.getMessage("action_save")+"...",parentId:b,onclick:genericOnClick});mnuEntireSavePDF=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_save_pdf")+"...",parentId:b,onclick:genericOnClick});mnuEntireSendOneNote=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_onenote")+"...",parentId:b,onclick:genericOnClick});mnuEntireUpload=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_upload")+"...",parentId:b,onclick:genericOnClick});
mnuEntirePrint=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_print")+"...",parentId:b,onclick:genericOnClick});mnuEntireCopy=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_copy")+"...",parentId:b,onclick:genericOnClick});mnuEntireEMail=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_email")+"...",parentId:b,onclick:genericOnClick});mnuEntireExtEditor=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_external")+"...",parentId:b,onclick:genericOnClick});
b=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_capture_selection")+"..."});mnuSelectedEdit=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_edit")+"...",parentId:b,onclick:genericOnClick});mnuSelectedSave=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_save")+"...",parentId:b,onclick:genericOnClick});mnuSelectedSavePDF=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_save_pdf")+"...",parentId:b,onclick:genericOnClick});mnuSelectedSendOneNote=
chrome.contextMenus.create({title:chrome.i18n.getMessage("action_onenote")+"...",parentId:b,onclick:genericOnClick});mnuSelectedUpload=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_upload")+"...",parentId:b,onclick:genericOnClick});mnuSelectedPrint=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_print")+"...",parentId:b,onclick:genericOnClick});mnuSelectedCopy=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_copy")+"...",parentId:b,onclick:genericOnClick});
mnuSelectedEMail=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_email")+"...",parentId:b,onclick:genericOnClick});mnuSelectedExtEditor=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_external")+"...",parentId:b,onclick:genericOnClick});b=c||chrome.contextMenus.create({title:chrome.i18n.getMessage("action_capture_browser")+"..."});mnuBrowserEdit=c||chrome.contextMenus.create({title:chrome.i18n.getMessage("action_edit")+"...",parentId:b,onclick:genericOnClick});mnuBrowserSave=
c||chrome.contextMenus.create({title:chrome.i18n.getMessage("action_save")+"...",parentId:b,onclick:genericOnClick});mnuBrowserSavePDF=c||chrome.contextMenus.create({title:chrome.i18n.getMessage("action_save_pdf")+"...",parentId:b,onclick:genericOnClick});mnuBrowserSendOneNote=c||chrome.contextMenus.create({title:chrome.i18n.getMessage("action_onenote")+"...",parentId:b,onclick:genericOnClick});mnuBrowserUpload=c||chrome.contextMenus.create({title:chrome.i18n.getMessage("action_upload")+"...",parentId:b,
onclick:genericOnClick});mnuBrowserPrint=c||chrome.contextMenus.create({title:chrome.i18n.getMessage("action_print")+"...",parentId:b,onclick:genericOnClick});mnuBrowserCopy=c||chrome.contextMenus.create({title:chrome.i18n.getMessage("action_copy")+"...",parentId:b,onclick:genericOnClick});mnuBrowserEMail=c||chrome.contextMenus.create({title:chrome.i18n.getMessage("action_email")+"...",parentId:b,onclick:genericOnClick});mnuBrowserExtEditor=c||chrome.contextMenus.create({title:chrome.i18n.getMessage("action_external")+
"...",parentId:b,onclick:genericOnClick});b=c||chrome.contextMenus.create({title:chrome.i18n.getMessage("action_capture_tabs")+"..."});mnuUnlockProFeatures=a||c||chrome.contextMenus.create({title:chrome.i18n.getMessage("action_switch_pro_tabs"),parentId:b,onclick:genericOnClick});mnuAllTabsSinglePDF=c||chrome.contextMenus.create({enabled:a,title:chrome.i18n.getMessage("action_save_pdf_single")+"...",parentId:b,onclick:genericOnClick});mnuAllTabsEdit=c||chrome.contextMenus.create({enabled:a,title:chrome.i18n.getMessage("action_edit")+
"...",parentId:b,onclick:genericOnClick});mnuAllTabsSave=c||chrome.contextMenus.create({enabled:a,title:chrome.i18n.getMessage("action_save")+"...",parentId:b,onclick:genericOnClick});mnuAllTabsSendOneNote=c||chrome.contextMenus.create({enabled:a,title:chrome.i18n.getMessage("action_onenote")+"...",parentId:b,onclick:genericOnClick});mnuAllTabsUpload=c||chrome.contextMenus.create({enabled:a,title:chrome.i18n.getMessage("action_upload")+"...",parentId:b,onclick:genericOnClick});mnuAllTabsPrint=c||
chrome.contextMenus.create({enabled:a,title:chrome.i18n.getMessage("action_print")+"...",parentId:b,onclick:genericOnClick});mnuAllTabsClipboard=c||chrome.contextMenus.create({enabled:a,title:chrome.i18n.getMessage("action_copy")+"...",parentId:b,onclick:genericOnClick});mnuAllTabsEMail=c||chrome.contextMenus.create({enabled:a,title:chrome.i18n.getMessage("action_email")+"...",parentId:b,onclick:genericOnClick});mnuAllTabsExtEditor=c||chrome.contextMenus.create({enabled:a,title:chrome.i18n.getMessage("action_external")+
"...",parentId:b,onclick:genericOnClick});chrome.contextMenus.create({type:"separator"});!c&&a&&(resumeMenuEnabled&&(mnuResume=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_resume")+"...",onclick:genericOnClick})),mnuOpenFile=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_open_file")+"...",onclick:genericOnClick}),mnuOpenClipboard=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_open_clipboard")+"...",onclick:genericOnClick}),chrome.contextMenus.create({type:"separator"}))}mnuPreferences=
chrome.contextMenus.create({title:chrome.i18n.getMessage("action_options")+"...",onclick:genericOnClick});mnuFireShotNative=!isWindows()||!c||chrome.contextMenus.create({title:chrome.i18n.getMessage("action_install_native")+"...",parentId:b,onclick:genericOnClick});c||chrome.contextMenus.create({type:"separator"})}c||!a||d||(mnuRegister=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_register")+"...",onclick:genericOnClick}),mnuEnterLicense=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_enter_license")+
"...",onclick:genericOnClick}));c||a||(mnuUpgrade=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_switch_pro")+"!",onclick:genericOnClick}));mnuViewDemo=c||chrome.contextMenus.create({title:chrome.i18n.getMessage("action_view_demo"),onclick:genericOnClick});mnuSupport=c||chrome.contextMenus.create({title:chrome.i18n.getMessage("action_support"),onclick:genericOnClick});c&&chrome.contextMenus.create({type:"separator"});!c&&a&&d&&(mnuLicensingInfo=chrome.contextMenus.create({title:chrome.i18n.getMessage("action_license_info"),
onclick:genericOnClick}));mnuAbout=c||chrome.contextMenus.create({title:chrome.i18n.getMessage("action_about"),onclick:genericOnClick});updateLastActionInContextMenu()}fEntered=!1}))}function restoreBadge(){localStorage[cQueuedBadgeURLPref]&&"undefined"!=localStorage[cQueuedBadgeURLPref]&&showBadge(localStorage[cQueuedBadgeURLPref])}
function executeGrabber(a,d,c,b,f,g){g=g||0;guiItemsLocked||(f||setLastActionAndMode(a,d),d===cModeTabs?captureTabs(a):(multiPDFMode&&(pluginCommand("cancelMultiPagePDF"),multiPDFMode=void 0),chrome.tabs.query({currentWindow:!0,active:!0},function(f){0<f.length&&capturePage(a,d,c,b,f[0],g)})))}
function captureTabs(a){function d(a,b){return{next:function(c){b(c)||a(this)}}}var c=new function(){return{running:!1,start:function(){var a=0,b=["images/progress_1.png","images/progress_2.png","images/progress_3.png","images/progress_4.png"],c=this,d=function(){c.running?(chrome.browserAction.setIcon({path:b[++a%4]}),setTimeout(function(){d()},500)):c.defaultIcon()};this.running=!0;d()},stop:function(){this.running=!1;this.defaultIcon()},defaultIcon:function(){chrome.browserAction.setIcon({path:"images/sss_19.png"})}}};
c.start();var b=a===cActionMultiPDF?a:cActionSilentAdd,f=-1;a===cActionMultiPDF&&(pluginCommand("startMultiPagePDF"),multiPDFMode=!0);(function(a){return new Promise(function(b){var c=0;chrome.tabs.query({currentWindow:!0},function(e){if(e&&0!==e.length){for(var g=0;g<e.length&&-1===f;++g)e[g].active&&(f=g);var h=0;(new d(function(d){try{chrome.tabs.highlight({windowId:e[h].windowId,tabs:h},function(){checkTabReadyForCapturing(e[h].id,5E3,function(b){b?capturePage(a,cModeEntire,void 0,function(a){a&&
++c;d.next()},e[h++],0):(h++,d.next())})})}catch(m){logError(m.message),b(c)}},function(){return h>=e.length?(b(c),!0):!1})).next()}else b(c)})})})(b).then(function(b){c.stop();a===cActionMultiPDF?(pluginCommand("endMultiPagePDF"),multiPDFMode=void 0):pluginCommand("doGroupAction",{action:a,count:b});0<=f&&chrome.tabs.highlight({tabs:f})})}
function initHandlers(){chrome.tabs.onUpdated.addListener(function(a,d,c){d&&"complete"===d.status&&(/https:\/\/getfireshot(\.com)?\/activate\.php/.test(c.url)||!isCustomBuild()&&!isAPIEnabled()||initAPI("pageLoad"),fInjectGmailScript&&/^https?:\/\/mail.google.com\/mail.*$/.test(c.url)&&(getConsolePtr()("Executing script for: "+c.url),chrome.tabs.executeScript(a,{file:"scripts/3p/inboxsdk.js",runAt:"document_end"},function(){chrome.runtime.lastError&&getConsolePtr()("error:"+chrome.runtime.lastError);
chrome.tabs.executeScript(a,{file:"scripts/fsGmail.js",runAt:"document_end"},function(){chrome.runtime.lastError&&getConsolePtr()("error:"+chrome.runtime.lastError);fInjectGmailScript=!1})})))});chrome.tabs.onActivated.addListener(function(a){(isCustomBuild()||isAPIEnabled())&&initAPI("tabSwitch")});chrome.commands.onCommand.addListener(function(a){getConsolePtr()("Command:",a);"last-used-action"!==a||shortcutProcessing||captureLastUsedMode()})}
function init(){initMessaging();initHandlers();document.addEventListener("DOMContentLoaded",function(){restoreBadge();getVersionInfo();updateContextMenu();checkAdvancedUpdates()})}init();
