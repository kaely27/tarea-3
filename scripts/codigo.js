
//agregar pripiedad cumpleaños, contraseña, lista de amigos, getter y setter de todas las propiedades 
//para la lista de amigos solo el metodo getter pero el setter no.
//metodo agregar nuevo amigo
//(metodos pop y push). 
// metodo de eliminar amigo por nombre +1 
// clase y metodo constructor (5 propiedades getter y stters 3 funcionalidades) +1
/*class CuentaFb {
    constructor(nombreUsuario, cumpleaños, password) {
      let usuario = nombreUsuario; // propiedad privada
      let cump = cumpleaños; // propiedad privada
      let pass = password; 
   
      // Métodos para manejar 'usuario'
      this.getUsuario = function() {
        return usuario;
      };
   
      this.setUsuario = function(nombreNuevo) {
        usuario = nombreNuevo;
      };
   
      // Métodos para manejar 'cumpleaños'
      this.getCump = function() {
        return cump;
      };
   
      this.setCump = function(cumpleNuevo) {
        cump = cumpleNuevo;
      };

      this.getPass = function(){
        return pass;
      }

      this.setPass = function(passNuevo){
        pass = passNuevo;
      }
    }
  }
   
  // Ejemplo de uso:
  let miCuenta = new CuentaFb('Kaely', '01-01-2000', '123');
  console.log(miCuenta.getUsuario()); // 'Usuario123'
  console.log(miCuenta.getCump()); // '01-01-2000'
  console.log(miCuenta.getPass());
  miCuenta.setUsuario('Paquito');
  miCuenta.setCump('02-02-2000');
  miCuenta.setPass('12345');

  console.log(miCuenta.getUsuario()); // 'NuevoUsuario'
  console.log(miCuenta.getCump()); // '02-02-2000'
  console.log(miCuenta.getPass()); // pass nuevo*/

  class CuentaFb {
    constructor(nombreUsuario, cumpleaños, contraseña) {
      let usuario = nombreUsuario; // Propiedad privada
      let cump = cumpleaños;       // Propiedad privada
      let pass = contraseña;       // Propiedad privada
      let amigos = [];             // Propiedad privada (Lista de amigos)
   
      // Métodos para manejar 'usuario'
      this.getUsuario = function() {
        return usuario;
      };
   
      this.setUsuario = function(nombreNuevo) {
        usuario = nombreNuevo;
      };
   
      // Métodos para manejar 'cumpleaños'
      this.getCump = function() {
        return cump;
      };
   
      this.setCump = function(cumpleNuevo) {
        cump = cumpleNuevo;
      };
   
      // Métodos para manejar 'contraseña'
      this.getPass = function() {
        return pass;
      };
   
      this.setPass = function(nuevaPass) {
        pass = nuevaPass;
      };
   
      // Método para obtener la lista de amigos
      this.getAmigos = function() {
        return amigos;
      };
   
      // Método para agregar un nuevo amigo
      this.agregarAmigo = function(nuevoAmigo) {
        amigos.push(nuevoAmigo);
      };
   
      // Método para eliminar un amigo por nombre
      this.eliminarAmigo = function(nombreAmigo) {
        const index = amigos.indexOf(nombreAmigo);
        if (index !== -1) {
          amigos.splice(index, 1);
        } else {
          console.log(`Amigo ${nombreAmigo} no encontrado.`);
        }
      };
    }
  }
   
  // Ejemplo de uso:
  const miCuenta = new CuentaFb("kaely", "01-01-2000", "contraseña123");
   
  // Obtener y establecer usuario
  console.log(miCuenta.getUsuario()); // 'kaely'
  miCuenta.setUsuario("Paquito");
  console.log(miCuenta.getUsuario()); // 'Paquito'
   
  // Obtener y establecer cumpleaños
  console.log(miCuenta.getCump()); // '01-01-2000'
  miCuenta.setCump("02-02-2000");
  console.log(miCuenta.getCump()); // '02-02-2000'
   
  // Obtener y establecer contraseña
  console.log(miCuenta.getPass()); // 'contraseña123'
  miCuenta.setPass("nuevaContraseña");
  console.log(miCuenta.getPass()); // 'nuevaContraseña'
   
  // Manejo de la lista de amigos
  miCuenta.agregarAmigo("Juan");
  miCuenta.agregarAmigo("María");
  console.log(miCuenta.getAmigos()); // ['Juan', 'María']
   
  miCuenta.eliminarAmigo("Juan");
  console.log(miCuenta.getAmigos()); // ['María']
   
  miCuenta.eliminarAmigo("Pedro"); // 'Amigo Pedro no encontrado.
  