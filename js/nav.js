import { buscarDocumentoPorCampo, buscarDocumentosPorCampo, buscarEnVariasColeccionesPorCampo, guardarDocumentoIdAutomatico, editarDocumento } from './firebase/crud.js'

const navOffcanvas = document.getElementById('navOffcanvas');
const offcanvasTopLabel = document.getElementById('offcanvasTopLabel');

const navDestinos = document.getElementById('navDestinos');
const navResorts = document.getElementById('navResorts');
const navEventos = document.getElementById('navEventos');
const navLogin = document.getElementById('navLogin');

navDestinos.addEventListener('click', () => {
    navOffcanvas.innerHTML = '';

    const destinosContainer = document.createElement('div');
    destinosContainer.className = 'col-12 d-flex gap-1 mb-1 justify-content-center align-items-center';

    destinosContainer.innerHTML = `
        
    <a href="../views/nayarit.html" class="text-light fs-4 text-decoration-none btn btn-dark destinos text-center d-flex justify-content-center align-items-center" id="nayarit">Nuevo Nayarit-Vallarta</a>

    <a href="../views/riviera.html" class="text-light fs-4 text-decoration-none btn btn-dark destinos text-center d-flex justify-content-center align-items-center" id="riviera">Riviera Maya</a>

    <a href="../views/cabos.html" class="text-light fs-4 text-decoration-none btn btn-dark destinos text-center d-flex justify-content-center align-items-center" id="cabos">Los Cabos</a>

    `;
    navOffcanvas.appendChild(destinosContainer);

    const destinos2Container = document.createElement('div');
    destinos2Container.className = 'col-12 d-flex gap-1 justify-content-center align-items-center';
    destinos2Container.innerHTML = `

    <a href="../views/acapulco.html" class="text-light fs-4 text-decoration-none btn btn-dark destinos text-center d-flex justify-content-center align-items-center" id="acapulco">Acapulco</a>

    <a href="../views/puerto.html" class="text-light fs-4 text-decoration-none btn btn-dark destinos text-center d-flex justify-content-center align-items-center" id="puerto">Puerto Peñasco</a>

    <a href="../views/vallarta.html" class="text-light fs-4 text-decoration-none btn btn-dark destinos text-center d-flex justify-content-center align-items-center" id="vallarta">Puerto Vallarta</a>

    `;
    navOffcanvas.appendChild(destinos2Container);

    offcanvasTopLabel.textContent = 'Destinos'
})

navResorts.addEventListener('click', () => {
    navOffcanvas.innerHTML = '';

    const resortsContainer = document.createElement('div');
    resortsContainer.className = `col-12 d-flex gap-1 m-auto`
    resortsContainer.innerHTML = `

    <a href="../views/Estates.html" class="btn btn-dark destinos w-100 d-flex justify-content-center align-items-center">
    <img src="../images/logos/the-estates-logo.svg" class="img-fluid w-100">
    </a>

    <a href="../views/Grand.html" class="btn btn-dark destinos w-100 d-flex justify-content-center align-items-center">
    <img src="../images/logos/grandluxxe.png" class="img-fluid w-100">
    </a>

    <a href="../views/DeLuxxe.html" class="btn btn-dark destinos w-100 d-flex justify-content-center align-items-center">
    <img src="../images/logos/logo-Deluxxe.svg" class="img-fluid w-100">
    </a>

    <a href="../views/Kingdom.html" class="btn btn-dark destinos w-100 d-flex justify-content-center align-items-center">
    <img src="../images/logos/logo-kingdom-of-the-sun.svg" class="img-fluid w-100">
    </a>

    `
    navOffcanvas.appendChild(resortsContainer);

    const resorts2Container = document.createElement('div');
    resorts2Container.className = `col-12 d-flex gap-1 m-auto justify-content-evenly`
    resorts2Container.innerHTML = `

    <a href="../views/Bliss.html" class="btn btn-dark destinos w-100 d-flex justify-content-center align-items-center">
    <img src="../images/logos/grandbliss.png" class="img-fluid w-100">
    </a>

    <a href="../views/Mayan.html" class="btn btn-dark destinos w-100 d-flex justify-content-center align-items-center">
    <img src="../images/logos/grandmayan.png" class="img-fluid w-100">
    </a>

    <a href="../views/Celebrate.html" class="btn btn-dark destinos w-100 d-flex justify-content-center align-items-center">
    <img src="../images/logos/logo-celebrate.svg" class="img-fluid w-100">
    </a>

    <a href="../views/Palace.html" class="btn btn-dark destinos w-100 d-flex justify-content-center align-items-center">
    <img src="../images/logos/mayanpalace.png" class="img-fluid w-100">
    </a>
    `
    navOffcanvas.appendChild(resorts2Container);

    offcanvasTopLabel.textContent = 'Resorts';
});

