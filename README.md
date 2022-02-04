# Bem vindo ao Repositório Challenge Igs

O objetivo desse projeto é criar uma plataforma de ganhos, com mini-jogos para jogar e ganhar dinheiro, no momento foi criada a estrutura inicial e a estilização da plataforma, para jogar os jogos, você deverá clicar no jogo que deseja e será redirecionado para a tela de instalação, no caso do jogo jackpot, será redirecionado direto para o jogo.

## Ferramentas

  <h3>React.js</h3>
  <h3>React Testing Library</h3>
  <h3>Context API</h3>
  <h3>SASS</h3>
  <h3>React Bootstrap</h3>
  <h3>Docker</h3>

### Como utilizar

  #### Instalar
Para iniciar o projeto você deverá clonar o projeto com o comando ```git clone <url do metodo utilizado>```, assim que finalizado o carregamento,
 vá para o diretório, dentro do diretório execute ```npm install``` ou ```yarn install``` para instalar as dependências.

  #### Docker
Depois de instalada as dependências do projeto, verifique se está instalado o Docker na sua maquina com ```docker -v```, se não retorna a versão do docker, você deverá instala-lo.
 Para executar o docker você deverá instalar a imagem do DockerFile com ```docker image build -t <nome-que-você-quer-colocar-na-imagem> .```, e depois para criar o container ```docker container run -dti -p <sua-porta-local>:80(porta default do nginx) --name <nome-que-você-quer-colocar-no-container> <ID ou NOME DA IMAGEM>```.
 Será executado o docker no localhost na porta especificada em <sua-porta-local>, para acessar, vá para o navegador e digite localhost:<sua-porta-local> na URL
    ### Ou
  #### Executar
 Execute ```npm start``` para executar o React na rede local na sua porta 3000, para acessar, vá para o navegador de digite localhost:3000 na URL.

  ### Npm test
Para verificar os testes execute ```npm run test```.
