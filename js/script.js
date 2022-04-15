"use strict"
//first
//!https://youtu.be/QO32qTZe3hA
const tabsBtn = document.querySelectorAll('.button-tab');
const tabsItems = document.querySelectorAll('.tabs-block__item');
tabsBtn.forEach(onTabClick);
function onTabClick(item) { 
	item.addEventListener("click", function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);
		if (!currentBtn.classList.contains('active')) {
			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			});
			tabsItems.forEach(function (item) {
				item.classList.remove('active');
			});
			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		 }		
	});
}
document.querySelector('.tabs-block__btn').click();