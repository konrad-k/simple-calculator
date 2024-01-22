# PHP / JS Calculator

## Description
This is a simple calculator application built with PHP. It supports basic arithmetic operations like addition, subtraction, multiplication, and division.



## Installation
1. Clone the repository: `git clone https://github.com/konrad-k/calculator.git`
2. Navigate to the project directory: `cd calculator`
3. Install dependencies: `composer install`

## Usage
To use the calculator, run the `index.php` script from the command line. For example:

```bash
php -S localhost:8000
```

## Contains:
- PHP code to include the `calculator.php` file, which contains the HTML logic for the calculator.
- A link to the `calculations.php` page, where users can view previous calculations.


### calculator.js
This file contains the `Calculator` class which is responsible for the calculator's functionality. Here's a brief overview of what the code does:

- The `Calculator` class has properties for storing the current numbers (`a` and `b`), the operation to be performed, the result of the operation, any errors, the calculator buttons, the input and output elements, and the possible operations.
- The `init` method adds event listeners to each button on the calculator. When a button is clicked, the `actionHandle` method is called. It also adds a keydown event listener to the document, so the calculator can be used with a keyboard.
- The `actionHandle` method handles the logic for when a button is clicked or a key is pressed. It checks the type of the button or key and performs the appropriate action.

To initialize a new Calculator object, you need to select the calculator element and pass it to the `Calculator` constructor. Then, call the `init` method on the new object. Here's an example:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const calculator = new Calculator({element: '.calculator'});
  calculator.init();
});

### Wordpress plugin with shortcode support
