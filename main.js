let carrito = [];
let total = 0.00;

function agregarAlCarrito(producto, precio) {
    const cantidad = parseInt(prompt(`Ingrese la cantidad de "${producto}" que desea comprar:`));
    if (!isNaN(cantidad) && cantidad > 0) {
        carrito.push({ producto, precio, cantidad });
        total += precio * cantidad;
        actualizarCarrito();
    } else {
        alert('Por favor, ingrese una cantidad válida.');
    }
}

function actualizarCarrito() {
    const carritoElement = document.getElementById("carrito");
    const totalElement = document.getElementById("total");

    carritoElement.innerHTML = "";
    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.producto} (Cantidad: ${item.cantidad}) - PEN ${(item.precio * item.cantidad).toFixed(2)}`;
        carritoElement.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);
}
