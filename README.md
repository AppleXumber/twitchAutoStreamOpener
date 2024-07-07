# Script Automático para Abrir Streams na Twitch

Este script JavaScript permite abrir automaticamente os links das streams da Twitch em novas guias do navegador, facilitando o acesso rápido aos conteúdos que você deseja assistir.

## Como Usar

1. **Instalação**: Adicione o script através de alguma extensão que abra automaticamente o script na página https://www.twitch.tv/directory/following/live

2. **Funcionalidade**: O script adiciona um botão "Abrir streams" a uma determinada div em sua página web. Ao clicar neste botão, o script pergunta ao usuário se deseja executar o processo para abrir os links das streams.

3. **Personalização**: O botão e a div são estilizados para se integrarem ao design da sua página. Você pode ajustar as propriedades de estilo no código conforme necessário.

4. **Comportamento**: O script itera sobre os links das streams disponíveis na página (identificados pelo seletor 'a[data-a-target="preview-card-image-link"]'), abrindo cada um em uma nova guia do navegador com um atraso de 7 segundos entre cada abertura para melhor organização.

## Como Integrar

- **Requisitos**: Certifique-se de ter uma estrutura HTML com uma div específica identificada por uma classe ('.Layout-sc-1xcs6mc-0.ivrFkx') onde o botão será adicionado.


## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para forkar o projeto, fazer alterações e enviar um pull request. Qualquer melhoria no código ou na documentação será apreciada.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT) - veja o arquivo LICENSE.md para mais detalhes.
