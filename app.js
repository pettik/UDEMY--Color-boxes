const colors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
	'indigo',
	'violet'
];
const printColor = function() {
	h1.style.color = this.style.backgroundColor;
	h1.style.opacity = 1;
};

const container = document.querySelector('#boxes');
const h1 = document.querySelector('h1');

for (let color of colors) {
	const box = document.createElement('div');
	box.style.backgroundColor = color;
	box.classList.add('box');
	container.appendChild(box);
	box.addEventListener('click', printColor);
}

document.body.addEventListener('keypress', function(e) {
	console.log(e.key);
});
