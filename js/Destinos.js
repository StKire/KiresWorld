document.addEventListener('DOMContentLoaded', () => {
    window.handleRadioClick = function (valor) { // Expose the function to the global scope
        const fondo = document.getElementById('fondo');
        const imgLocacion = document.getElementById('imgLocacion');
        const locacion = document.getElementById('locacion');
        const btnLocacion = document.getElementById('btnLocacion');
        switch (valor) {
            case 'nayarit':
                fondo.style.backgroundImage = 'url(./images/zonas/nayarit.jpg)';
                imgLocacion.src = './images/zonas/nv-pv.png';
                locacion.textContent = 'NUEVO NAYARIT-VAYARTA'
                btnLocacion.href='./views/nayarit.html'
                break;
            case 'riviera':
                fondo.style.backgroundImage = 'url(./images/zonas/riviera.jpg)'
                imgLocacion.src = './images/zonas/rm.png';
                locacion.textContent = 'RIVIERA MAYA'
                btnLocacion.href='./views/riviera.html'
                break;
            case 'cabos':
                fondo.style.backgroundImage = 'url(./images/zonas/cabos.jpg)'
                imgLocacion.src = './images/zonas/lc.png';
                locacion.textContent = 'LOS CABOS'
                btnLocacion.href='./views/cabos.html'
                break;
            case 'acapulco':
                fondo.style.backgroundImage = 'url(./images/zonas/acapulco.jpg)'
                imgLocacion.src = './images/zonas/aca.png';
                locacion.textContent = 'ACAPULCO'
                btnLocacion.href='./views/acapulco.html'
                break;
            case 'puerto':
                fondo.style.backgroundImage = 'url(./images/zonas/puerto.jpg)'
                imgLocacion.src = './images/zonas/pp.png';
                locacion.textContent = 'PUERTO PEÑASCO'
                btnLocacion.href='./views/puerto.html'
                break;
            case 'vallarta':
                fondo.style.backgroundImage = 'url(./images/zonas/vallarta.jpg)'
                imgLocacion.src = './images/zonas/nv-pv.png';
                locacion.textContent = 'PUERTO VALLARTA'
                btnLocacion.href='./views/vallarta.html'
                break;
            
        }
    };

    const firstRadio = document.getElementById('vbtn-radio1');
    if (firstRadio) {
        firstRadio.checked = true; // Ensure the first radio is selected
        handleRadioClick('nayarit'); // Call the function with the corresponding value
    }

});