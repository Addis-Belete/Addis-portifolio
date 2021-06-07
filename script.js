const dropDown = document.getElementsByClassName("dropbtn");
const body = document.querySelector('body');

dropDown[0].addEventListener('click', function () {
	body.style.display = "none";
});