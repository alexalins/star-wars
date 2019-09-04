# Star Wars

Projeto feito em [Angular](https://angular.io) versão 7.3.9. Utilizando a API [SWAPI](https://swapi.co)

## Executando

Para excutar é necessário:
* [Node](https://nodejs.org/en/)
* [Angular](https://angular.io)

Para instalar o angular:
```
npm install -g @angular/cli
```
Antes de excutar é necessário importar as depêndencias do projeto:
```
npm i
```
Executar projeto:
```
ng s
```
Projeto irá executar no endereço `http://localhost:4200`

### Informações

* Projeto foi feito ultilizando o [Lazy Loading](https://angular.io/guide/lazy-loading-ngmodules) do Angular;
* Foi ultilizado o framework CSS bootstrap4;
* Para salvar as urls necessárias para navegação foi ultilizado o localStorage;

#### Site

Temos como tela inicial as listagens dos filmes, o usuário poderá clicar parar ver as informalções do filme. <br/>
Com as informações também vem os cards com os outros objetos (people, planets, species...), assim, o usuário poderá navegar entre os cards do site.
