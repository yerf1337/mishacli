# PDF Generator

A simple yet powerful PDF generation tool written in TypeScript.

## Installation

```bash
npm install pdf-generator
```

## Usage

```javascript
const PDFGenerator = require("pdf-generator");

// Create a new PDFGenerator instance
const pdfGenerator = new PDFGenerator();

// Add content to the PDF
pdfGenerator
  .addText("Hello, this is a PDF generated using PDFGenerator!", {
    fontSize: 20,
    align: "center",
  })
  .addPage()
  .addText("This is page 2 of the PDF.", {
    y: 100,
    align: "center",
  });

// Save the PDF
pdfGenerator.save();
```

## API

### `PDFGenerator(options?: PDFGeneratorOptions)`

Creates a new instance of PDFGenerator with optional options.

- `options.filename`: Specify the filename for the generated PDF. Default is `'output.pdf'`.

### `addText(text: string, options?: TextOptions): PDFGenerator`

Adds text to the PDF document.

- `text`: The text content to add.
- `options`: Optional parameters for text formatting, such as fontSize, font, alignment, etc.

### `addPage(): PDFGenerator`

Adds a new page to the PDF document.

### `save(): void`

Saves the PDF document to the specified filename.

## Example

Check the `example` directory for an example usage of the PDFGenerator.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
# Utility Belt

Utility Belt is a JavaScript package containing various helper functions for common tasks like string manipulation, array manipulation, date/time formatting, and other general utilities.

## Installation

You can install Utility Belt via npm:

```bash
npm install utility-belt
```

## Usage

Import the Utility Belt module into your JavaScript code and use its functions as needed:

```javascript
const UtilityBelt = require('utility-belt');

// String manipulation
console.log(UtilityBelt.capitalizeFirstLetter('hello')); // Output: Hello

// Array manipulation
const array = [1, 2, 3, 4, 5];
console.log(UtilityBelt.shuffleArray(array)); // Output: Shuffled array

// Date/time formatting
const date = new Date();
console.log(UtilityBelt.formatDate(date)); // Output: Formatted date

// Other utility functions
console.log(UtilityBelt.getRandomNumberInRange(1, 10)); // Output: Random number between 1 and 10
```

## Functions

- `capitalizeFirstLetter(str)`: Capitalizes the first letter of a string.
- `shuffleArray(arr)`: Shuffles the elements of an array.
- `formatDate(date)`: Formats a date object into a string with the format "MMM DD, YYYY" (e.g., "Jan 01, 2022").
- `getRandomNumberInRange(min, max)`: Generates a random integer within a specified range.

Feel free to explore and utilize these functions to streamline your JavaScript development process!

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
