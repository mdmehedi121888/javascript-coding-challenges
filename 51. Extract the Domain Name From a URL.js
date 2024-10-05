const domainName = (url) => {
  // Your solution
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0];
};

console.log(domainName("www.google.ca")); // google
console.log(domainName("http://google.com")); // google
console.log(domainName("https://google.com")); // google
console.log(domainName("http://google.co.jp")); // google
console.log(domainName("https://www.google.com")); // google
