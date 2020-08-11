# Proffy

<p align="center">
    <img src="https://github.com/felipedmsantos95/proffy/blob/master/img/proffy.jpg"/>
    </br>
    <a href="readme_en.md">English</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="readme.md">Português</a>&nbsp;&nbsp;&nbsp;
</p>

## Prévia da Aplicação Web

<p align="center">
  <img src="https://github.com/felipedmsantos95/proffy/blob/master/img/proffy.gif"/>
</p>

## Screenshots App Mobile

<p align="center">
  <img src="https://github.com/felipedmsantos95/proffy/blob/master/img/main.png"/>
  <img src="https://github.com/felipedmsantos95/proffy/blob/master/img/search1.png"/>
  <img src="https://github.com/felipedmsantos95/proffy/blob/master/img/search2.png"/>
</p>

<p align="center">
  <img src="https://github.com/felipedmsantos95/proffy/blob/master/img/search_result.png"/>
  <img src="https://github.com/felipedmsantos95/proffy/blob/master/img/favorites.png"/>
  <img src="https://github.com/felipedmsantos95/proffy/blob/master/img/classes.png"/>
</p>

## Sobre

Aplicação desenvolvida na Next Level Week 2.0, da [Rocketseat](https://github.com/Rocketseat): plataforma de estudos que conecta alunos e professores para aulas online.

## Tecnologias utilizadas

- React.js para front-end
- React-Native para app mobile
- Node.js para back-end
- Banco de dados SQLite


## Requisitos

Para executar os módulos do projeto é necessário ter os seguintes requisitos instalados no sistema:

- Node 12.x ou superior
- Yarn 1.21 ou superior
- Expo-cli 3.15 ou superior

## Executando o projeto

### Clonando o projeto

```bash
$ git clone https://github.com/felipedmsantos95/proffy
$ cd proffy
```

### Executando Backend

1. Para rodar a API pela primeira vez, acessar o diretório `./server/` e executar o comando abaixo para instalar as dependências:

		yarn

2. Para configurar o banco de dados:

        yarn knex:migrate

3. Uma vez instaladas as dependências, pelo comando abaixo é possível executar o backend da aplicação, por padrão ele estará disponível para requisições através da porta 3333 no endereço http://localhost:3333/:

		yarn start

### Executando Frontend Web

Com o backend sendo executado, pode-se executar os passos abaixo para rodar o frontend da aplicação localmente.

1. Acessar o diretório `./web/` e executar o comando abaixo para instalar as dependências:

		yarn

2. Uma vez instaladas as dependências, pelo comando abaixo é possível executar o frontend da aplicação:

		yarn start

3. Feito isso, através de um navegador de internet (preferencialmente o Chrome ou o Firefox), através do endereço abaixo, será possível interagir com a aplicação desenvolvida.

		http://localhost:3000/

### Executando App Mobile

1. Instalar o aplicativo [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) em seu smartphone e o conectar na mesma rede que o servidor back-end. PS: a URL do servidor backend pode ser alterada na variavel baseURL em `./mobile/src/services/api.ts`.

2. Acessar o diretório `./mobile/` e executar o comando abaixo para instalar as dependências:

		yarn

3. Uma vez instaladas as dependências, pelo comando abaixo é possível executar o cliente expo em seu navegador web padrão:

		yarn start

4. Em seu smartphone abra o app expo e no modo LAN, faça o scan do QRCode fornecido em seu navegador web.