navEventos.addEventListener('click', () => {
    navOffcanvas.innerHTML = ``;

    const eventosContainer = document.createElement('div');
    eventosContainer.className = `col-12 d-flex gap-1 m-auto`;
    eventosContainer.innerHTML = `
        <a href="../views/eventos.html" class="btn btn-dark eventos w-100 d-flex justify-content-center align-items-center text-decoration-none" id="navGruposEventos">
        <h3 class="fs-4">Grupos y Eventos</h3>
        </a>
        <a href="../views/bodas.html" class="btn btn-dark eventos w-100 d-flex justify-content-center align-items-center text-decoration-none" id="navBodas">
        <h3 class="fs-4">Bodas</h3>
        </a>
    `;

    offcanvasTopLabel.textContent = 'Eventos';
    navOffcanvas.appendChild(eventosContainer);
});

navLogin.addEventListener('click', () => {
    navOffcanvas.innerHTML = ``;

    const loginContainer = document.createElement('div');
    loginContainer.className = `bg-dark border-0 col-12 mx-auto p-4 text-white`
    loginContainer.innerHTML = `
        <div class="mb-3 d-flex justify-content-center flex-column">
            <label for="lblBuscar" class="form-label w-100 text-center">Correo Electronico</label>
            <input type="email" class="form-control" id="lblBuscar"
                placeholder="email@example.com">
                <button class="btn btn-light btnIngresar mt-3 w-25 mx-auto" id="btnBuscar">Buscar</button>
        </div>

        <div id="panelSesion">
        </div>
    `;

    offcanvasTopLabel.textContent = 'Busqueda de Informacion con Correo o Celular';
    navOffcanvas.appendChild(loginContainer);

    const panelSesion = document.getElementById('panelSesion');
    const btnBuscar = document.getElementById('btnBuscar');

    btnBuscar.addEventListener('click', async () => {
        const lblBuscar = document.getElementById('lblBuscar').value;
        const busqueda = await buscarDocumentoPorCampo('trabajadores', 'correo', lblBuscar);

        if (busqueda) {
            btnBuscar.classList.add('d-none');
            const pass = document.createElement('div');
            pass.className = "d-flex justify-content-center flex-column";
            pass.innerHTML = `
            <label for="lblpassword" class="form-label w-100 text-center">Contraseña</label>
            <input type="password" id="lblpassword" class="form-control" placeholder="constraseña">
            <button class="btn btn-light btnIngresar mt-3 w-25 mx-auto" id="btnIngresar">Ingresar</button>
            `
            panelSesion.appendChild(pass);

            document.getElementById('btnIngresar').addEventListener('click', () => {
                const pass = document.getElementById('lblpassword').value;

                if (busqueda.password === pass) {
                    location.href = '../views/admin.html'
                }
            })


        } else {
            const opciones = document.createElement('div');
            opciones.className = `row`;
            opciones.innerHTML = `
            <hr class="mb-5">
            
            <div class="col-5 mx-auto h-75 overflow-x-hidden overflow-y-auto">
            <h3>Historial de Reservas</h3>
                <div class="col-12" id="historial">
                </div>
            </div>
            
            <div class="col-5 mx-auto h-75 overflow-x-hidden overflow-y-auto" >
            <h3>Promixas Reservas</h3>
                <div class="col-12" id="reservas">
            
                </div>
            </div>
            `
            panelSesion.appendChild(opciones);

            const historialReservas = await buscarDocumentosPorCampo('historialReservas', 'reservado.correo', lblBuscar);
            const historial = document.getElementById('historial');
            historial.innerHTML = '';

            historialReservas.forEach(data => {
                const tarjeta = document.createElement('div');
                tarjeta.className = 'card col-12 shadow-sm border-dark mb-3';

                let motivoHTML = '';
                if (data.estatus === 'cancelado') {
                    motivoHTML = `<p class="card-text mb-1"><strong>Motivo de cancelación:</strong> ${data.motivoCancelacion || 'N/A'}</p>`;
                }

                tarjeta.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title text-uppercase">Habitación: ${data.habitacion || 'N/A'}</h5>
                        <p class="card-text mb-1 text-capitalize"><strong>Nombre:</strong> ${data.reservado?.nombre || 'N/A'}</p>
                        <p class="card-text mb-1"><strong>Correo:</strong> ${data.reservado?.correo || 'N/A'}</p>
                        <p class="card-text mb-1 text-capitalize"><strong>Fecha de Reservación:</strong> ${data.fechaReserva || 'N/A'}</p>
                        <p class="card-text mb-1 text-capitalize"><strong>Ingreso:</strong> ${data.checkIn || 'N/A'}</p>
                        <p class="card-text mb-1 text-capitalize"><strong>Salida:</strong> ${data.checkOut || 'N/A'}</p>
                        <p class="card-text mb-1 text-capitalize"><strong>Método de pago:</strong> ${data.reservado?.metodoPago || 'N/A'}</p>
                        <p class="card-text mb-1 text-capitalize"><strong>Estatus de Reservación:</strong> ${data.estatus || 'N/A'}</p>
                        ${motivoHTML}
                    </div>
                `;

                historial.appendChild(tarjeta);
            })


            const colecciones = ['habitacionesCelebratePark', 'habitacionesDeLuxxeGrandMayan', 'habitacionesEstates', 'habitacionesGrandLuxxe', 'habitacionesKingdomSun',
                'habitacionesMayanPalace', 'habitacionesTheGrandBliss', 'habitacionesTheGrandMayan'
            ]
            const reservas = await buscarEnVariasColeccionesPorCampo(colecciones, 'reservado.correo', lblBuscar);
            const contenedor = document.getElementById('reservas');
            contenedor.innerHTML = ''; // Limpia resultados previos

            reservas.forEach(data => {
                const tarjeta = document.createElement('div');
                tarjeta.className = 'card col-12 shadow-sm border-dark mb-3';

                tarjeta.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title text-uppercase">Habitación: ${data.habitacion || 'N/A'}</h5>
                        <p class="card-text mb-1 text-capitalize"><strong>Nombre:</strong> ${data.reservado?.nombre || 'N/A'}</p>
                        <p class="card-text mb-1"><strong>Correo:</strong> ${data.reservado?.correo || 'N/A'}</p>
                        <p class="card-text mb-1 text-capitalize"><strong>Fecha de Reservación:</strong> ${data.fechaReserva || 'N/A'}</p>
                        <p class="card-text mb-1 text-capitalize"><strong>Ingreso:</strong> ${data.checkIn || 'N/A'}</p>
                        <p class="card-text mb-1 text-capitalize"><strong>Salida:</strong> ${data.checkOut || 'N/A'}</p>
                        <p class="card-text mb-1 text-capitalize"><strong>Método de pago:</strong> ${data.reservado?.metodoPago || 'N/A'}</p>
                        <button class="btn btn-danger"
                                data-bs-toggle="modal"
                                data-bs-target="#cancelarReservaModal"
                                data-reserva='${JSON.stringify({ ...data })}'>
                            Cancelar reserva
                        </button>
                    </div>
                `;
                contenedor.appendChild(tarjeta);
            });


        }

    })
});

