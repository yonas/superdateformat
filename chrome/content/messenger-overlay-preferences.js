var superDateFormat = {
	preferencesInit: function() {
	     if (window.isSuperDateFormatTab)
		return;

	     var tabs = new Array(document.getElementById('superDateFormatPreferencesTabGeneral'), document.getElementById('superDateFormatPreferencesTabPreferences'));
	     var panels = new Array(document.getElementById('superDateFormatTabPanelGeneral'), document.getElementById('superDateFormatTabPanelPreferences'));
	     var displayPreferences = document.getElementById('displayPrefs');
	     var displayTabs = displayPreferences.firstChild;
	     var displayPanels = displayPreferences.firstChild.nextSibling;

	     // Set the Date Format Preferences tab as being the last tab
             tabs[ tabs.length - 1 ].setAttribute('last-tab', true);

	     // Add tabs to the Display Preferences pane
	     for (tab in tabs) {
                tabs[tab].setAttribute('first-tab', false);
                tabs[tab].setAttribute('selected', false);
		displayTabs.appendChild(tabs[tab]);
	     }

	     // Add panels to the Display Preferences pane
	     for (panel in panels) {
		displayPanels.appendChild(panels[panel]);
	     }
	     
	     window.isSuperDateFormatTab = true;
        }
};

window.addEventListener("load", function(e) { superDateFormat.preferencesInit(e); }, false);
