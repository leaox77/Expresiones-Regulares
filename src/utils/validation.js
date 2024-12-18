/**
 * Validates input against a regex pattern
 * @param {string} input - The input to validate
 * @param {string} pattern - The regex pattern
 * @returns {boolean} - Whether the input matches the pattern
 */
export const validatePattern = (input, pattern) => {
  try {
    const regex = new RegExp(pattern);
    return regex.test(input);
  } catch (error) {
    console.error('Invalid regex pattern:', error);
    return false;
  }
};

/**
 * Tests input against a regex pattern and returns matches
 * @param {string} input - The input to test
 * @param {string} pattern - The regex pattern
 * @param {string} flags - Regex flags
 * @returns {string[]} - Array of matches
 */
export const testPattern = (input, pattern, flags = 'g') => {
  try {
    const regex = new RegExp(pattern, flags);
    return input.match(regex) || [];
  } catch (error) {
    console.error('Error testing pattern:', error);
    return [];
  }
};