// Crear el modal dinámicamente
function crearModalCancelarReserva() {
    const modalHTML = `
    <div class="modal fade mt-5" id="cancelarReservaModal" tabindex="-1" aria-labelledby="cancelarReservaModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content border-dark">
                <div class="modal-header">
                    <h5 class="modal-title" id="cancelarReservaModalLabel">Cancelar Reserva</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>
                <div class="modal-body">
                    <form id="formCancelarReserva">
                        <div id="resumenReserva" class="mb-3 text-dark small"></div>

                        <div class="mb-3">
                            <label for="metodoPagoCancelacion" class="form-label">Método de pago utilizado</label>
                            <input type="text" class="form-control" id="metodoPagoCancelacion" required>
                        </div>

                        <div class="mb-3">
                            <label for="motivoCancelacion" class="form-label">Motivo de cancelación</label>
                            <textarea class="form-control" id="motivoCancelacion" rows="3" required></textarea>
                        </div>

                        <button type="submit" class="btn btn-danger">Confirmar Cancelación</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
    const div = document.createElement('div');
    div.innerHTML = modalHTML;
    document.body.appendChild(div);
}
crearModalCancelarReserva();

// Escuchar clicks en botones de cancelar
document.addEventListener('click', (e) => {
    const boton = e.target.closest('[data-bs-target="#cancelarReservaModal"]');
    if (boton) {
        const dataReserva = JSON.parse(boton.dataset.reserva);
        window.reservaActual = dataReserva; // Guardar temporalmente

        // Mostrar detalles en el modal
        const resumen = `
            <p class="text-capitalize"><strong>Habitación:</strong> ${dataReserva.habitacion || 'N/A'}</p>
            <p class="text-capitalize"><strong>Nombre:</strong> ${dataReserva.reservado?.nombre || 'N/A'}</p>
            <p><strong>Correo:</strong> ${dataReserva.reservado?.correo || 'N/A'}</p>
            <p class="text-capitalize"><strong>Fecha de Reservacion:</strong> ${dataReserva.fechaReserva || 'N/A'}</p>
            <p class="text-capitalize"><strong>Ingreso:</strong> ${dataReserva.checkIn || 'N/A'}</p>
            <p class="text-capitalize"><strong>Salida:</strong> ${dataReserva.checkOut || 'N/A'}</p>
        `;
        document.getElementById('resumenReserva').innerHTML = resumen;
    }
});

// Manejar envío del formulario
document.addEventListener('submit', async (e) => {
    if (e.target.id === 'formCancelarReserva') {
        e.preventDefault();

        const metodoPago = document.getElementById('metodoPagoCancelacion').value.trim();
        const motivo = document.getElementById('motivoCancelacion').value.trim();

        if (!metodoPago || !motivo) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        window.reservaActual.estatus = 'cancelado'
        window.reservaActual.motivoCancelacion = motivo;

        await guardarDocumentoIdAutomatico('historialReservas', window.reservaActual);

        const { id, coleccion } = window.reservaActual;

        await editarDocumento(coleccion, id, {
            checkIn: "",
            checkOut: "",
            estado: 'disponible',
            fechaReserva: "",
            noches: "",
            reservado: {
                correo: "",
                nombre: "",
                telefono: "",
                metodoPago: ""
            }
        }
        )

        // Opcional: cerrar el modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('cancelarReservaModal'));
        modal.hide();
        location.reload();
    }
});
