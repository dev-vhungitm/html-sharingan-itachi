const wait = async time => {
	await new Promise(resolve => {
		setTimeout(() => {
			resolve(true);
		}, time);
	});
};

const handleOpen = async () => {
	const eyeContainerEls = document.querySelectorAll('.eye_container');

	eyeContainerEls.forEach(eyeContainerEl => {
		eyeContainerEl.classList.remove('eye_open');
	});

	await wait(100);

	eyeContainerEls.forEach(eyeContainerEl => {
		eyeContainerEl.classList.add('eye_open');
	});
};

const handleEnd = async () => {
	const eyeContainerEls = document.querySelectorAll('.eye_container');

	await wait(2000);
	eyeContainerEls.forEach(eyeContainerEl => {
		eyeContainerEl.classList.add('end');
	});
};

const handleClose = async () => {
	await wait(500);
	const eyeContainerEls = document.querySelectorAll('.eye_container');

	eyeContainerEls.forEach(eyeContainerEl => {
		eyeContainerEl.classList.remove('eye_close');
	});

	await wait(100);

	eyeContainerEls.forEach(eyeContainerEl => {
		eyeContainerEl.classList.add('eye_close');
	});

	await wait(500);

	eyeContainerEls.forEach(eyeContainerEl => {
		eyeContainerEl.classList.remove('eye_close');
	});
};

const handleAnimation = async (animationName = '') => {
	await handleClose();
	await wait(200);

	const eyeContainerEls = document.querySelectorAll('.eye_container');
	eyeContainerEls.forEach(eyeContainerEl => {
		eyeContainerEl.classList.add(animationName);
	});
	await wait(4000);
};

const start = async () => {
	await handleOpen();
	await wait(3000);
	await handleAnimation('sharingan_1');
	await handleAnimation('sharingan_2');
	await handleAnimation('sharingan_3');
	await handleAnimation('mangekyou_sharingan');
	await handleEnd();
};

start();
