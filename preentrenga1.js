
class Libro {
  constructor(nombre, autor, valor){
    this.nombre = nombre;
    this.valor = valor;
    this.autor = autor;
  }
}

const libro1 = new Libro("La Iliada", "Homero", 250);
const libro2 = new Libro("Crimen y Castigo", "Dostoievski" ,200);
const libro3 = new Libro("El Proceso", "Kafka",150);
const libro4 = new Libro("Divina Comedia", "Dante Alighieri", 220);



let libros_Libreria = [libro1, libro2, libro3, libro4];
let carrito = [];

const login = () => {
  alert("Bienvenido a la libreria de Babel");
};

const libros = (orden_libreria) => {
   
    let n_Libro;
    let libros_Mostrar = ""; 
    let libro_return;
    let repeat = true;

  
  libros_Mostrar = ordenar(orden_libreria,"nombre");
   
 

    do {
     
      n_Libro = prompt("Escriba el nombre del libro a comprar o:\n 1)Ordenenar alfabeticamente por libro\n 2)Ordenenar alfabeticamente por autor\n 3)Ordenenar desde libro mas caro\n 4)Ordenenar desde libro mas barato\n\n\n ||||||5)Ir a pagar|||||||\n |||||||6)Salir||||||||\n" + "\n" + libros_Mostrar);
      if (n_Libro === "1"){
        libros_Mostrar = ordenar(orden_libreria,"nombre");
           alert("Libros ordenados por titulo");
           repeat = true;
      } else if (n_Libro === "2") {
        libros_Mostrar = ordenar(orden_libreria,"autor");
             alert("Libros ordenados por autor");
             repeat = true;

      } else if (n_Libro === "3"){
        libros_Mostrar = ordenar(orden_libreria,"mayor");
             alert("Libros ordenados por mayor precio");
             repeat = true;

      }  else if (n_Libro === "4"){
        libros_Mostrar = ordenar(orden_libreria,"menor");
             alert("Libros ordenados por menor precio");
             repeat = true;

      } else if (n_Libro === "5"){
            
            if (carrito.length != 0){
              alert("Seccion de Pagos");
              repeat = false;
            } else {
              alert("Debe seleccionar al menos un libro");
              repeat = true;
            }
             

      }  else if (n_Libro === "6"){
        repeat = false;
         alert("Usted a salido de la biblioteca de Babel, lo esperamos nuevamente!");
         exit();

      }  
       else {
        libro_return = orden_libreria.find( i => i.nombre == n_Libro);
        
        repeat = true;
        if (libro_return == null){
          alert("Debe ingresar un libro valido");
        
        } else {
          alert("Libro agregado al carrito");
          carrito.push(libro_return);
        }

      }
      
      

    } while (repeat);
    return libro_return;         //retorna un objeto

  }


const ordenar = (array, opc) => { 
      let string; 
      
      if (opc === "nombre"){
            string = array.sort((a,b) => { //sigue devolviendo un objeto
                            if (a.nombre > b.nombre){
                              return 1;
                            } 
                            if (a.nombre < b.nombre ){
                              return -1;  
                            }
                            return 0;
                          });
            return string.map( i =>  i.nombre +" - "+i.autor+ " ---" + " $" + i.valor + "\n").join(""); //.join() ya convierte array en string????
        
        } 
       
      if (opc === "autor"){
          string = array.sort((a,b) => {
                          if (a.autor > b.autor){
                            return 1;
                          } 
                          if (a.autor < b.autor ){
                            return -1;  
                          }
                          return 0;
                        });
          return string.map( i =>  i.autor +" - "+i.nombre+ " ---" + " $" + i.valor + "\n").join("");
      } 

      if (opc === "menor"){
        string = array.sort((a,b) => {
                        if (a.valor > b.valor){
                          return 1;
                        } 
                        if (a.valor < b.valor ){
                          return -1;  
                        }
                        return 0;
                      });
      return string.map( i =>  "$ " +i.valor +" - "+i.nombre+ " --- " +  i.autor + "\n").join("");
    } 

    if (opc === "mayor"){
      string = array.sort((a,b) => {
                      if (a.valor < b.valor){
                        return 1;
                      } 
                      if (a.valor > b.valor ){
                        return -1;  
                      }
                      return 0;
                    });
      return string.map( i =>  "$ " +i.valor +" - "+i.nombre+ " --- " +  i.autor + "\n").join("");
  } 


}



