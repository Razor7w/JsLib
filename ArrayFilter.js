const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const mascotas = [
	{nombre: 'Terry', edad: 10, tipo: 'perro'},
	{nombre: 'Boby', edad: 3, tipo: 'perro'},
	{nombre: 'dugal', edad: 2, tipo: 'perro'},
	{nombre: 'michi', edad: 3, tipo: 'gato'},
];

// console.log(mascotas, numeros)

// const numerosFiltrados = numeros.filter(x => x < 5)
// console.log(numerosFiltrados, numeros);

const perros  = mascotas.filter(x => x.tipo == 'perro')
console.log(perros);
const gatos  = mascotas.filter(x => x.tipo == 'gato')
console.log(gatos);