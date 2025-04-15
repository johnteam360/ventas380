// Datos de productos para venta de garage
const productos = [
    {
        id: 1,
        nombre: "TV LG 55 pulgadas",
        descripcion: "Televisor LG de 55 pulgadas en buen estado. Pantalla LED con excelente calidad de imagen.",
        precio: 230000,
        imagen: "images/TV-lg-55.jpg"
    },
    {
        id: 2,
        nombre: "Scooter eléctrico",
        descripcion: "Scooter eléctrico en excelente estado. Perfecto para desplazamientos urbanos.",
        precio: 180000,
        imagen: "images/scooter-cero.jpg"
    },
    {
        id: 3,
        nombre: "Lavadora 8kg",
        descripcion: "Lavadora de 8kg de capacidad. Funciona perfectamente, con múltiples programas de lavado.",
        precio: 50000,
        imagen: "images/lavadora-8kl.jpg"
    },
    {
        id: 4,
        nombre: "Cama de plaza y media",
        descripcion: "Cama de 1.5 plazas en buen estado. Incluye colchón.",
        precio: 70000,
        imagen: "images/cama-plaza-1.5.jpeg"
    },
    {
        id: 5,
        nombre: "Escritorio con silla",
        descripcion: "Conjunto de escritorio y silla ergonómica. Ideal para trabajar o estudiar desde casa.",
        precio: 100000,
        imagen: "images/silla-y-escritorio.jpg"
    },
    {
        id: 6,
        nombre: "Sistema de sonido Harman Kardon Onix 6",
        descripcion: "Altavoz Harman Kardon Onix 6 con excelente calidad de sonido. Incluye control remoto.",
        precio: 100000,
        imagen: "images/harman-kardon-onix6.jpg"
    },
    {
        id: 7,
        nombre: "Aspiradora",
        descripcion: "Aspiradora potente con varios accesorios para limpieza completa del hogar.",
        precio: 20000,
        imagen: "images/aspiradora.jpg"
    }
];

// Cargar productos en la página
document.addEventListener('DOMContentLoaded', () => {
    const productosContainer = document.getElementById('productos-container');
    
    // Mostrar productos
    mostrarProductos(productos, productosContainer);
});

// Función para mostrar productos
function mostrarProductos(productos, contenedor) {
    let html = '';
    
    productos.forEach(producto => {
        html += `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <div class="precio">$${producto.precio.toLocaleString('es-CL')} CLP</div>
                    <a href="https://instagram.com/johnteam.ai" class="btn btn-comprar" target="_blank">Contactar</a>
                </div>
            </div>
        `;
    });
    
    contenedor.innerHTML = html;
}

// Ya no necesitamos esta función porque los botones ahora son enlaces directos
// function contactarVendedor(id) {
//     const producto = productos.find(prod => prod.id === id);
//     if (producto) {
//         alert(`Estás interesado en: ${producto.nombre}\nPara comprarlo, llama al 555-123-4567`);
//     }
// } 