document.querySelector('.yo').onclick = (event) => {
  const msg = 'Did you need coffee? Alexa, make a cup of coffee for him. Alexa, Alexa, Alexaaa!!!!!'
  chrome.tts.speak(msg);
};

