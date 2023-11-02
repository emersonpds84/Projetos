const contentDiv = document.getElementById("content");
const links = document.querySelectorAll(".link");

// Conteúdo preenchido para os links
const contents = {
    about: "Sou iniciante na aréa de Ti, Porém  sempre li sobre o assunto em especial sobre Banco de Dados, então está sendo uma experiencia prazerosa ",
    education: "Estou Cursando o Primeiro ano do Curso Superior em Banco de Dados",
    portfolio: `
    <h2>Meu Portfólio</h2>
    <p>AQUI ESTÃO ALGUNS DOS MEUS PROJETOS:</p>
    
    <div class="portfolio-item">
        <a href="trabalho.html.pdf">Meu Primeiro Projeto em Banco De Dados</a>
        <img src="Mysql.html.png" alt="Projeto 1">
    </div>
    
    <div class="portfolio-item">
    <a href="cofrinho.html.zip"</a>
        <p>Meu Primeiro Projeto em Java</p>
        <img src="java.html.jpg" alt="Projeto 2">
    </div>
`,
    contact: `
        <form>
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" required><br><br>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            
            <label for="message">Mensagem:</label><br>
            <textarea id="message" name="message" rows="4" required></textarea><br><br>
            
            <input type="submit" value="Enviar">
        </form>
        <p>Entre em contato pelo meu email: <a href="mailto:seuenderecoemail@example.com">emersonpds84@gmail.com</a>.</p>
        <p>Entre em contato pelo meu telefone: <a href="tel:">(41) 997639838</a>.</p>
        
    `   
};

// Função para trocar o conteúdo com base no link clicado
function changeContent(event) {
    event.preventDefault();
    const link = event.target.getAttribute("data-content");
    contentDiv.innerHTML = contents[link];
}

// Adicionar evento de clique aos links
links.forEach(link => {
    link.addEventListener("click", changeContent);
});

