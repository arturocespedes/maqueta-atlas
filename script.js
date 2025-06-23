

// === PARALLAX SOBRE LA IMAGEN ===
const imagen = document.querySelector('.imagen-mapa');

if (imagen) {
  document.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    const offsetX = 0.5 - e.clientX / innerWidth;
    const offsetY = 0.5 - e.clientY / innerHeight;
    const moveX = offsetX * 20;
    const moveY = offsetY * 20;
    imagen.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  document.addEventListener('mouseleave', () => {
    imagen.style.transform = 'translate(0, 0)';
  });
}

// === BOTÓN "INGRESAR" DESDE INDEX ===
const boton = document.getElementById('ingresarBtn');
if (boton) {
  boton.addEventListener('click', (e) => {
    e.preventDefault(); // evita que cambie de página altiro
    const rect = boton.getBoundingClientRect(); // posición del botón en pantalla
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // origen del zoom = el botón
    document.body.style.transformOrigin = `${x}px ${y}px`;
    document.body.classList.add('zoom-dirigido');

    // espera 600 ms y luego cambia la página
    setTimeout(() => {
      window.location.href = "mapaglobal.html";
    }, 600);
  });
}


// === BOTÓN "VOLVER" DINÁMICO ===
const volver = document.getElementById('volverBtn');
if (volver) {
  const destino = volver.dataset.volver || "index.html";
  volver.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('animar-zoom-out');
    setTimeout(() => {
      window.location.href = destino;
    }, 600);
  });
}

