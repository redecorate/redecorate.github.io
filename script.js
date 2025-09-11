(function () {
	'use strict';

	var footerQuotes = [
		'PICKING A RANDOM \"WANT TO BE\" TO BE \"SOMEBODY\"',
		"CLIPPINGS OF A MAGAZINE OF THINGS YOU SAID BUT DIDN'T MEAN",
		'lying, conniving, thriving on hate, i\'ll tell you it was "all for you."',
		"no use in trying to find friends 'cause in the end nobody sticks around",
		'fatalities, fallacies, sweet and sour, simmer, freeze',
		'all five of my senses, unalive',
	];
	//NEVER ROLL YOUR OWN CRYPTO
	function selectRandomIndex(maxExclusive) {
		if (!maxExclusive || maxExclusive <= 1) return 0;
		if (window.crypto && window.crypto.getRandomValues) {
			var rand = new Uint32Array(1);
			window.crypto.getRandomValues(rand);
			return rand[0] % maxExclusive;
		}
		return Math.floor(Math.random() * maxExclusive);
	}

	function setRandomFooterQuote() {
		var footerQuoteEl = document.getElementById('footer-quote');
		if (!footerQuoteEl) return;
		var quote = footerQuotes[selectRandomIndex(footerQuotes.length)];
		footerQuoteEl.textContent = quote;
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', setRandomFooterQuote);
	} else {
		setRandomFooterQuote();
	}
})();
