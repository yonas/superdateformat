SuperDateFormat.preferencesInit = function(e) {
    if (window.isSuperDateFormatTab)
        return;

    // Get Super Date Format tabs
    var tabs = new Array(document.getElementById('superDateFormatPreferencesTabGeneral'), document.getElementById('superDateFormatPreferencesTabPreferences'));
    // Get Super Date Format panels
    var panels = new Array(document.getElementById('superDateFormatTabPanelGeneral'), document.getElementById('superDateFormatTabPanelPreferences'));
    // Get Super Date Format preferences
    var preferences = document.getElementById('paneSuperDateFormat').preferences;
    // Get Thunderbird Display Preferences tab box
    var displayTabBox = document.getElementById('displayPrefs');

    if (!displayTabBox) { 
        setTimeout(function() { SuperDateFormat.preferencesInit(); }, 500); 
        return; 
    }

    var displayTabs = displayTabBox.firstChild; // Get Thunderbird Display Preferences tabs
    var displayPanels = displayTabBox.firstChild.nextSibling; // Get Thunderbird Display Preferences panels
    var displayPreferences = document.getElementById('displayPreferences'); // Get Thunderbird Display Preferences preferences

    // Set the Date Format preferences tab as being the last tab
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

    // Add preferences to the Display Preferences pane
    for (preference in preferences) {
        displayPreferences.appendChild(preferences[preference]);
    }

    // Mark that we have moved the Super Date Format pane
    window.isSuperDateFormatTab = true;
};

window.addEventListener("load", function(e) { SuperDateFormat.preferencesInit(e); }, false);
