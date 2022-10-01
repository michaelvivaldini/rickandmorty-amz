async function getEpisodes() {
    const resposta = await fetch('https://rickandmortyapi.com/api/episode', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const respostaEmJson = await resposta.json();
    const episodios = respostaEmJson.results;
    var episodiosListaHtml = '';
    const lastEpisodes = episodios.slice(0,4);
    lastEpisodes.forEach(episodio => {
        const html = `
        <li class = 'card'>
            <div class= 'card-img'><img src="https://rickandmortyapi.com/api/character/avatar/${episodio.id}.jpeg" alt="EP1"></div>
            <div class= 'card-details'>
                <h2 class='episode'>
                    ${episodio.episode}
                </h2>
                <span>
                    ${episodio.name}
                </span>
                <span class='air-date'>
                    ${episodio.air_date}
                </span>
                <div>
                    <span>
                        latest
                    </span>
                </div>
            </div>
        </li>
    `;
        episodiosListaHtml = episodiosListaHtml + html;

    });

    document.querySelector('ul.last-episodes').innerHTML = episodiosListaHtml;
}
this.getEpisodes();