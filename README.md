# Color Guessing Game

#Overview

The Color Guessing Game is a fun and interactive game where players must guess the correct color based on a randomly displayed target color. The game dynamically updates based on user interactions and provides immediate feedback on the correctness of the guess.

#Features

-Random Target Color: A box displays a randomly selected color.

-Color Options: Players choose from six possible color options.

-Game Status: Displays messages indicating whether the guess was correct or incorrect.

-Score Tracking: The game keeps track of the player's correct guesses.

-Restart Feature: A "New Game" button resets the game with a new target color.

-Popup Message: If the player selects the wrong color, an error message appears with an option to restart.

-Loading Screen: A loading screen appears for 10 seconds before the game starts.

-Responsive Design: The game is mobile-friendly and adapts to different screen sizes.

-Animated Feedback: Includes a fade effect when making a guess.

#Technologies Used

-React (JavaScript framework for UI development)

-CSS (for styling and animations)

#Installation & Setup

Clone the repository:

-git clone https://github.com/your-username/color-guessing-game.git

Navigate to the project folder:

-cd color-guessing-game

Install dependencies:

-npm install

Start the development server:

-npm start

#How to Play

-Wait for the loading screen to disappear.

-Observe the target color displayed in the box.

-Click on one of the six color options to make a guess.

-If correct, the score increases, and a new color is displayed.

-If incorrect, a popup message appears, prompting a restart.

-Click the New Game button anytime to restart the game.

#Project Structure

-color-guessing-game/
├── src/
│   ├── components/
│   │   ├── ColorBox.js
│   │   ├── ColorOption.js
│   │   ├── GameStatus.js
│   │   ├── Score.js
│   ├── styles.css
│   ├── App.js
│   ├── index.js
├── public/
├── package.json
├── README.md

#Contributing

Feel free to fork the repository and submit a pull request with any improvements or new features!

#License

This project is open-source and available under the MIT License.

Enjoy the game! 🎨🎮
