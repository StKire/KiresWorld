const btnUnaHabitacion = document.getElementById('btnUnaHabitacion');
const btnDosHabitaciones = document.getElementById('btnDosHabitaciones');
const btnTresHabitaciones = document.getElementById('btnTresHabitaciones');
const btnCuatroHabitaciones = document.getElementById('btnCuatroHabitaciones');

const roomDetailsModalLabel = document.getElementById('roomDetailsModalLabel');
const cuerpoModal = document.getElementById('cuerpoModal');

btnUnaHabitacion.addEventListener('click', () => {
    cuerpoModal.innerHTML = '';

    const suite = document.createElement('div');
    suite.className = 'd-flex justify-content-center align-items-center flex-column';

    suite.innerHTML = `
        <div id="carouselhabitacion" class="carousel slide h-50 " data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../images/resorts/estates/una/vidanta-nuevo-vallarta-accommodations-the-estates-one-bedroom-1.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/una/vidanta-nuevo-vallarta-accommodations-the-estates-one-bedroom-2.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/una/vidanta-nuevo-vallarta-accommodations-the-estates-one-bedroom-3.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
            </div>
            <button class="carousel-control-prev" type="button"
                data-bs-target="#carouselhabitacion" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button"
                data-bs-target="#carouselhabitacion" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-black" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="h-50 row p-2 mt-2">
            <div class="col-6 text-center d-flex justify-content-center align-items-center flex-column"
                style="border-right: 1px solid #c29c75;">
                Ocupación: 4 adultos<br>
                Tipo: The Estates de Una Recámara <br>
                Cama: Una cama king-size <br>
                Baños: Dos baños con una tina de Jacuzzi.
            </div>
            <div
                class="col-6 text-capitalize text-center d-flex justify-content-center align-items-center flex-column">
                Precio por noche <br>
                <span class="text-black fw-bold">$11,340 MXN</span>
                <button class="btn btn-dark" id="btnVerificarUna">Verificar Disponibilidad</button>
                <button type="button" class="btn btn-dark mt-2" data-bs-dismiss="modal" id="btnReservarUna">Reservar Habitacion</button>
            </div>
        </div>
    `;
    roomDetailsModalLabel.textContent ='The Estates de Una Recamara';
    cuerpoModal.appendChild(suite);
});

btnDosHabitaciones.addEventListener('click', () => {
    cuerpoModal.innerHTML = '';

    const suite = document.createElement('div');
    suite.className = 'd-flex justify-content-center align-items-center flex-column';

    suite.innerHTML = `
        <div id="carouselhabitacion" class="carousel slide h-50 " data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../images/resorts/estates/dos/vidanta-nuevo-vallarta-accommodations-the-estates-two-bedroom-1.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/dos/vidanta-nuevo-vallarta-accommodations-the-estates-two-bedroom-2.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/dos/vidanta-nuevo-vallarta-accommodations-the-estates-two-bedroom-3.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/dos/vidanta-nuevo-vallarta-accommodations-the-estates-two-bedroom-4.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/dos/vidanta-nuevo-vallarta-accommodations-the-estates-two-bedroom-5.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/dos/vidanta-nuevo-vallarta-accommodations-the-estates-two-bedroom-6.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
            </div>
            <button class="carousel-control-prev" type="button"
                data-bs-target="#carouselhabitacion" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button"
                data-bs-target="#carouselhabitacion" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-black" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="h-50 row p-2 mt-2">
            <div class="col-6 text-center d-flex justify-content-center align-items-center flex-column"
                style="border-right: 1px solid #c29c75;">
                Ocupación: 6 adultos, 2 niños<br>
                Tipo: The Estates de Dos Recámaras<br>
                Cama: Una cama king-size, dos camas individuales<br>
                Baños: Tres baños con dos tinas de Jacuzzi
            </div>
            <div
                class="col-6 text-capitalize text-center d-flex justify-content-center align-items-center flex-column">
                Precio por noche <br>
                <span class="text-black fw-bold">$13,020 MXN</span>
                <button class="btn btn-dark" id="btnVerificarDos">Verificar Disponibilidad</button>
                <button type="button" class="btn btn-dark mt-2" data-bs-dismiss="modal" id="btnReservarDos">Reservar Habitacion</button>
            </div>
        </div>
    `;
    roomDetailsModalLabel.textContent ='The Estates de Dos Recamaras';
    cuerpoModal.appendChild(suite);
});

