# OOP Connect Four

This project is part of the object-oriented programming curriculum at App
Academy. Please fork and clone it to work on the Connect Four project.


Psuedo Code:
Class Ideas
1. User Class
**Responsibility**: keep track of which player goes with which color
**properties**: name, color, is current turn

1. User Input class
**Responsibility**: take in user input & save to game state - almost always clicks; one exception is inputting names
**Properties**: column they hover over, column they clicked on, input name, click "NEW GAME" button
**Methods**: 
- change color of .click-target when hovering add current player color as a class to parent div 'click targets'
- change color of board square on click -> column info passed to game state & update isMyTurn
- update click-target color according to turn (represented on User Class) on click
- when NEW GAME is clicked, instantiate two players & add their names & autoassign colors

1. Game State Class
**Responsibility**: represent the current state of the game board in code so logic can be run on it
**Properties**: nested array of board coordinates, current color turn
**Methods**: update board coordinates with "is red/black" upon user click (with logic to say update top most avaiable space - iterate through board by checking bottom first), then add child div with class='token COLOR' to that correct div
    - helper function: check if the column is full -> add " full" to the corresponding click-target div class

<!-- 1. Update Board Class
**Responsibility**:  -->
