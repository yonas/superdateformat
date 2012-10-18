SuperDateFormat.ColumnHandler = function(colName) {
    this.colName = colName;
};

SuperDateFormat.ColumnHandler.prototype = {
   getCellText: function(row, col) {
      //get the message's header so that we can extract the date field
      var hdr = gDBView.getMsgHdrAt(row);
      var date = new Date(this._fetchDate(hdr));
      
      return date.toLocaleFormat(SuperDateFormat.prefs.getValue('dateFormat', ''));
   },
   _fetchDate: function(hdr) {
       if (this.colName == "dateCol") {
           return hdr.date / 1000;
       } else if (this.colName == "receivedCol") {
           return hdr.getUint32Property("dateReceived") * 1000;
       } else {
           return null;
       }
   },
   getSortStringForRow: function(hdr) {return hdr.date;},
   isString:            function() {return true;},

   getCellProperties:   function(row, col, props){},
   getRowProperties:    function(row, props){},
   getImageSrc:         function(row, col) {return null;},
   getSortLongForRow:   function(hdr) {return hdr.date;}
};

SuperDateFormat.CreateDbObserver = {
  // Components.interfaces.nsIObserver
  observe: function(aMsgFolder, aTopic, aData)
  {  
      if (SuperDateFormat.prefs.getValue('sortDateCol', false)) {
          gDBView.addColumnHandler("dateCol", new SuperDateFormat.ColumnHandler('dateCol'));
      }

      if (SuperDateFormat.prefs.getValue('sortReceivedCol', false)) {
          gDBView.addColumnHandler("receivedCol", new SuperDateFormat.ColumnHandler('receivedCol'));
      }
  }
};

SuperDateFormat.doOnceLoaded = function() {
  var ObserverService = Components.classes["@mozilla.org/observer-service;1"].getService(Components.interfaces.nsIObserverService);
  ObserverService.addObserver(SuperDateFormat.CreateDbObserver, "MsgCreateDBView", false);
};

window.addEventListener("load", SuperDateFormat.doOnceLoaded, false);
