import { guardarDocumentoIdAutomatico, obtenerTodosLosDocumentos } from './firebase/crud.js';

document.addEventListener('DOMContentLoaded', () => {
    
    async function cargarComentarios() {
        const comentarios = document.getElementById('comentarios');

    const comentariosUsuarios = await obtenerTodosLosDocumentos('comentariosKingdom');
    try {
        comentariosUsuarios.forEach((usuario) => {
            const div = document.createElement('div');
            div.className = `border p-3 mb-3`;
            div.innerHTML =`
                <p class="mb-1"><strong>${usuario.nombre}</strong></p>
                <p>${usuario.comentario}</p>
            `;
            comentarios.appendChild(div);
        });
    } catch (error) {
        console.error('Error fetching comentariosUsuarios:', error);
    }
    }

    document.getElementById('submitComment').addEventListener('click', async(event) => {
        event.preventDefault(); // Prevent the page from reloading

        const name = document.getElementById('commentName').value.trim();
        const comment = document.getElementById('commentText').value.trim();

        if (name && comment) {
            
            const objeto ={
                nombre: name,
                comentario: comment
            }

        await guardarDocumentoIdAutomatico('comentariosKingdom',objeto)
        cargarComentarios();

            // Clear the form
            document.getElementById('commentName').value = '';
            document.getElementById('commentText').value = '';
        } else {
            alert('Por favor, completa todos los campos antes de enviar tu comentario.');
        }
    });

    cargarComentarios();

})