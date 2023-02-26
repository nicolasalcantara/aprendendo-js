//                -5         -4        -3         -2         -1
//                 0          1         2          3          4
const nomes = ["Nicolas", "Vitoria", "Miguel", "Bernardo", "Belly"];

//nomes.splice(índice, delete, elem1, elem2, elem3);

//pop
// const removidos = nomes.splice(-1, 1);

//shift
// const removidos = nomes.splice(0, 1);

//push
// const removidos = nomes.splice(nomes.length, 0, "Harry");

//unshift
// const removidos = nomes.splice(0, 0, "Harry");

const removidos = nomes.splice(2, 0, "Noah");
console.log(nomes, removidos);
