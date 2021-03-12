document.addEventListener('DOMContentLoaded', () => {
	const dino = document.querySelector('.dino');
	let isJumping = false;
	let gravity = 0.9;

	function control(e) {
		if (e.keyCode === 32) {
			if (!isJumping) {
				isJumping = true;
				jump();
			}
		}
	}
	document.addEventListener('keyup', control);

	function jump() {
		let count = 0;
		let timerId = setInterval(function() {
			//move down
			if (position === 150) {
				clearInterval(timerId);
				console.log('down');
				let downtimerId = setInterval(function() {
					if (position === 0) {
						clearInterval(downtimerId);
						isJumping = false;
					}
					position -= 30;
					dino.style.bottom = position + 'px';
				}, 20);
			}
			//move up
			console.log('up');
			count++;
			position += 30;
			position = position * gravity;
			dino.style.bottom = position + 'px';
			console.log(dino.style.bottom);
		}, 20);
	}
});
