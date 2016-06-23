# Syntactic Library [ ![Codeship Status for benhallouk/syntactic-library](https://codeship.com/projects/f0f42a60-1a89-0134-4629-56774cd00e66/status?branch=master)](https://codeship.com/projects/159370)
Syntactic Library is an open source project that allow you to organise your code snippets and samples in one single location enabling you and your team to boost your productivity by providing very well organised code library that fits very nicely with your preffered IDE such as Visual Studio, Itellij, Eclips and the cutting edge editors like VS Code and Sublime


### Getting started with this project
-------------

This project written in Java spring boot, angular 2 with typescript and sass.

To get started you will need:
-------------
- 10 Minutes
- Java editor of your choice ([STS is recommended])
- Latest node and npm version [Node js]

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

First ensure you have the latest `npm` version by running the command
```sh
npm update npm -g
```

Then install all the client depandancies including development tools using the command bellow:
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

### Want to help?
----
Want to file a bug, contribute some code, or improve documentation? Excellent! Read up on our guidelines for [contributing][contributing] and then check out one of our issues in the [hotlist](https://github.com/benhallouk/syntactic-library/labels/hotlist)

### License
----
Copyright (c) 2016 Amine Benhallouk

[![alt text](http://static.copyrighted.com/images/seal.gif "Copyrighted.com Registered & Protected 7PZF-PEB0-XEAB-U1BN")](http://www.copyrighted.com/copyrights/view/7pzf-peb0-xeab-u1bn)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

[contributing]: http://github.com/benhallouk/syntactic-library/blob/master/CONTRIBUTING.md
[STS is recommended]: <https://spring.io/tools>
[Node js]: <https://nodejs.org/en/>