import { editarDocumento } from './firebase/crud.js'

document.addEventListener('DOMContentLoaded', () => {

    const habitacionItem = JSON.parse(localStorage.getItem('habitacion'));
    console.log(habitacionItem);

    const lblSuite = document.getElementById('lblSuite');
    lblSuite.value = habitacionItem.habitacion

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

        // Convertir las fechas a objetos Date
        const checkInDate = new Date(inputCheckIn);
        const checkOutDate = new Date(inputCheckOut);
        // Calcular la diferencia en milisegundos
        const diferencia = checkOutDate - checkInDate;
        // Convertir a días
        const diasEstancia = diferencia / (1000 * 60 * 60 * 24);

        await editarDocumento('habitacionesEstates', habitacionItem.id, {
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


    })


})