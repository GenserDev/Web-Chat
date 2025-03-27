// API structure 
document.addEventListener('DOMContentLoaded', () => {
    const messageDisplayContainer = document.querySelector('.message-display-container');
    const messageForm = document.querySelector('form');
    const messageInput = document.getElementById('message');
    const charCounter = document.createElement('div');
    charCounter.classList.add('char-counter');
    messageForm.appendChild(charCounter);

    // Character counter
    messageInput.addEventListener('input', () => {
        const maxLength = 140;
        const currentLength = messageInput.value.length;
        charCounter.textContent = `${currentLength}/${maxLength}`;

        if (currentLength > maxLength) {
            messageInput.value = messageInput.value.slice(0, maxLength);
            charCounter.textContent = `${maxLength}/${maxLength}`;
        }
    });

    // GET old messages
    async function loadMessages() {
        try {
            const response = await fetch('https://chat.devng.online/chats');
            const messages = await response.json();
            
            messageDisplayContainer.innerHTML = '';
            
            const sortedMessages = messages.sort((a, b) => {
                return (a.id || 0) - (b.id || 0);
            });
            
            sortedMessages.forEach(msg => {
                const messageElement = document.createElement('div');
                messageElement.classList.add('message');
                messageElement.innerHTML = `
                    <div class="message-content">
                        <span class="username">${msg.username}</span>
                        <p>${msg.message}</p>
                    </div>
                `;
                messageDisplayContainer.appendChild(messageElement);
            });
            
            messageDisplayContainer.scrollTop = messageDisplayContainer.scrollHeight;
        } catch (error) {
            console.error('Error loading messages:', error);
            messageDisplayContainer.innerHTML = `
                <div class="error-message">
                    No se pudieron cargar los mensajes. Por favor, intenta de nuevo.
                </div>
            `;
        }
    }

    // POST new message
    messageForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = messageInput.value.trim();
        
        if (message && message.length <= 140) {
            try {
                const response = await fetch('https://chat.devng.online/chats', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: 'Catalan',
                        message: message
                    })
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                messageInput.value = ''; 
                charCounter.textContent = '0/140'; 
                
                await loadMessages();
            } catch (error) {
                console.error('Error sending message:', error);
                alert('No se pudo enviar el mensaje. Por favor, intenta de nuevo.');
            }
        }
    });

    loadMessages();
});

// HTML create
const body_structure = document.createElement("div");
document.body.appendChild(body_structure);

// HTML Content
function bodyHTML(body_structure) {
    body_structure.innerHTML = 
    `
    <div class="principal-container">
        <header>
            <nav> 
                <a href="https://github.com/GenserDev/Web-Chat" target="_blank"> 
                    <img src="Assets/github-logo.png" alt="Github">
                </a>
                <a class="webChat" href="index.html">
                    Web-Chat/>
                </a>
                <a href="https://genserdev.space">
                    <img src="Assets/genderdev-logo.png" alt="Genserdev">
                </a>
            </nav>
        </header>

        <div class="screen-container">
            <div class="chat-container">
                <div class="message-display-container">
                    <!-- Messages are here -->
                </div>
                <div class="writeText-container">
                    <form method="post">
                        <input type="text" placeholder="Write message" name="message" id="message" required maxlength="140">
                        <button type="submit"><</button>
                    </form>
                </div>
            </div>
        </div>    
    </div>          
    `;
}

// CSS Content
const estilo = document.createElement("style");
estilo.innerHTML = `
    body {
        margin: 0;
        background-color: aquamarine;
        font-family: Arial, sans-serif;
    }

    /* Header styles */
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        background: black;
        padding: 20px;
    }

    nav {
        display: flex;
        gap: 50px;
        align-items: center;
    }

    header img {
        max-width: 50px;
        height: auto;
        padding: 10px;
    }

    header nav .webChat {
        text-decoration: none;
        color: rgb(10, 245, 72);  
        font-size: 40px;
    }

    /* back screen */
    .screen-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .chat-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;
        max-width: 300px;
        min-width: auto;
        width: 100%;
        height: 550px;
        border-radius: 3%;
        background-color: rgb(71, 71, 71);
        position: relative;
    }

    .writeText-container {
        display: flex;
        margin: 5px;
        position: absolute;
        bottom: 15px;
        width: 90%;
        flex-direction: column;
    }

    .writeText-container form {
        display: flex;
        width: 100%;
    }

    .writeText-container input {
        flex-grow: 1;
        padding: 5px;
        max-width: 250px;
    }

    .writeText-container button {
        padding: 5px 10px;
    }

    .char-counter {
        align-self: flex-end;
        font-size: 12px;
        color: #666;
        margin-right: 5px;
        margin-bottom: 2px;
    }

    /* front screen */
    .message-display-container {
        background-color: white;
        position: absolute;
        top: 40px;
        margin: 5px;
        max-width: 300px;
        min-width: 275px;
        height: 425px;
        overflow-y: auto; /* Add scrolling */
        display: flex;
        flex-direction: column;
    }

    /* Box message */
    .message {
        margin: 10px;
        padding: 5px;
        background-color: rgb(208, 208, 208);
        border-radius: 5px;
    }

    .message-content {
        display: flex;
        flex-direction: column;
    }

    .message .username {
        font-weight: bold;
        color: #333;
        margin-bottom: 5px;
    }

    .message p {
        margin: 0;
        word-wrap: break-word;
    }
`;
document.head.appendChild(estilo);

bodyHTML(body_structure);