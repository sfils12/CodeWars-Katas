let names = ["Peter", "Jacob", "Alex", "Max", "John", "Mark"];


function likes(names) {
  switch (1) {
    case 0:
      return 'no one likes this';
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[1]} and ${names[2]} like this`;
      break;
    case 3:
      return `${names[3]}, ${names[4]} and ${names[5]} like this`;
      break;
    default:
      return `${names[2]}, ${names[1]} and 2 others like this`;
  }
}

likes(names);