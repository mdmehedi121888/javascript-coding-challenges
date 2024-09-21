const DNAStrand = (dna) => {
  // Your solution
  /*---------------1st method----------------
  return dna
    .split("")
    .map((e) =>
      e === "A" ? "T" : e === "T" ? "A" : e === "C" ? "G" : e === "G" ? "C" : ""
    )
    .join("");
    */
  //---------------2nd method----------------
  const dnaMap = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return [...dna].map((e) => dnaMap[e]).join("");
};

console.log(DNAStrand("AAAA")); // 'TTTT'
console.log(DNAStrand("ATTGC")); // 'TAACG'
console.log(DNAStrand("GTAT")); // 'CATA'
