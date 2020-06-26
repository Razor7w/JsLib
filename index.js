
//npm install --save console-menu
var menu = require('console-menu');


menuPrincipal()
function menuPrincipal () {
  console.clear()
  menu([
    { hotkey: '1', title: 'Array Filter' , selected: true},
    { hotkey: '2', title: 'Array Map' },
    { hotkey: '3', title: 'Array Reduce' },
    { hotkey: '4', title: 'Recursividad' },
    { hotkey: '5', title: 'Trampolines' },
    { hotkey: '6', title: 'Closures' },
    { hotkey: '7', title: 'Composición' },
    { hotkey: '8', title: 'Imperativa y declarativa' },
    { hotkey: '9', title: 'Promesas' },
    { hotkey: 'X', title: 'Salir' },
    { separator: true },
    { hotkey: '?', title: 'Help' },
  ], {
      header: 'Menú de Bibliotecas',
      helpMessage: 'Use las flechas Abajo/Arriba y luego presione enter para seleccionar un elemento.',
      border: true,
  }).then(item => {
      switch (item.hotkey) {
        case '1':
          console.log('hola')
          menuPrincipal()
          break;
        case 'X':
          console.log('Gracias')
        default:
          break;
      }
      /*if (item) {
          console.log('You chose: ' + JSON.stringify(item));
          menuPrincipal()
      } else {
          console.log('Gracias por usar la biblioteca de ejemplos.');
      }*/
  });
}



//Opcion de menú manual sin biblioteca usando node nativo
/*const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
  console.clear()
  console.log('====== Menú ======')
  console.log('')
  console.log('1.- Opción 1');
  console.log('2.- Salir');
  console.log('');
  console.log('Escriba la opcion a usar:');
}

function paused() {
  console.log('Enter para continuar...');
  rl.on('pause', () => {});
}



mostrarMenu()
rl.on('line', (input) => {
  mostrarMenu()
  switch (input) {
    case '1':
      console.clear()
      console.log('entre a 1');
      paused()
      break;
    case '2':
      console.clear()
      console.log('Gracias por usar el sistema de pruebas.');
      rl.close();
      break;
  
    default:
      break;
  }
});*/