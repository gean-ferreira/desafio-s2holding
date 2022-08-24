# Desafio para vaga de desenvolvedor front-end Jr. na empresa S2 Holding

Para poder conseguir ver os produtos do teste deverá baixar um puglin que dá permissões a requisições externas. Eu, por exemplo, baixei o Allow CORS. Segue o link, caso queira baixar o mesmo plugin: [Allow CORS: Access-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf). Caso tenha dificuldades há um tutorial em forma de vídeo ensinando ativar as permissões.

### Funcionalidades

Chegando ao final da lista de produtos, o observeIntersection (infinityScroll) irá ativar, assim, renderizando mais produtos. Sempre carregando 8 em 8 produtos. Outra funcionalidade que este projeto tem é a rotação 3d quando é passado o mouse em cima dos produtos mostrando outra foto do produto.

### Teste

1. O item denominado Banner Full, é uma imagem responsiva de borda a borda com um link para alguma página abrindo na mesma aba. Plus: Existem 2 imagens na pasta, uma para versão desktop e outra mobile. Realize um media query que faça a imagem ser substituída quando for até 767px de tela para mobile e a partir disso, a imagem desktop.
2. Os itens denominados middle, são imagens responsivas que ficaram agrupadas de 2 em 2 em duas linhas, cada uma com um link abrindo em uma nova aba.
Plus: Usando o mesmo princípio do Banner full, caso a resolução seja até 767px, faça um carrossel com as imagens exibindo de 1 em 1.
3. O item chamado imagem produto, deverá ser uma imagem renderizada na tela, ela está contida no objeto images, que está dentro de items, podendo ser utilizado imageTag ou imageUrl para renderizar a imagem.
4. Abaixo da imagem do produto, temos o item nome produto, que está contido no campo productName.
5. Abaixo do nome do produto, temos o item preço produto, que deverá ser mostrado em Real (R$). Este campo está contido dentro de items > sellers > commertialOffer com o nome de Price.
6. Após recuperar esses dados, eles deverão ser renderizados na tela em forma de carrossel (Um produto ao lado do outro) ou em forma de prateleira (Exemplo da imagem abaixo). Tente exibir 4 produtos na tela quando ela for maior que 767px e 1 produto na tela quando ela for menor que 767px.
7. Por fim, o item um titulo deverá ser centralizado com letras maiores que o texto abaixo dele, que deverá ser justificado e alinhado ao centro com uma borda dos lados.
