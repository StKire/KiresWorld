import { editarDocumento, buscarDocumentoPorId } from './firebase/crud.js'

document.addEventListener('DOMContentLoaded', () => {

    async function crearContenidoReserva(datos, callback) {
        const qrData = JSON.stringify(datos);
        const canvasQR = document.createElement('canvas');
        canvasQR.width = 150;
        canvasQR.height = 150;
        await QRCode.toCanvas(canvasQR, qrData);
    
        const contenedor = document.createElement("div");
        contenedor.style.position = "fixed";
        contenedor.style.left = "-9999px";
        contenedor.style.width = "600px";
        contenedor.style.padding = "20px";
        contenedor.style.fontFamily = "Arial, sans-serif";
        contenedor.style.background = "#fff";
    
        const total = datos.noches * datos.precioPorNoche;
    
        contenedor.innerHTML = `
            <div style="text-align:center;">
                <h2>Kires World</h2>
                <p>Comprobante de Reserva</p>
                <hr>
            </div>
            <p><strong>Cliente:</strong> ${datos.reservado.nombre}</p>
            <p><strong>Correo:</strong> ${datos.reservado.correo}</p>
            <p><strong>Destino:</strong> ${datos.destino}</p>
            <p><strong>Habitación:</strong> ${datos.habitacion}</p>
            <p><strong>Noches:</strong> ${datos.noches}</p>
            <p><strong>Total:</strong> $${total}</p>
            <p><strong>Pago:</strong> ${datos.metodoPago}</p>
            <p><strong>ID:</strong> ${datos.id}</p>
            <div id="qrReserva" style="margin-top: 20px;"></div>
        `;
    
        document.body.appendChild(contenedor);
        contenedor.querySelector('#qrReserva').appendChild(canvasQR);
    
        callback(contenedor);
    }

    function descargarPDFReserva(datos) {
        crearContenidoReserva(datos, async (contenedor) => {
            const canvas = await html2canvas(contenedor);
            const imgData = canvas.toDataURL('image/png');
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = 210;
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`ticket-reserva-${datos.id}.pdf`);
            document.body.removeChild(contenedor);
        });
    }
    


    const habitacionItem = JSON.parse(localStorage.getItem('habitacion'));

    const lblSuite = document.getElementById('lblSuite');
    lblSuite.value = habitacionItem.habitacion

    const lblResort = document.getElementById('lblResort');
    lblResort.value = habitacionItem.hotel.replace(/^habitaciones/, '').replace(/([A-Z])/g, ' $1').trim();
    

    const paymentSelect = document.getElementById('paymentMethod');
    const cardFields = document.getElementById('cardFields');
    const paypalButton = document.getElementById('paypalButton');
    const mercadoButton = document.getElementById('mercadoButton');
    let metodoPago = '';

    paymentSelect.addEventListener('change', () => {
        // Oculta todo por defecto
        cardFields.classList.add('d-none');
        paypalButton.classList.add('d-none');
        mercadoButton.classList.add('d-none');

        // Muestra según selección
        switch (paymentSelect.value) {
            case 'tarjeta':
                cardFields.classList.remove('d-none');
                metodoPago = 'Tarjeta Bancaria';
                break;
            case 'paypal':
                paypalButton.classList.remove('d-none');
                metodoPago = 'Paypal';
                break;
            case 'mercado':
                mercadoButton.classList.remove('d-none');
                metodoPago = 'Mercado Pago';
                break;
        }
    });


    const reservationForm = document.getElementById('reservationForm');

    reservationForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const inputName = document.getElementById('inputName').value;
        const inputEmail = document.getElementById('inputEmail').value;
        const inputPhone = document.getElementById('inputPhone').value;
        const inputCheckIn = document.getElementById('inputCheckIn').value;
        const inputCheckOut = document.getElementById('inputCheckOut').value;
        const inputDestino = document.getElementById('destino').value;
        // Convertir las fechas a objetos Date
        const checkInDate = new Date(inputCheckIn);
        const checkOutDate = new Date(inputCheckOut);
        // Calcular la diferencia en milisegundos
        const diferencia = checkOutDate - checkInDate;
        // Convertir a días
        const diasEstancia = diferencia / (1000 * 60 * 60 * 24);

        await editarDocumento(habitacionItem.hotel, habitacionItem.id, {
            destino: inputDestino,
            checkIn: inputCheckIn,
            checkOut: inputCheckOut,
            estado: 'reservado',
            fechaReserva: new Date().toLocaleDateString(),
            noches: diasEstancia,
            reservado: {
                correo: inputEmail,
                nombre: inputName,
                telefono: inputPhone,
                metodoPago: metodoPago
            }
        }
        )

        const datos = await buscarDocumentoPorId(habitacionItem.hotel, habitacionItem.id);
        descargarPDFReserva(datos);
        location.href = '../index.html'

    })


})