// === FICHAS EMERGENTES (POPUP) PARA PERSONAJES ===
const fichas = {
  'punto-jilguero': {
    titulo: "Jilguero (Spinus barbatus)",
    img: "img/Jilguero2.PNG",
    texto: `
      <strong>Largo:</strong> 13–14 cm<br>
      <strong>Hábitat:</strong> Zonas verdes densas como árboles y matorrales.<br>
      <strong>Estado de conservación:</strong> IUCN (2025): Menor riesgo.<br><br>
      <strong>AFECTACION BIÓTICA</strong><br><br>
      <strong>Ave abundante en zona.</strong><br><br>
      <strong>Descripción:</strong> El jilguero destacó dentro de la zona como una de las especies más abundantes y bien distribuidas en diversos ambientes. Se encuentra mayormente en matorral costero (6,11 ind/ha), pradera costera (4,81 ind/ha) y plantaciones (2,11 ind/ha).<br><br>
      <small><strong>Fuente:</strong> Minera Los Pelambres. (2024). Estudio de Impacto Ambiental: Extensión de Vida Útil de Minera Los Pelambres (Capítulo 3.15, pp. 285–287). Servicio de Evaluación Ambiental (SEA), Chile.</small>
    `
  },
  'punto-jote': {
    titulo: " Jote de cabeza negra (Coragyps atratus)",
    img: "img/Jote2.PNG",
    texto: `
      <strong>Largo:</strong>56 - 74 cm<br>
      <strong>Hábitat:</strong> Presente en valles y zonas costeras, no suele subir a zonas con alturas como territorios cordilleranos.<br>
      <strong>Estado de conservación:</strong> IUCN (2025): Menor riesgo.<br><br>
      <strong>AFECTACION BIÓTICA</strong><br><br>
      <strong>Pérdida de aves silvestres por colisión y electrocución debido a la instalación de líneas de transmisión eléctrica</strong><br><br>
      <strong>Descripción:</strong> En el área de Puerto Punta Chungo, las líneas eléctricas de 220 kV afectan a las aves por riesgo de electrocución y colisión, interrumpiendo sus rutas de vuelo. Una de las especies más afectadas es el jote de cabeza negra (Coragyps atratus), con 67 individuos registrados (8,21 %). Para mitigar el impacto, se instalan dispositivos anticolisión visibles incluso para aves nocturnas.
<br><br>
      <small><strong>Fuente:</strong> Minera Los Pelambres. (2024). Estudio de Impacto Ambiental: Extensión de Vida Útil de Minera Los Pelambres (Capítulo 4, p. 796). Servicio de Evaluación Ambiental (SEA), Chile.</small>
    `
  },
  'punto-bosques': {
    titulo: "Bosques de evapotranspiración (Eucalyptus globulus)",
    img: "img/bosques.png",
    texto: `
      <strong>Dimensión:</strong>109,13 hectáreas<br>
      <strong>Hábitat:</strong> Conforma el tipo de hábitat del Puerto Punta Chungo denominado “plantación” <br>
      <strong>Estado de conservación:</strong> IUCN (2025): No amenazado<br><br>
      <strong>AFECTACION ANTRÓPICA / FÍSICA</strong><br><br>
      <strong>Plantación de Eucalyptus globulus en el Puerto Punta Chungo, parte del proceso de evapotranspiración.</strong><br><br>
      <strong>Descripción:</strong> En Puerto Punta Chungo, las plantaciones de Eucalyptus globulus cubren 109,13 ha (43,8 % del área de influencia), siendo la vegetación dominante. Su riego por microaspersión en primavera-verano intensifica la evapotranspiración, alterando la humedad y temperatura del entorno. Con un índice de artificialización de 9,4 %, estas plantaciones reflejan una fuerte intervención ecológica y paisajística.<br><br>
      <small><strong>Fuente:</strong> Minera Los Pelambres. (2024). Estudio de Impacto Ambiental: Extensión de Vida Útil de Minera Los Pelambres (Capítulos 3.13 y 4). Servicio de Evaluación Ambiental (SEA), Chile
</small>
    `
  },
  'punto-luminaria': {
    titulo: "Luz del puerto",
    img: "img/luminaria.png",
    texto: `
      <strong>Dimensión:</strong> Toda la zona infraestructura del Puerto Punta Chungo <br>
      <strong>Hábitat:</strong> Provienen de los sitemas de ilumnación<br><br>
      <strong>AFECTACION ANTRÓPICA</strong><br><br>
      <strong>Contaminación lumínica en la zona de puerto en hábitat de fauna.</strong><br><br>
      <strong>Descripción:</strong> En el Puerto Punta Chungo se reemplazaron 1.912 luminarias distribuidas en varias áreas del proyecto, incluyendo Puerto Punta Chungo. La potencia total instalada en esta zona es de 27,15 kW. La iluminación en el puerto no solo tiene un impacto visual en la escena nocturna, sino que también contribuye a la contaminación lumínica que podría alterar los patrones de comportamiento de las aves nocturnas.<br><br>
      <small><strong>Fuente:</strong> Minera Los Pelambres. (2024). Estudio de Impacto Ambiental: Extensión de Vida Útil de Minera Los Pelambres (Capítulo 3.5: Luminosidad, p. 3–15). Servicio de Evaluación Ambiental (SEA), Chile.</small>
    `
  },
  'punto-cables': {
    titulo: "Líneas de transmisión eléctrica",
    img: "img/torreluminaria.png",
    texto: `
      <strong>Transmisión:</strong> 220kV<br>
      <strong>Hábitat:</strong> Infraestructura Puerto Punta Chungo<br><br>
      <strong>AFECTACION ANTRÓPICA</strong><br><br>
      <strong>Pérdida de aves silvestres por colisión y electrocución durante la operación del Proyecto debido a la instalación de líneas de transmisión eléctrica</strong><br><br>
      <strong>Descripción:</strong> El tendido eléctrico en Puerto Punta Chungo son estructuras que incluyen líneas de transmisión de 220 kV en doble circuito, esenciales para operar la planta desaladora. Su instalación puede afectar rutas de vuelo de aves marinas como el jote de cabeza negra, generando riesgos de colisión. Además, estos sistemas emiten campos electromagnéticos de baja intensidad, que configuran una presencia constante de infraestructura técnica en zonas ecológicas.<br><br>
      <small><strong>Fuente:</strong> Minera Los Pelambres. (2024). Estudio de Impacto Ambiental: Extensión de Vida Útil de Minera Los Pelambres (Capítulo 4.4, pp. 243–245). Servicio de Evaluación Ambiental (SEA), Chile.</small>
    `
  },
  'punto-diuca': {
    titulo: "Diuca",
    img: "img/Diuca2.PNG",
    texto: `
      <strong>Largo:</strong> 17–18 cm cm<br>
      <strong>Hábitat:</strong> Zonas verdes abiertas, como campo y bordes de bosques<br>
      <strong>Estado de conservación:</strong> IUCN (2025): Menor riesgo.<br><br>
      <strong>AFECTACION BIÓTICA</strong><br><br>
      <strong>Pérdida de aves silvestres por colisión y electrocución debido a la instalación de líneas de transmisión eléctrica</strong><br><br>
      <strong>Descripción:</strong> Aunque no es una especie directamente impactada según los estudios evaluados, su presencia en zonas intervenidas por infraestructura extractiva como luminarias o tendido eléctrico (que afectan a otras aves) puede señalar una convivencia forzada con la tecnonaturaleza costera, y su avistamiento ayuda a establecer líneas base ecológicas en zonas que podrían ser transformadas. Esta ave esta registrada en como una de las aves con mayor presencia en la zona<br><br>
      <small><strong>Fuente:</strong> Minera Los Pelambres. (2024). Estudio de Impacto Ambiental: Extensión de Vida Útil de Minera Los Pelambres (Capítulo 3.15, pp. 285–287). Servicio de Evaluación Ambiental (SEA), Chile.</small>
    `
  },
};

