const delay = 3 * 1000;
const ginpeiNotification = () => {
  chrome.notifications.create(null, {
    type: chrome.notifications.TemplateType.BASIC,
    iconUrl: '/ginpei.png',
    title: 'Yo!',
    message: '日本語',
  });
};

setTimeout(() => ginpeiNotification(), delay)

