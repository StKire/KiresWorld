import {buscarEnVariasColeccionesPorCampo} from './firebase/crud.js'

document.addEventListener('DOMContentLoaded',()=>{

    const btnReservas = document.getElementById('btnReservas');
    btnReservas.addEventListener('click',async () => {
        const colecciones = ['habitacionesCelebratePark', 'habitacionesDeLuxxeGrandMayan', 'habitacionesEstates', 'habitacionesGrandLuxxe', 'habitacionesKingdomSun',
            'habitacionesMayanPalace', 'habitacionesTheGrandBliss', 'habitacionesTheGrandMayan'
        ]
    
        const reservas = await buscarEnVariasColeccionesPorCampo(colecciones, 'estado', 'reservado');
                const contenedor = document.getElementById('mostrar');
                contenedor.innerHTML = ''; // Limpia resultados previos
    
                reservas.forEach(data => {
                    const tarjeta = document.createElement('div');
                    tarjeta.className = 'card col-lg-6 col-md-11 mx-auto shadow-sm border-dark mb-3';
    
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
                
                        const motivo = document.getElementById('motivoCancelacion').value.trim();
                
                        if (!motivo) {
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
    })

    const btnHabitaciones = document.getElementById('btnHabitaciones');
    btnHabitaciones.addEventListener('click',async () => {
        const colecciones = ['habitacionesCelebratePark', 'habitacionesDeLuxxeGrandMayan', 'habitacionesEstates', 'habitacionesGrandLuxxe', 'habitacionesKingdomSun',
            'habitacionesMayanPalace', 'habitacionesTheGrandBliss', 'habitacionesTheGrandMayan'
        ]
    
        const reservas = await buscarEnVariasColeccionesPorCampo(colecciones, 'estado', 'disponible');
                const contenedor = document.getElementById('mostrar');
                contenedor.innerHTML = ''; // Limpia resultados previos
    
                reservas.forEach(data => {
                    const tarjeta = document.createElement('div');
                    tarjeta.className = 'card col-lg-5 col-md-11 mx-auto shadow-sm border-dark mb-3';
    
                    tarjeta.innerHTML = `
                        <div class="card-body">
                            <h5 class="card-title text-uppercase">Habitación: ${data.habitacion || 'N/A'}</h5>
                            <p class="card-text mb-1 text-capitalize"><strong>Nombre:</strong> ${data.reservado?.nombre || 'N/A'}</p>
                            <p class="card-text mb-1"><strong>Correo:</strong> ${data.reservado?.correo || 'N/A'}</p>
                            <p class="card-text mb-1 text-capitalize"><strong>Fecha de Reservación:</strong> ${data.fechaReserva || 'N/A'}</p>
                            <p class="card-text mb-1 text-capitalize"><strong>Ingreso:</strong> ${data.checkIn || 'N/A'}</p>
                            <p class="card-text mb-1 text-capitalize"><strong>Salida:</strong> ${data.checkOut || 'N/A'}</p>
                            <p class="card-text mb-1 text-capitalize"><strong>Método de pago:</strong> ${data.reservado?.metodoPago || 'N/A'}</p>
                            
                        </div>
                    `;
                    contenedor.appendChild(tarjeta);
                });

    })

})