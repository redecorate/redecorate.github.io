(function () {
	'use strict';

	var footerQuotes = [
		'PICKING A RANDOM *\"WANT TO BE\"* TO BE *\"SOMEBODY\"*',
		"CLIPPINGS OF A MAGAZINE OF THINGS YOU SAID BUT DIDN'T MEAN",
		'lying, conniving, thriving on hate, i\'ll tell you it was "all for you."',
		"*(SINKING DOWN IN YOUR DEEP BLACK)*",
		'fatalities, fallacies, sweet and sour, simmer, freeze',
		'all five of my senses, unalive',
		'STILL NO ENEMY TO FIGHT, *NOT IN THIS LIGHT*',
		"a medicine i never swallowed right",
		'*shame that overflows*, AND NEVER DISSIPATES',

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
		function escapeHtml(s) {
			return String(s)
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/"/g, '&quot;')
				.replace(/'/g, '&#39;');
		}

		function formatItalics(text) {
			return text.replace(/\*(.+?)\*/g, function (_, inner) {
				return '<em>' + inner + '</em>';
			});
		}

		footerQuoteEl.innerHTML = formatItalics(escapeHtml(quote));
	}

	var profilePics = [
		'images/pfps/pfp.jpg',
		'images/pfps/pfp-alt.jpg',
		'images/pfps/pfp-rare.jpg'
	];

	function setRandomProfilePic() {
		var img = document.querySelector('.profile-pic');
		if (!img) return;
		var choice = profilePics[selectRandomIndex(profilePics.length)];
		img.src = choice;
		if (!img.alt) img.alt = 'profile picture';
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', function () {
			setRandomFooterQuote();
			setRandomProfilePic();
		});
	} else {
		setRandomFooterQuote();
		setRandomProfilePic();
	}
})();
