console.log('Širina: ' + window.innerWidth);
console.log('Visina: ' + window.innerHeight);

console.log(window.location.hostname);
window.location.href = 'https://www.google.hr/';

window.confirm("We use cookies on this website. Do you agree to enter?");

window.setTimeout(function(){
	console.log('I am late.');
}, 2000);