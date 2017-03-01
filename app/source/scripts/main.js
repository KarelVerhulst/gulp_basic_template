

init = function(){
	var btn = document.getElementById('btnShow'),
		textarea = document.getElementById('txtpackage');

	btn.addEventListener('click', function(){
		textarea.value = installGulpPackages();
	});
};

init();