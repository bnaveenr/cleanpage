(() => {
	let styles="* { background: #002b36 ! important; color: #586e75 !important } :link, :link * { color: #3772D7 !important } :visited, :visited * { color: #7A49C7 !important }";
	if(document.createStyleSheet)
		document.createStyleSheet(`javascript:"${styles}"`);
})();