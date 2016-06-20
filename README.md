# Syntactic Library
Syntactic Library is an open source project that allow you to organise your code snippets and samples in one single location enabling you and your team to boost your productivity by providing very well organised code library that fits very nicely with your preffered IDE such as Visual Studio, Itellij, Eclips and the cutting edge editors like VS Code and Sublime


### Getting started with this project
-------------

This project written in Java spring boot, angular 2 with typescript and sass.

To get started you will need:
-------------
- 10 Minutes
- Java editor of your choice ([STS is recommended])
-  [Node js]

To start clone the syntactic library
-------------
```sh
git clone https://github.com/benhallouk/syntactic-library.git 
```

Navigate to the UI folder
```sh
cd syntactic-library\src\main\resources\UI
```

Install node and angular dependencies
-------------

All the client depandancies including development tools can be installed using the command bellow:
```sh
npm install
```
`node_modules` and `typings` directories should be created during the install.

To build the UI and transpile all typescript and sass run the command:

```sh
npm run build
```
`public` directory should be created during the build inside the target class path

To start the development run the application from the IDE of your choice

Then run the command to start the browsersync for pleasant development

```sh
npm run start
```
The application should be displayed in the browser and the `gulp` tool will watch the client side changes and relead and sync the browser automatically.

License
----
Apache License 2.0

Copyright (c) 2016 Amine Benhallouk


[STS is recommended]: <https://spring.io/tools>
[Node js]: <https://nodejs.org/en/>