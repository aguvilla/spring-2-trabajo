const pGasto = document.getElementById("pGasto");
const total = document.getElementById("total");
let nombres = [];
let montos = [];

function obtenerdatos() {
    var nombre = document.getElementById('name').value;
    var monto = document.getElementById('monto').value;
    if (nombre != "" && monto != "") {
        nombres.push(nombre);
        montos.push(monto);
    }
} 
console.log(nombres);
console.log(montos);

function imprimirDatos(){
    let i = 0;
    pGasto.innerHTML = "";
    for (const dato of nombres) {
        const p = document.createElement("p");
        p.className = "border border-3 border-secondary rounded p-1 mb-1 ps-3 fw-bold"
        p.innerHTML = dato + ": $" + montos[i];
        pGasto.append(p);
        i += 1;
    }
}   

function totalGastos(){
    total.innerHTML = "";
    let suma = 0;
    for (const sum of montos) {
        suma += parseFloat(sum);
    }
    let division = suma / (nombres.length);
    if (nombres.length == 0) {
        division = 0;
    }
    total.innerHTML = "<p>Total: $" + suma + "</p>" + "<p>A cada uno le toca aportar $:" + division;
}

function boton() {
    obtenerdatos();
    imprimirDatos();
    totalGastos();
}
