// Function to load chat history from local storage
function loadChatHistory() {
    const messagesDiv = document.getElementById('messages');
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];

    chatHistory.forEach((message) => {
        messagesDiv.innerHTML += `<p>${message}</p>`;
    });
}

// Function to save a message to local storage
function saveMessage(message) {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.push(message);
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

// Load chat history when the page loads
window.onload = loadChatHistory;

// Event listener for the send button
document.getElementById('sendButton').onclick = () => {
    const input = document.getElementById('messageInput');
    const message = input.value;

    if (message) {
        // Save the message to local storage
        saveMessage(message);
        
        // Display the message in the chat window
        const messagesDiv = document.getElementById('messages');
        messagesDiv.innerHTML += `<p>${message}</p>`;
        
        // Clear the input field
        input.value = '';
    }
};
