// Creación de etiquetas padres HTML
const body_structure = document.createElement("div");
document.body.appendChild(body_structure);

// Inserción de contenido a las etiquetas padres
function bodyHTML(body_structure) {
    body_structure.innerHTML = 
    `
    <div>
        <header>
            <nav> 
                <a href="https://github.com/GenserDev/Web-Chat" target="_blank"> 
                    <img src="Assets/github-logo.png" alt="Github">
                </a>
                <a href="https://genserdev.space">
                    <img src="Assets/genderdev-logo.png" alt="Genserdev">
                </a>
            </nav>
        </header>
    </div>        
    `;
}

const estilo = document.createElement("style");
estilo.innerHTML = `

    body{
        margin: 0;}
    header img {
        width: 50px;
        height: auto;
    }

    header {
        display:flex;
        justify-content: center;
        align-items: center;
        background: black;

    }
`;
document.head.appendChild(estilo);


// Compilador de las etiquetas
bodyHTML(body_structure)