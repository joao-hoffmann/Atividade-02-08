
const chave1 = Symbol('chave');
const chave2 = Symbol('chave');

console.log(chave1 === chave2); 
const usuario = {};
usuario[chave1] = 'valor da chave1';

console.log(usuario[chave1]);

console.log(usuario[chave2]); 