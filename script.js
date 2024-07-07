const divElement = document.querySelector('.Layout-sc-1xcs6mc-0.ivrFkx');

const buttonContainer = document.createElement('div');

const button = document.createElement('button');
button.textContent = 'Abrir streams';

button.style.padding = '10px 5px';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.fontSize = '16px';
button.style.cursor = 'pointer';
button.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 4px 6px';
button.style.backgroundColor = 'var(--color-background-button-primary-default)';
button.style.color = 'var(--color-text-button-primary)';
button.style.fontWeight = 'bold';

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'rgb(119, 44, 232)';
});

button.addEventListener('mouseout', () => {
    button.style.backgroundColor = 'var(--color-background-button-primary-default)';
});

buttonContainer.appendChild(button);

divElement.appendChild(buttonContainer);

divElement.style.display = 'flex';
divElement.style.justifyContent = 'space-between';

button.addEventListener('click', function () {
    const confirmacao = confirm("Deseja rodar o script para abrir os links na Twitch?");
    if (confirmacao) {
        const elementos = document.querySelectorAll('a[data-a-target="preview-card-image-link"]');
        const qntdeElementos = elementos.length;
        var contador = 0;

        elementos.forEach((elemento, index) => {
            const link = "https://www.twitch.tv" + elemento.getAttribute('href');
            contador++;

            setTimeout(() => {
                window.open(link, "_blank");
            }, index * 7000);
        });

        console.log("Contador:");
        console.log(contador);

        setTimeout(() => {
            alert("Todas as páginas foram abertas");
        }, qntdeElementos * 7000);
    } else {
        console.log("Script não rodado");
    }
});
