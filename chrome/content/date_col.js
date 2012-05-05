var prefs = new superDateFormat_PrefManager();

var columnHandler = {
   getCellText:         function(row, col) {
      //get the message's header so that we can extract the date field
      var hdr = gDBView.getMsgHdrAt(row);
      var date = new Date(hdr.date/1000);
      
      return date.toLocaleFormat(prefs.getValue('dateFormat', ''));
   },
   getSortStringForRow: function(hdr) {return hdr.date},
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
     var col = document.getElementById('colDate2');
     col.setAttribute('label', prefs.getValue('dateColumnName', 'Super Date Format'));

     addCustomColumnHandler();
  }
}

function doOnceLoaded() {
  var ObserverService = Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService);
  ObserverService.addObserver(CreateDbObserver, "MsgCreateDBView", false);
}

window.addEventListener("load", doOnceLoaded, false);