const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const popupTitulo = document.getElementById('popup-nombre');
const popupTexto = document.getElementById('popup-detalle');
const cerrarPopup = document.getElementById('cerrarPopup');
const fondoOscuro = document.getElementById('fondo-oscuro');

if (popup && popupImg && popupTitulo && popupTexto && cerrarPopup && fondoOscuro) {
  cerrarPopup.addEventListener('click', () => {
    popup.classList.add('oculto');
    fondoOscuro.classList.add('oculto'); // Ocultar fondo al cerrar
  });

  function mostrarFicha(data) {
    popupImg.src = data.img;
    popupTitulo.textContent = data.titulo;
    popupTexto.innerHTML = data.texto;
    popup.classList.remove('oculto');
    fondoOscuro.classList.remove('oculto'); // Mostrar fondo al abrir
  }

  document.querySelectorAll('.punto').forEach(p => {
    const id = p.id;
    if (fichas[id]) {
      p.addEventListener('click', () => {
        mostrarFicha(fichas[id]);
      });
    }
  });
}

// === REDIRECCIONES A OTRAS VISTAS (solo si NO hay ficha) ===
const redirecciones = {
  'punto-puerto': 'puertopresente.html',
  'punto-perturbacion': 'perturbacionaerea.html',
  'punto-choapa': 'provinciachoapa.html'
};

Object.entries(redirecciones).forEach(([id, url]) => {
  if (!fichas[id]) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.addEventListener('click', (e) => {
        e.preventDefault();
        const rect = elemento.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        document.body.style.transformOrigin = `${x}px ${y}px`;
        document.body.classList.add('zoom-dirigido');

        setTimeout(() => {
          window.location.href = url;
        }, 600);
      });
    }
  }
});

// === PARALLAX TAMBIÉN PARA LOS PUNTOS ===
const puntos = document.querySelectorAll('.punto');

document.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;
  const offsetX = 0.5 - e.clientX / innerWidth;
  const offsetY = 0.5 - e.clientY / innerHeight;
  const moveX = offsetX * 20;
  const moveY = offsetY * 20;

  if (imagen) {
    imagen.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }

  puntos.forEach(p => {
    const puntoOffsetX = offsetX * 10; // movimiento más leve que la imagen
    const puntoOffsetY = offsetY * 10;
    p.style.transform = `translate(calc(-50% + ${puntoOffsetX}px), calc(-50% + ${puntoOffsetY}px))`;
  });
});

document.addEventListener('mouseleave', () => {
  if (imagen) imagen.style.transform = 'translate(0, 0)';
  puntos.forEach(p => {
    p.style.transform = 'translate(-50%, -50%)';
  });
});
