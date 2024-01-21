function goToHomePage() {
    window.location.href = "index.html";
}

function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var mediaInput = document.getElementById('mediaInput');
    var messagesContainer = document.getElementById('messages');

    if (messageInput.value.trim() !== '' || mediaInput.files.length > 0) {
        var messageDiv = document.createElement('div');
        messageDiv.className = 'message';

        var userSpan = document.createElement('span');
        userSpan.className = 'user';
        userSpan.innerText = 'User';

        var timestampSpan = document.createElement('span');
        timestampSpan.className = 'timestamp';
        var now = new Date();
        timestampSpan.innerText = now.getHours() + ':' + now.getMinutes();

        var messageText = document.createElement('p');
        messageText.innerText = messageInput.value;

        messageDiv.appendChild(userSpan);
        messageDiv.appendChild(timestampSpan);

        if (mediaInput.files.length > 0) {
            var mediaFile = mediaInput.files[0];
            var mediaImage = document.createElement('img');
            mediaImage.src = URL.createObjectURL(mediaFile);
            mediaImage.className = 'media-image';
            messageDiv.appendChild(mediaImage);
        }

        messageDiv.appendChild(messageText);

        messagesContainer.appendChild(messageDiv);

        // Clear input after sending message
        messageInput.value = '';
        mediaInput.value = '';

        // Scroll to the bottom to show the latest message
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

function openMediaInput() {
    var mediaInput = document.getElementById('mediaInput');
    mediaInput.click();
}

// Rest of the JavaScript code remains unchanged

