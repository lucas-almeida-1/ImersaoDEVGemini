function mostrarCinemas(capital) {
    const listaCinemas = document.getElementById('resultados-pesquisa');
    listaCinemas.innerHTML = '';

    if (cinemas[capital]) {
        cinemas[capital].forEach(cinema => {
            const itemCinema = document.createElement('div');
            itemCinema.classList.add('item-resultado');
            itemCinema.innerHTML = `
                <h2>${cinema.nome}</h2>
                <p>${cinema.endereco}</p>
                <p>${cinema.descricao}</p>
                <a href="${cinema.link}" target="_blank">Mais informações</a>
            `;
            listaCinemas.appendChild(itemCinema);
        });
    } else {
        listaCinemas.innerHTML = '<p>Nenhum cinema encontrado para esta capital.</p>';
    }
}

const botaoModoNoturno = document.getElementById('modo-noturno');
let modoNoturno = false;

botaoModoNoturno.addEventListener('click', () => {
    modoNoturno = !modoNoturno;
    document.body.classList.toggle('modo-noturno');
});