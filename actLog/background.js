const scriptObj = browser.contentScripts.register({
    "js": [{file: "/page/page-script.js"}],
    "matches": ["*://*/page/page.html"],
    "allFrames": true,
    "runAt": "document_start"
  });

function foo(details){
    console.log(details.name,details.type,details.viewType,JSON.stringify(details.data.args));
  }
  
browser.browserAction.onClicked.addListener(() => {
    browser.tabs.create({
        url:"page/page.html"
    });
});

browser.activityLog.onExtensionActivity.addListener(foo,'90b5ca96f2801703625d8e76fdc3203da09067e9@temporary-addon');