function newChat() {
    const stramerName = document.querySelector('#chat-input').value.replaceAll(' ', '');
    const embed = document.querySelector('#chat-embed');
    embed.src = `https://www.twitch.tv/embed/${stramerName}/chat?darkpopout&parent=`+window.location.hostname;
}

document.querySelector('#chat-button').addEventListener('click', newChat);
document.querySelector('#chat-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        newChat();
    }
});