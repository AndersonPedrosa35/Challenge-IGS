# Bem vindo ao Repositório Challenge Igs

O objetivo desse projeto é criar uma plataforma de ganhos, com mini-jogos para jogar e ganhar dinheiro, no momento foi criada a estrutura inicial e a estilização da plataforma, para jogar os jogos, você deverá clicar no jogo que deseja e será redirecionado para a tela de instalação, no caso do jogo jackpot, será redirecionado direto para o jogo.

<p>Não foi feito o Back-end e o Banco de dados por que não seria viável para entregar na data prevista.</p>

## Ferramentas

  React.js</br>
  React Testing Library</br>
  Context API</br>
  SASS</br>
  React Bootstrap</br>
  Docker</br>

### Como utilizar

  #### Deploy
  O Container docker foi hospedado na Amazon AWS com o serviço Elastic Container Service, utilizando algumas VPNs no container, a url disponibilizada foi
  http://challenge-igs-loadbalance-799624599.sa-east-1.elb.amazonaws.com/, acesse para ver mais detalhes do projeto.

  #### Instalar
Para iniciar o projeto você deverá clonar o projeto com o comando ```git clone <url do metodo utilizado>```, assim que finalizado o carregamento,
 vá para o diretório, dentro do diretório execute ```npm install``` ou ```yarn install``` para instalar as dependências.

  #### Docker
Depois de instalada as dependências do projeto, verifique se está instalado o Docker ou o Docker Compose que facilita a execução do container, na sua maquina com ```docker -v``` para o Docker ou ```docker-compose -v``` para o Docker Compose, se não retorna a versão de pelo menos um dos dockers, você deverá instala-lo.
 Com o Docker Compose em mãos, apenas digite no terminal ```docker-compose up --build web``` e está rodando na porta 80 do localhost, ou você poderá seguir os passos do Docker abaixo.<br/>
 Para executar o docker você deverá executar a imagem do DockerFile com ```docker image build -t <nome-que-você-quer-colocar-na-imagem> .```, e depois para criar o container ```docker container run -dti -p <sua-porta-local>:80(porta default do nginx) --name <nome-que-você-quer-colocar-no-container> <ID ou NOME DA IMAGEM>```.
 Será executado o docker no localhost na porta especificada em <sua-porta-local>, para acessar, vá para o navegador e digite localhost:<sua-porta-local> na URL<br /><br />
  #### Ou
  #### Executar
 Execute ```npm start``` para executar o React na rede local na sua porta 3000, para acessar, vá para o navegador de digite localhost:3000 na URL.

  ### Npm test
Para verificar os testes execute ```npm run test```.
