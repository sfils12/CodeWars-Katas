// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

//   domainName("http://github.com/carbonfive/raygun") == "github"
//   domainName("http://www.zombie-bites.com") == "zombie-bites"
//   domainName("https://www.cnet.com") == "cnet"

domainName = (url) => {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
};

domainName("https://www.github.com");

// Alterative code:

// function domainName(url){
//   return  url.replace('http://', '')
//              .replace('https://', '')
//              .replace('www.', '')
//              .split('.')[0];
// }
