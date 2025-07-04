// Datos dinámicos del temario
const temario = [
    "Introducción a sistemas operativos",
    "Administración de redes",
    "Virtualización con VMware/VirtualBox",
    "Seguridad informática básica",
    "Automatización con scripts (Bash/PowerShell)"
];

// Beneficios del curso
const beneficios = [
    {
        icono: "🎓",
        titulo: "Certificación",
        descripcion: "Diploma avalado por nuestra institución."
    },
    {
        icono: "💻",
        titulo: "Laboratorios",
        descripcion: "Acceso a entornos virtuales prácticos."
    },
    {
        icono: "📚",
        titulo: "Material",
        descripcion: "Recursos digitales incluidos."
    }
];

// Llenar temario automáticamente
document.addEventListener('DOMContentLoaded', () => {
    const listaTemario = document.getElementById('lista-temario');
    temario.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listaTemario.appendChild(li);
    });

    // Llenar beneficios
    const gridBeneficios = document.querySelector('.grid-beneficios');
    beneficios.forEach(beneficio => {
        const div = document.createElement('div');
        div.className = 'beneficio-card';
        div.innerHTML = `
            <span class="icono">${beneficio.icono}</span>
            <h3>${beneficio.titulo}</h3>
            <p>${beneficio.descripcion}</p>
        `;
        gridBeneficios.appendChild(div);
    });

    // Manejar formulario
    const form = document.getElementById('form-inscripcion');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        alert(`¡Gracias, ${nombre}! Pronto te contactaremos.`);
        form.reset();
    });
});