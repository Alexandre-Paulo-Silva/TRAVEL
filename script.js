function buscarRecomendacoes() {
    let destino = document.getElementById("destino").value.toLowerCase();
    let recomendacoesDiv = document.getElementById("recomendacoes");
    
    let destinos = {
        "paris": ["Torre Eiffel", "Museu do Louvre", "Catedral de Notre-Dame"],
        "roma": ["Coliseu", "Fontana di Trevi", "Vaticano"],
        "tokyo": ["Templo Senso-ji", "Shibuya", "Akihabara"],
        "rio de janeiro": ["Cristo Redentor", "Pão de Açúcar", "Praia de Copacabana"]
    };

    if (destinos[destino]) {
        recomendacoesDiv.innerHTML = `<h2>Recomendações para ${destino.charAt(0).toUpperCase() + destino.slice(1)}:</h2>
                                      <ul>${destinos[destino].map(item => `<li>${item}</li>`).join("")}</ul>`;
    } else {
        recomendacoesDiv.innerHTML = "<p>Destino não encontrado. Tente outro!</p>";
    }
}


function buscar() {
    let termo = document.getElementById("searchBox").value.toLowerCase();
    let secoes = document.querySelectorAll("section");
    let encontrou = false;

    secoes.forEach(secao => {
        if (secao.innerText.toLowerCase().includes(termo)) {
            secao.scrollIntoView({ behavior: "smooth" });
            encontrou = true;
        }
    });

    if (!encontrou) {
        alert("Nenhum resultado encontrado!");
    }
}


function limparCampo() {
    document.getElementById("searchBox").value = "";
}


        const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const newYorkTime = new Date().toLocaleTimeString('en-US', options);
        console.log("Current time in New York:", newYorkTime);