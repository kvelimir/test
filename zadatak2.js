// Napisati program koji racuna prosek brojeva deljivih sa 7 u intervalu od M do N uključujući M i N

let M = 7;
let N = 21;
let zbirintervala = 0;
let prosek = 0
for (counter = M; counter <= N; counter++) {

    if (counter % 7 == 0) {

        zbirintervala += counter;

        prosek = zbirintervala / counter;
    }
}
console.log(`Prosek brojeva deljivih sa 7 u intervalu od ${M} do ${N} je: ${prosek}`);