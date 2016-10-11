# Rock Paper Scissors
ADDA JS week 1 assignment

## Objectives
- I can use variables, if else statements, while loops to structure a program.
- I can use javascript to store and compare data from a user.
- I can use git and github to submit my work.

## Directions
Make a rock paper scissors game using javascript that runs in the browser. Use `prompt` and `confirm` to gather input. Keep the game running as long a the user wants to play. Update the score as the game goes.

### Rules (if you forgot)
- Rock beats scissors
- Paper beats rock
- Scissors beat paper

## Getting Help
Stuck? Try the psuedo code below to get you started. Consider phoning (or slacking!) a friend. I'll make myself available as much as possible, reach out to me on slack. 

## PSUEDO CODE
*Consider using this psuedo code if you are having trouble getting started.*

Set variables to keep track of both the user and computer score. Set both user score and computer score to 0.

Confirm that the user wants to play rock paper scissors, store as playing

While playing is true, run through the game loop.

Prompt the player for their play. Store it.

Make a list of the possible computers moves, store in an array.
	
Generate the computers play by randomly choosing from the array of plays.

Check the computers play versus the users play
- If the user choose rock, check versus the computers play. Award points to the winner.
- If the user choose paper, check versus the computers play. Award points to the winner.
- If the user choose scissors, check versus the computer play. Award points to the winner.

Inform the player of the outcome, see if they want to continue playing the game. If they confirm, playing remains true. If they don't want to play, playing changes to false.

Once the users chooses not to play anymore, write the score to the screen!

## Bonus
*To easy? Add some features.*

Bonus 1: count the user's ties
- count everytime the user ties and display that when your game prompts the user to "Please choose one of these..."
- also display the user's ties when the user quits

Bonus 2: put in validation
- If the user doesn't type in rock, paper scissors, string or macbook then your prompt with "Please choose one of these options: rock, paper, scissors..." comes up again

Bonus 3: When the user quits, make a nice sound play if the user has a score greater than 0, make a bad sound play if the user has a score of 0 or below. 
- Use the first answer to this question: http://stackoverflow.com/questions/9419263/playing-audio-with-javascript
- you can use sounds from here: http://soundbible.com/
- you need to download them and keep them included in the same folder as your javascript file in order to use them

Bonus 4: add in string, and macbook to the options available
- string beats rock and paper but gets beaten by scissors and macbook
- macbook beats paper, string but gets beaten by rock and scissors
- alternatively you can use envelope, rubber band and tape + come up with your own rules
