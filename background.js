const delay = 3 * 1000;
const ginpeiNotification = (msg) => {
	chrome.notifications.create(null, {
		type: chrome.notifications.TemplateType.BASIC,
		iconUrl: '/ginpei.png',
		title: 'Yo!',
		message: '日本語' + JSON.stringify(msg),
	});
};

const ginpeiTimeout = (msg) => setTimeout(() => ginpeiNotification(msg), delay)
chrome.runtime.onMessage.addListener((message) => {
  ginpeiTimeout(message)
})
