# Simple Calculator

This is a basic web-based calculator that allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Features

- **Append to Display**: Users can input numbers and operations which are displayed in a text field.
- **Clear Display**: Users can clear the display and start a new calculation.
- **Perform Calculations**: Users can evaluate arithmetic expressions using the `eval()` function.
- **Error Handling**: In case of invalid input, the calculator will display "Error".

## Technologies Used

- **HTML**: For the structure of the calculator.
- **CSS**: For styling (optional, not included in this snippet).
- **JavaScript**: For handling the logic and user interaction.

## Functions

1. **appendTo(input)**:
   - Appends a number or operator to the display.
   - Takes the user's input (e.g., numbers, operators) and updates the display accordingly.

   ```javascript
   function appendTo(input){
       display.value += input;
   }
