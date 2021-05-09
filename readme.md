# Restaurant_Finder
Projeto para criação de aplicativo para buscar dados e listagem de restaurantes

![Tela1](https://i.imgur.com/osbQg2d.png)
![Tela2](https://i.imgur.com/dRN4vRt.png)

# Iniciando
Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste. Consulte implantação para obter notas sobre como implantar o projeto em
um sistema ativo.

## Pré-requisitos:
Para execução e desenvolvimento do projeto é necessário, ou que tenha instalado:
- nodejs
- react-native
- yarn ou npm
- [Android SDK](https://developer.android.com/studio?hl=pt&gclid=CjwKCAjwkN6EBhBNEiwADVfya0HQDwC1tW28XsrFEbeBj0ret04bk5BuRVbIPom6saQjwZn7J3fUsxoCzC0QAvD_BwE&gclsrc=aw.ds)


## Desenvolvido com
 - JavaScript
 - [React-Native](https://facebook.github.io/react-native/)
 - [react-native-svg](https://github.com/react-native-community/react-native-svg)
 - [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)
 - [TypeScript](https://www.typescriptlang.org/)
 - [Jest](https://jestjs.io/pt-BR/)
 - [React Native Testing library](https://testing-library.com/docs/react-native-testing-library/intro/)

## Execução pro projeto
 - Para linkar as fontes, na raiz do projeto foi executado npx react-native link
 - Para executar o aplicativo pela avd do android sdk basta baixar os pacotes do package.json
 utilizando o comando ``` yarn ou npm install ``` e logo após o download terminar, utilizar o comando ```npx react-native run-android ```.

## Dispositivo utilizado
  - Para os testes e criação do app, foi utilizado um AVD com android 11 resolução full HD (porém também testei em resoluções HD e ultra)

## Execução dos testes unitários
- Para a execução dos testes unitários, basta rodar o comando ``` yarn test ``` ou ``` npm run test```.
- Para verificar o coverage basta executar o comando ```yarn jest --coverage```
- A seguir a cobertura dos testes realizdos

### Coverage
![Coverage](https://i.imgur.com/OJzyalg.png)

## Api para recuperação dos dados dos restaurantes
- https://605d074f9386d200171ba209.mockapi.io/api/v1/


## Arquitetura do projeto
	src
		- api
    - assets
    - components
    - pages
    - routes
    - services


### Atomic design
 - Para design e organização do projeto utilizei parte dos conceitos do Design atomico para aplicacoes react, onde cada componente é criado e reutilizado


## Próximos passos
 - Configurar o projeto para geração da release (até o momento como está somente em desenvolvimento, o apk está sendo gerado somente em debug): para isso é necessario gerar as keys seguindo o tutorial (https://reactnative.dev/docs/signed-apk-android), acessar a pasta android dentro do diretorio raiz do projeto e então executar o comando ``` ./gradlew bundleRelease ``` para a geração do apk
 - Realizar algumas melhorias de organização dos componentes (por conta do curto prazo, alguns pontos de melhorias se fazem necessários, principalmente na organização de alguns styles dos components para extrair dos componentes pai)


## Autores
- Adriano Martins de Oliveira Sousa.

