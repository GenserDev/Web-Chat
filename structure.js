// Creación de etiquetas padres HTML
const header = document.createElement("header");
document.body.appendChild(header);

// Inserción de contenido a las etiquetas padres
function headerHTML(header) {
    header.innerHTML = 
    `
        <nav> 
            <a href="https://github.com/GenserDev/Web-Chat" target="_blank"> 
                <img src="Assets/github-logo.png" alt="Github">
            </a>
            <a href="https://genserdev.space">
                <img src="Assets/genderdev-logo.png" alt="Genserdev">
            </a>
        </nav>
    `;
}

document.body.style.margin = "0";
// Estilos de las etiquetas - Centrar el contenido dentro del header
header.style.display = "flex"; 
header.style.justifyContent = "center"; 
header.style.alignItems = "center"; 
header.style.backgroundColor = "black";

// Compilador de las etiquetas
headerHTML(header);