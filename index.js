let dna = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//a) Replace the gene "GCT" with "AGG", and then print the altered strand.
let dna2 = dna.replace('GCT', 'AGG');
console.log(dna2)

//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
if (dna2.indexOf('CAT') > -1) {
  console.log('CAT found');
} else {
  console.log('CAT NOT found');
}


//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
dna2.slice(16,19);


//d) Use a template literal to print, "The DNA strand is ___ characters long."
let length = dna2.length - 12

console.log(`The DNA strand is ${length} characters long.`)

//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
console.log(dna.toLowerCase().slice(4,7) + 'o ' + dna2.toLowerCase().slice(40,43));