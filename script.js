const dropDown = document.getElementsByClassName("dropbtn");
const body = document.querySelector('body');
let myHeading = document.getElementsByClassName('addis')
myHeading.textContent = 'red';

dropDown[0].addEventListener('click', function () {
	body.style.display = "none";
});

let form = document.getElementById("my-form");

async function handleSubmit(event) {
	event.preventDefault();
	let status = document.getElementById("status");
	let data = new FormData(event.target);
	fetch(event.target.action, {
		method: form.method,
		body: data,
		headers: {
			'Accept': 'application/json'
		}
	}).then(response => {
		status.innerHTML = "Thanks for your submission!";
		form.reset()
		setTimeout(status, 3000);
	}).catch(error => {
		status.innerHTML = "Oops! There was a problem submitting your form"
		setTimeout(status, 3000);
	});
}
form.addEventListener("submit", handleSubmit)