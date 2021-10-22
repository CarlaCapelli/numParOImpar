let num1: string = document.getElementById("num1");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let numero: number = Number(num1.value);

  if (numero === 0) {
    console.log("el numero es cero");
  } else if (numero % 2 === 0) {
    console.log("el numero", numero, " es par");
  } else {
    console.log("el numero", numero, "es impar");
  }
});
