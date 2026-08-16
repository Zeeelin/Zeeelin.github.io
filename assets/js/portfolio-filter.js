(function () {
	'use strict';

	var tabs = document.querySelectorAll('.portfolio-tab');
	var cards = document.querySelectorAll('.portfolio-card');

	if (!tabs.length || !cards.length) {
		return;
	}

	function showCategory(category) {
		cards.forEach(function (card) {
			var categories = (card.getAttribute('data-category') || '').split(' ');
			card.hidden = categories.indexOf(category) === -1;
		});

		tabs.forEach(function (tab) {
			var isActive = tab.getAttribute('data-filter') === category;
			tab.classList.toggle('active', isActive);
			tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
		});
	}

	tabs.forEach(function (tab) {
		tab.addEventListener('click', function () {
			showCategory(tab.getAttribute('data-filter'));
		});
	});

	showCategory('technical');
}());
