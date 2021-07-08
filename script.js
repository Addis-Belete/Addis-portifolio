const dropDown = document.getElementsByClassName("dropbtn");
const form = document.getElementById("my-form");
const deskFrom = document.getElementById("desk-form")
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
		setTimeout(() => {
			status.innerText = '';
		}, 3000);
	}).catch(error => {
		status.innerHTML = "Oops! There was a problem submitting your form"
		setTimeout(() => {
			status.innerText = '';
		}, 3000);
	});
}
form.addEventListener("submit", handleSubmit)
deskFrom.addEventListener("submit", handleSubmit)