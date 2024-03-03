// utility-belt.js

const UtilityBelt = {
    // String manipulation functions
    capitalizeFirstLetter: (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  
    // Array manipulation functions
    shuffleArray: (arr) => {
      return arr.sort(() => Math.random() - 0.5);
    },
  
    // Date/time formatting functions
    formatDate: (date) => {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      });
    },
  
    // Other utility functions
    getRandomNumberInRange: (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  
    // Add more utility functions as needed...
  };
  
  module.exports = UtilityBelt;
