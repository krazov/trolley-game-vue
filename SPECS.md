# Specification

## Functionalities (areas)

* Current dilemma
* Previous dilemmas
* Choice box
* Score box

### Extra

* Splash screen?
* Leaderboard
* Saving progress

## Flow

1. Print dilemma
2. Print decision
3. I/O: choice (plus validation)
4. Print updated scores
5. Goto 1

## Dilemmas

### Real trolley

```typescript
interface TrolleyReal {
    uppertrack: number;
    lowertrack: number;
    lowertracktext: string;
    uppertracktext: string;
    decisionmsg: string;
}
```

* `uppertrack`: random(0, 5)
* `lowertrack`: random(1, 10)

#### utils

* move == -1 && uppertrack > 0
  * "You made the worst possible utilitarian choice."
  * "You are a moral monster. Lost %s utils" (lowertrack + uppertrack)

* diff < 0 && move == 1 || diff > 0 && move == 0
  * "You have made the wrong utilitarian decision. Lose "+ str(abs(diff)) + " utils!"
* lowertrack == uppertrack
  * "Your choice is neutral on utilitarian grounds"
* diff > 0 && move || diff < 0 && !move
  * "You have made the correct utilitarian decision and saved a net "+ str(abs(diff)) + " lives."
  * "Gain "+ str(abs(diff))+ ' utils!'

#### kantpoints

* move == 0
  * default
  * "The dilemma is not your problem. On Kantian grounds, that is enough."
  * "There is no change in your Kant points. #NotYourProblem."
* move == 1 && diff > 0
  * "You have a hypothetical imperative to save lives, but not a categorical one."
  * "Gain 1 Kant point"
* else
  * "You are a MURDERER who has violated the categorical imperative!"
  * "Lose 10 Kant points."

## Strings

* Count
  * You have encountered xxx ethical dilemmas."
* Quit
  * "Do you want to keep playing? [Yes/No] "
  * "Alright, let's keep going."
  * "Life is a series of trolley problems. You cannot avoid them."
* Kant default
  * "The dilemma is not your problem. On Kantian grounds, that is enough."
  * "There is no change in your Kant points. #NotYourProblem."
  * Kantpoints: 0
* Abstract trolley
  * "Do you pull the lever? [Yes/No] "
  * "A runaway trolley is barrelling towards " + self.lowertracktext
  * "You can pull a lever to divert the trolley to another track, containing " + self.uppertracktext
  * "You have pulled the lever."
  * "You let the lever be."
