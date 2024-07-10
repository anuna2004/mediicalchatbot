function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (message) {
        addMessage(message, 'user');
        input.value = '';
        setTimeout(() => addMessage(generateBotResponse(message), 'bot'), 1000);
    }
}

function addMessage(message, sender) {
    const chatOutput = document.getElementById('chat-output');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const logoElement = document.createElement('div');
    logoElement.classList.add('logo');
    logoElement.innerText = sender === 'user' ? 'User' : 'Bot';
    messageElement.appendChild(logoElement);

    const textElement = document.createElement('div');
    textElement.classList.add('text');
    textElement.innerText = message;
    messageElement.appendChild(textElement);

    const timeElement = document.createElement('div');
    timeElement.classList.add('time');
    timeElement.innerText = new Date().toLocaleTimeString();
    messageElement.appendChild(timeElement);

    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

function clearMessages() {
    document.getElementById('chat-output').innerHTML = '';
}

function newChat() {
    clearMessages();
    addMessage('Hello! How can I assist you today?', 'bot');
}

function generateBotResponse(input) {
    return You said: ${input};
}