const finalizar_Compra = () => {
      let repetir_finalizar_Compra = false;
      let finalizar;

      do {
          let compras ="";
          let opcion;        
               
          for (let i=0; i< carrito.length; i++){ 
            compras += (i+1) +") " +  carrito[i].nombre + "  $" + carrito[i].valor + "\n";        
            }
            

          do {
            opcion = parseInt(prompt("Usted ha comprado:\n" + compras + "-*-*-*-*-*-*-*-*-*-*-*-*-*-*\n " + "Gasto total de: $" + gasto_Total()  + "\n\n\n\nPresione:\n 1-Para aceptar\n 2-Para cancelar\n 3-Para elminiar algun Libro"));
            if (opcion  < 1 || opcion > 3 || isNaN(opcion)){
              alert("Debe elegir entre 1 y 3");
            }
          } while (opcion  < 1 || opcion > 3 || isNaN(opcion));

          switch (opcion) 
            {
                case 1: 
                    finalizar = true;
                    repetir_finalizar_Compra = false;
                    break;

                case 2: 
                    carrito.splice(0, carrito.length); 
                    finalizar = false;
                    repetir_finalizar_Compra = false;
                    break;

                case 3:             
                    finalizar = eliminarde_Carrito(compras);
                    if (finalizar == false){
                      repetir_finalizar_Compra = false; 
                    } else {

                      repetir_finalizar_Compra = true;
                    }
                    break;
            }
  } while(repetir_finalizar_Compra);
  return finalizar;

}

const eliminarde_Carrito = (compras) => {
          do {
              n_libro = parseInt(prompt("Seleccione el libro a eliminar:\n" + compras));
              if (n_libro  < 1 || n_libro > carrito.length || isNaN(n_libro)){
                alert(`Debe elegir entre 1 y ${carrito.length}`);
                }
            } while (n_libro  < 1 || n_libro > carrito.length || isNaN(n_libro));
            carrito.splice(n_libro-1,1);
            if (carrito.length > 0){
          
                return true;
            } else {
                alert("Ha vaciado su carrito de compras!"); 
               return false;
               
            }


}




const pagar = (gasto_Total) => {
  let dinero;
  let vuelto;
  do {
    dinero = parseFloat(prompt("Inserte la suma a pagar"));
    if (dinero < gasto_Total){
      alert("Debe elegir una suma superior o igual a " + gasto_Total );
    } else if (isNaN(dinero)){
      alert("Debe elegir un numero");
    }
  } while ((dinero < gasto_Total) || isNaN(dinero) );

  vuelto = dinero - gasto_Total; 
  return vuelto;

}

const gasto_Total = () => {
  let gasto_Total =0;
  for (let item of carrito){
    
      gasto_Total += parseInt(item.valor);
     }
  return gasto_Total;    

}



const main = () => {
  let finaliza;
  let gastos;
  let iva;
  let total_Iva;
  let vuelto;
  do {
      libros(libros_Libreria); 
         
      finaliza = finalizar_Compra();
      gastos = gasto_Total();
      iva = Iva(gastos);
      total_Iva = gastos + iva;
  } while (!finaliza);

      alert("El valor a pagar es " + gastos + " mas IVA:\n " + total_Iva);
      vuelto = pagar(total_Iva).toFixed(2);
  if (vuelto == 0){
      alert("Gracias por su compra!");
  } else {
      alert("Gracias por su compra!\nSu vuelto es: " + vuelto );
  }
  
}    



const Iva = (total) => (total * 21) / 100;




login();

main();