btnTresHabitaciones.addEventListener('click', () => {
    cuerpoModal.innerHTML = '';

    const suite = document.createElement('div');
    suite.className = 'd-flex justify-content-center align-items-center flex-column';

    suite.innerHTML = `
        <div id="carouselhabitacion" class="carousel slide h-50 " data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../images/resorts/estates/tres/vidanta-nuevo-vallarta-accommodations-the-estates-three-bedroom-1.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/tres/vidanta-nuevo-vallarta-accommodations-the-estates-three-bedroom-2.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/tres/vidanta-nuevo-vallarta-accommodations-the-estates-three-bedroom-3.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/tres/vidanta-nuevo-vallarta-accommodations-the-estates-three-bedroom-4.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/tres/vidanta-nuevo-vallarta-accommodations-the-estates-three-bedroom-5.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/tres/vidanta-nuevo-vallarta-accommodations-the-estates-three-bedroom-6.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/tres/vidanta-nuevo-vallarta-accommodations-the-estates-three-bedroom-7.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
            </div>
            <button class="carousel-control-prev" type="button"
                data-bs-target="#carouselhabitacion" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button"
                data-bs-target="#carouselhabitacion" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-black" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="h-50 row p-2 mt-2">
            <div class="col-6 text-center d-flex justify-content-center align-items-center flex-column"
                style="border-right: 1px solid #c29c75;">
                Ocupación: 8 adultos, 2 niños<br>
                Tipo: The Estates de Tres Recámaras<br>
                Cama: Dos camas king-size, dos camas individuales<br>
                Baños: Cinco baños con tres tinas de Jacuzzi.
            </div>
            <div
                class="col-6 text-capitalize text-center d-flex justify-content-center align-items-center flex-column">
                Precio por noche <br>
                <span class="text-black fw-bold">$14,490 MXN</span>
                <button class="btn btn-dark" id="btnVerificarTres">Verificar Disponibilidad</button>
                <button type="button" class="btn btn-dark mt-2" data-bs-dismiss="modal" id="btnReservarTres">Reservar Habitacion</button>
            </div>
        </div>
    `;
    roomDetailsModalLabel.textContent ='The Estates de Tres Recamaras';
    cuerpoModal.appendChild(suite);
});

btnCuatroHabitaciones.addEventListener('click', () => {
    cuerpoModal.innerHTML = '';

    const suite = document.createElement('div');
    suite.className = 'd-flex justify-content-center align-items-center flex-column';

    suite.innerHTML = `
        <div id="carouselhabitacion" class="carousel slide h-50 " data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../images/resorts/estates/cuatro/vidanta-nuevo-vallarta-accommodations-the-estates-four-bedroom-1.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/cuatro/vidanta-nuevo-vallarta-accommodations-the-estates-four-bedroom-2.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/cuatro/vidanta-nuevo-vallarta-accommodations-the-estates-four-bedroom-3.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/cuatro/vidanta-nuevo-vallarta-accommodations-the-estates-four-bedroom-4.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/cuatro/vidanta-nuevo-vallarta-accommodations-the-estates-four-bedroom-5.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/cuatro/vidanta-nuevo-vallarta-accommodations-the-estates-four-bedroom-6.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
                <div class="carousel-item">
                    <img src="../images/resorts/estates/cuatro/vidanta-nuevo-vallarta-accommodations-the-estates-four-bedroom-7.jpg"
                        class="img-fluid w-100" alt="..."
                        style="object-fit: cover; height: 100%;">
                </div>
            </div>
            <button class="carousel-control-prev" type="button"
                data-bs-target="#carouselhabitacion" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-black" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button"
                data-bs-target="#carouselhabitacion" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-black" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="h-50 row p-2 mt-2">
            <div class="col-6 text-center d-flex justify-content-center align-items-center flex-column"
                style="border-right: 1px solid #c29c75;">
                Ocupación: 12 adultos<br>
                Tipo: The Estates de Cuatro Recámaras<br>
                Cama: Dos camas king-size, cuatro camas individuales<br>
                Baños: Cuatro baños y medio con tres tinas de Jacuzzi.
            </div>
            <div
                class="col-6 text-capitalize text-center d-flex justify-content-center align-items-center flex-column">
                Precio por noche <br>
                <span class="text-black fw-bold">$17,010 MXN</span>
                <button class="btn btn-dark" id="btnVerificarCuatro">Verificar Disponibilidad</button>
                <button type="button" class="btn btn-dark mt-2" data-bs-dismiss="modal" id="btnReservarCuatro">Reservar Habitacion</button>
            </div>
        </div>
    `;
    roomDetailsModalLabel.textContent ='The Estates de Cuatro Recamaras';
    cuerpoModal.appendChild(suite);
});

