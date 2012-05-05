var superDateFormat = {
	preferencesInit: function() {
	     if (window.isSuperTab)
		return;

	     var tabs = new Array(document.getElementById('superDateFormatPreferencesTabGeneral'), document.getElementById('superDateFormatPreferencesTabPreferences'));
	     var panels = new Array(document.getElementById('superDateFormatTabPanelGeneral'), document.getElementById('superDateFormatTabPanelPreferences'));
	     var displayPreferences = document.getElementById('displayPrefs');
	     var displayTabs = displayPreferences.firstChild;
	     var displayPanels = displayPreferences.firstChild.nextSibling;

	     for (tab in tabs) {
		displayTabs.appendChild(tabs[tab]);
	     }

	     for (panel in panels) {
		displayPanels.appendChild(panels[panel]);
	     }

	     window.isSuperTab = true;
        }
};

window.addEventListener("load", function(e) { superDateFormat.preferencesInit(e); }, false);
