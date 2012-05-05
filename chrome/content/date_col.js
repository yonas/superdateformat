var prefs = new superDateFormat_PrefManager();

var columnHandler = {
   getCellText:         function(row, col) {
      var date =  new Date(hdr.date);
      return date.toLocaleFormat(prefs.getValue('dateFormat'));
   },
   getSortStringForRow: function(hdr) {return hdr.date}
   isString:            function() {return true;},

   getCellProperties:   function(row, col, props){},
   getRowProperties:    function(row, props){},
   getImageSrc:         function(row, col) {return null;},
   getSortLongForRow:   function(hdr) {return 0;}
}

function addCustomColumnHandler() {
   gDBView.addColumnHandler("colDate2", columnHandler);
}

var CreateDbObserver = {
  // Components.interfaces.nsIObserver
  observe: function(aMsgFolder, aTopic, aData)
  {  
     addCustomColumnHandler();
  }
}

function doOnceLoaded() {
  var ObserverService = Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService);
  ObserverService.addObserver(CreateDbObserver, "MsgCreateDBView", false);
}

window.addEventListener("load", doOnceLoaded, false);