// Codewars Kata

function generateHashtag(string) {
  string = string.trim();
  if (string === "") return false;

  const camelCaseString = string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const hashtagString = `#${camelCaseString.trim()}`;

  return hashtagString.length > 140 ? false : hashtagString;
}

//   Wasn't working at first. Here is what I changed to fix it.

// This is probably happening since the test case is an empty string (empty string meaning a string with any number of spaces, but no alphanumeric characters)

// It's passing ' ' (or something similar) to the function and the split is splitting the string into ["", ""] which doesn't have any characters in each index.

// In order to prevent this, you'll want to add string = str.trim() at the start of the function to ensure that those edge cases don't slip through the cracks.
