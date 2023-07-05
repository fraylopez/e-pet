# e-pet

## Problem context
The game presents a virtual pet that the user can interact with. The pet has a  a health level, a happiness level, and a hunger level. The user can interact with the pet by feeding it, training  it, or cleaning it or doing nothing.
Each interaction affects the pet's training, happiness, and hunger levels differently.
The user can also check the pet's status to see how it is doing. The game ends when the pet's health or happiness level reaches 0.

## Requirements

[UseCases](/docs/out/use-cases/use-cases.png)

[![/docs/out/use-cases/use-cases.png](/docs/out/use-cases/use-cases.png)](/docs/out/use-cases/use-cases.png)

[DomainModel](/docs/out/domain-model/DomainModel.png)


## Design
Classic MVC design pattern with abstracted GameView.
ConsoleView is the concrete implementation of the GameView interface.

Due to the simplicity of the game, only one controller is needed. The GameController handles all the use cases.

The App class is the entry point of the application. It is responsible for initializing the game and starting the game loop.

[![uml-diagram.png](/docs//out//design/Design.png)]

## Tech stack
- Node.js/TypesScript

## Installation and usage

```
yarn // to install dependencies
yarn start // to run the app
yarn test // to run the tests
```

