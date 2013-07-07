// If this tab is an unwanted Omnibox-focused New Tab Page, close this tab
if (window.location.hash == '#newTab' && localStorage.option_stealFocusFromOmnibox == 1 && localStorage.option_openfauxbarfocus != 'chrome') {
	window.document.title = 'Loading...';
	if (localStorage.option_overrideMethod == 1) {
		chrome.tabs.create({ url:chrome.extension.getURL("/html/fauxbar.html") });
	}
	window.close();
}