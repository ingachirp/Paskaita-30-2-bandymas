// 6 uzduotis vertimas Celsijus i Farengeita
const celsijus = prompt('Įveskite laipsnius: ');
const atsakymas = cToF(celsijus);
alert(atsakymas);

function cToF(celsijus) {
    return celsijus * 1.8 + 32;
}
// const ats1 = cToF(-5);
// const ats2 = cToF(0);
// const ats3 = cToF(30);
// const ats4 = cToF(2);

// alert(ats1);
// alert(ats2);
// alert(ats3);
// alert(ats4);

const eur = prompt('Įveskite euro kiekį: ');
const atsakymas2 = eurToRub(eur);
alert(atsakymas2);

function eurToRub(eur) {
    return eur * 88.05;
}