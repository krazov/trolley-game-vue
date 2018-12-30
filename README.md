# Trolley Dillema: The Game

_Vue.js edition. The ClojureScript implementation can be found [here](https://github.com/krazov/trolley-game)._

## Dilemma

Trolley problem is thought experiment in ethics, as [states nicely Wikipedia](https://en.wikipedia.org/wiki/Trolley_problem). The dillema itself is described as such:

>There is a runaway trolley barreling down the railway tracks. Ahead, on the tracks, there are five people tied up and unable to move. The trolley is headed straight for them. You are standing some distance off in the train yard, next to a lever. If you pull this lever, the trolley will switch to a different set of tracks. However, you notice that there is one person tied up on the side track. You have two options:
>
>1. Do nothing, and the trolley kills the five people on the main track.
>2. Pull the lever, diverting the trolley onto the side track where it will kill one person.
>
>Which is the most ethical choice?

But then there are more variants.

This game is rather for fun but with growing AI (i.e. autonomous cars) trolley problem becomes something that has to be programmed. Just like in Philip K. Dick books, philosophy turns pretty real.

## Credits

The project is rewrite from [TrolleyGame](https://github.com/InALunch/TrolleyGame) by Linchuan Zhang. With his permission. When I decided to learn ClojureScript I needed some interesting project that is not to-do application. I usually was reaching for Conway’s Game of Life in those situations but I had done Game of Life already three times so it was time for something new.

Apart from concept and types of problems I also reused messages from the original game. At this point—March 30th, 2018—I don’t have idea how far I will follow the original concept.

I learned about the game on [Trolley Problem Memes](https://www.facebook.com/TrolleyProblemMemes/) Facebook group. More about the origins of the group can be found in [this interview with its creators](https://www.huffingtonpost.com/linch-zhang/behind-the-absurd-popular_b_10247650.html).

## vue-cli information

### Project setup
```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn run serve
```

#### Compiles and minifies for production
```
yarn run build
```

#### Lints and fixes files
```
yarn run lint
```
