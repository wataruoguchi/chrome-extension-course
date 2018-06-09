document.querySelector('.yo').onclick = (event) => {
	const message = {
		type: 'start'
	}
	chrome.runtime.sendMessage(message)
};
