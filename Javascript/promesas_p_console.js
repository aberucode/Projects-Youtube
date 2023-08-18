// Programacino sincronica y asincronica
const prompt = require('prompt-sync')();

// Usando promesas
/*const dividir = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0){
      reject("No se puede dividir por cero");
    } else{
      setTimeout(() => {
        resolve(a / b);
      }, 3000);
    }
  })
}

dividir(10, 5)
  .then((resultado) => {
  console.log(resultado);
  }) // se puede anidar el .then()
  .catch((error) => {
    consoole.log(error);
  })

const functionAsync = async () => {
  try {
    const a = await dividir(10, 5);
  } catch (error) {
    console.log(error);
  }
  
}
functionAsync();
*/

// calculadora de promesas

// Sumar
const sumar = (a, b) => {
  const resultado = a + b;
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0){
      reject("Operacion innecesaria");
    } else if(resultado < 0){
      reject("La calculadora solo debe devolver valores positivos");
    } else{
      resolve(a + b);
    }
  })
}
// Restar
const restar = (a, b) => {
  const resultado = a - b;
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0){
      reject("Operacion invalida");
    } else if(resultado < 0){
      reject("La calculadora solo debe devolver valores positivos");
    } else{
      resolve(a - b);
    }
  })
}
// Dividir
const dividir = (a, b) => {
  const resultado = a / b;
  return new Promise((resolve, reject) => {
    if (b === 0){
      reject("No se puede dividir por cero");
    } else if(resultado < 0){
      reject("La calculadora solo debe devolver valores positivos");
    } else{
      resolve(a / b);
    }
  })
}
// Multiplicar
const multiplicar = (a, b) => {
  const resultado = a * b;
  return new Promise((resolve, reject) => {
    if (resultado < 0){
      reject("La calculadora solo debe devolver valores positivos");
    } else{
      resolve(a * b);
    }
  })
}

const mainAsync = async () => {
  let option;
  let bucle = false;
  let auxEnter;
  let auxA, auxB, auxResult;
  while(!bucle){
    console.clear();
    do{
      console.log("\n",
        "***************************************\n",
        "-----------PROMISE CALCULATOR----------\n",
        "***************************************\n",
        " 1. Sumar                              \n",
        " 2. Restar                             \n",
        " 3. Dividir                            \n",
        " 4. Multiplicar                        \n",
        " 5. Salir                              \n",
        "***************************************\n");
        option = parseInt(prompt("Enter your option: "));
        if (option < 1 || option > 5){
          console.log("Invalid option");
          auxEnter = prompt("Press enter to continue:");
          console.clear();
        }
    }while(!(option >= 1 && option <= 5));
    console.clear();
    switch(option){
      case 1:
        console.log("\n",
        "***************************************\n",
        "-------------OPERACION SUMA------------\n",
        "***************************************\n");
        auxA = parseInt(prompt("Enter a: "));
        auxB = parseInt(prompt("Enter b: "));
        try{
          auxResult = await sumar(auxA, auxB);
          console.log("La suma es: " + auxResult);
        } catch(error){
          console.log(error);
        }
        auxEnter = prompt("\nPress enter to continue:");
        break;  
      case 2:
        console.log("\n",
        "***************************************\n",
        "------------OPERACION RESTA------------\n",
        "***************************************\n");
        auxA = parseInt(prompt("Enter a: "));
        auxB = parseInt(prompt("Enter b: "));
        try{
          auxResult = await restar(auxA, auxB);
          console.log("La resta es: " + auxResult);
        } catch(error){
          console.log(error);
        }
        auxEnter = prompt("\nPress enter to continue:");
        break;
      case 3:
        console.log("\n",
        "***************************************\n",
        "-----------OPERACION DIVISION----------\n",
        "***************************************\n");
        auxA = parseInt(prompt("Enter a: "));
        auxB = parseInt(prompt("Enter b: "));
        try{
          auxResult = await dividir(auxA, auxB);
          console.log("La division es: " + auxResult);
        } catch(error){
          console.log(error);
        }
        auxEnter = prompt("\nPress enter to continue:");
        break;
      case 4:
        console.log("\n",
        "***************************************\n",
        "--------OPERACION MULTIPLICACION-------\n",
        "***************************************\n");
        auxA = parseInt(prompt("Enter a: "));
        auxB = parseInt(prompt("Enter b: "));
        try{
          auxResult = await multiplicar(auxA, auxB);
          console.log("La multiplicacion es: " + auxResult);
        } catch(error){
          console.log(error);
        }
        auxEnter = prompt("\nPress enter to continue:");
        break;
      case 5:
        console.log("See you later!");
        auxEnter = prompt("Press enter to continue:");
        bucle = true;
        break;
    }
  }
}

mainAsync();



