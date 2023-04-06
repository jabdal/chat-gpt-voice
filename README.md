# chat-gpt-voice
A voice chatbot that uses [ChatGPT](https://chat.openai.com) 3.5 [completions endpoint](https://platform.openai.com/docs/api-reference/chat) written in vanilla JavaScript that is under 100 lines of fairly legible code

Uses [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)'s SpeechRecognition and SpeechSynthesisUtterance interfaces for speech-to-text (STT) and text-to-speech (TTS) 

Simply tap/click on the body of the page to activate speech recognition

<strong>Live demo:</strong>

https://raw.githack.com/jay23606/chat-gpt-voice/main/chat.html (or tinyurl.com/gpt-voice)

I've also added a form of "tabs" using iframes and a way to toggle to vanilla-chatgpt

https://raw.githack.com/jay23606/chat-gpt-voice/main/tabs.html (or tinyurl.com/gpt-voice-tabs)

Requires entering in an API key from openai.com which is stored in localStorage 

<strong>To get api key:</strong>

https://platform.openai.com/account/api-keys

A checkbox is included to enable or disable STT and TTS whose state is also stored in localStorage

I wrote it primarily so I could easily ping ChatGPT on my mobile device (Added PWA support using manifest.json)


<strong>Screenshot</strong>:


![screenshot](screenshot.png)

<strong>Inspiration:</strong>

https://github.com/casualwriter/vanilla-chatgpt

https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/
