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

navLogin.addEventListener('click',()=>{
    navOffcanvas.innerHTML = ``;

    const loginContainer = document.createElement('div');
    loginContainer.className = `bg-dark border-0 col-6  m-auto p-4 text-white`
    loginContainer.innerHTML = `
        <div class="mb-3">
            <label for="exampleDropdownFormEmail2" class="form-label">Correo Electronico</label>
            <input type="email" class="form-control" id="exampleDropdownFormEmail2"
                placeholder="email@example.com">
        </div>
        <div class="mb-3">
            <label for="exampleDropdownFormPassword2" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="exampleDropdownFormPassword2"
                placeholder="Password">
        </div>
        <div class="mb-3">
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="dropdownCheck2">
                <label class="form-check-label" for="dropdownCheck2">
                    Recordar Contraseña
                </label>
            </div>
        </div>
        <button class="btn btn-light btnIngresar">Ingresar</button>
    `;

    offcanvasTopLabel.textContent = 'Inicio de Sesion';
    navOffcanvas.appendChild(loginContainer);
});