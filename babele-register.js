Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'call-of-cthulhu-7th-babele-de',
			lang: 'de',
			dir: 'compendium'
		});
		
		document.getElementById("logo").src="/modules/call-of-cthulhu-7th-babele-es/img/fvtt-anvil-es.png";
		
	}
});
