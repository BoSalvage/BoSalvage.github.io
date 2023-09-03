function scrollFunction() {
	var menu = document.getElementById("menu");
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		menu.style.top = "0";
	} else {
		menu.style.top = "-80px";
	}
}
