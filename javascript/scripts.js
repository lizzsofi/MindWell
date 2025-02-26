// Inicio
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Nosotros

function toggleInfo(valor) {
    var info = document.getElementById(valor);
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

// Contacto

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submissionsContainer = document.getElementById('submissionsContainer');

    // Cargar y mostrar las entradas almacenadas al cargar la página
    loadSubmissions();

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        saveSubmission();
        form.reset();
    });

    function saveSubmission() {
        const nombre = form.nombre.value;
        const apellido = form.apellido.value;
        const edad = form.edad.value;
        const email = form.email.value;
        const mensaje = form.mensaje.value;

        const submission = {
            nombre,
            apellido,
            edad,
            email,
            mensaje,
            fecha: new Date().toLocaleString()
        };

        // Obtener las entradas existentes del localStorage
        let submissions = JSON.parse(localStorage.getItem('submissions')) || [];
        // Agregar la nueva entrada
        submissions.push(submission);
        // Guardar de nuevo en localStorage
        localStorage.setItem('submissions', JSON.stringify(submissions));

        // Mostrar la nueva entrada en la página
        displaySubmission(submission);
    }

    function loadSubmissions() {
        const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
        submissions.forEach(submission => displaySubmission(submission));
    }

    function displaySubmission(submission) {
        const card = document.createElement('div');
        card.className = 'submission-card';
        card.innerHTML = `
            <h3>${submission.nombre} ${submission.apellido}</h3>
            <p><strong>Edad:</strong> ${submission.edad}</p>
            <p><strong>Email:</strong> ${submission.email}</p>
            <p><strong>Mensaje:</strong> ${submission.mensaje}</p>
            <p><small>Enviado el: ${submission.fecha}</small></p>
        `;
        submissionsContainer.appendChild(card);
    }
});






