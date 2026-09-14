export const nav = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Evidencia", href: "#evidencia" },
  { label: "Producto", href: "#producto" },
  { label: "Preguntas", href: "#preguntas" },
];

export const hero = {
  titulo: "Rigor metodológico en cada llamada, a la escala que necesitas.",
  subtitulo:
    "Encudex es el agente de inteligencia artificial que levanta encuestas telefónicas completas con el mismo rigor metodológico que un entrevistador humano, sin desviarse nunca del guion, a una fracción del costo y sin límite de volumen.",
  ctaPrimario: "Agendar demostración",
  ctaSecundario: "Cómo funciona",
};

export const posicionamiento =
  "Investigación telefónica probabilística, aplicada por un agente que no se cansa, no improvisa y deja evidencia de cada decisión.";

export const problema = {
  titulo: "El problema",
  items: [
    {
      titulo: "Varianza entre entrevistadores",
      texto:
        "Dos entrevistadores leen la misma pregunta de dos maneras. Con doscientos, el instrumento que aprobaste no es el que se aplicó.",
    },
    {
      titulo: "El costo por completa manda",
      texto:
        "Cada punto de tasa de contacto se paga en horas de caseta, y la caseta no escala en temporada alta.",
    },
    {
      titulo: "Auditar es caro",
      texto:
        "Verificar que el campo se levantó como se diseñó implica escuchar grabaciones a mano, y casi nadie lo hace a fondo.",
    },
  ],
};

export const comoFunciona = {
  titulo: "Tres registros de habla, una sola regla dura",
  registros: [
    {
      etiqueta: "Registro 1",
      titulo: "Reactivos",
      texto:
        "El enunciado y las opciones de cada pregunta se graban y se aprueban antes de salir a campo. En la llamada solo se reproducen, idénticos, siempre. El sistema los pide por identificador; nunca los redacta.",
    },
    {
      etiqueta: "Registro 2",
      titulo: "Repertorio",
      texto:
        "Aperturas, transiciones, respuestas a objeciones frecuentes, sondeos y cierres, también pre-grabados y aprobados por escrito.",
    },
    {
      etiqueta: "Registro 3",
      titulo: "Conversación",
      texto:
        "Lo que nadie anticipó: dudas, aclaraciones, rapport. Aquí el agente sí habla libre, con la misma voz, y con límites verificados en cada turno: no puede leer las opciones antes de tiempo, no puede sugerir qué contestar, no puede agregar información y no puede reformular la pregunta. Si la persona pide que se la repitan, se reproduce el archivo original.",
    },
  ],
  cierre:
    "La diferencia entre «le pedimos al modelo que no lo hiciera» y «el modelo no tiene cómo hacerlo» es la diferencia entre que te aprueben el estudio y que no.",
};

export const evidencia = {
  titulo: "Después de cada entrevista, usted puede comprobar qué pasó",
  intro:
    "Cada llamada deja un expediente claro: qué se preguntó, qué respondió la persona y cómo quedó registrada su respuesta.",
  items: [
    {
      titulo: "La pregunta exacta que se hizo",
      texto:
        "Puede ver qué versión del cuestionario se usó y cualquier cambio frente a la versión anterior.",
      detalle: "El guion aprobado queda identificado",
    },
    {
      titulo: "La conversación completa",
      texto: "Puede escuchar por separado al agente y a la persona, sin perder el orden de la llamada.",
      detalle: "Dos audios, perfectamente sincronizados",
    },
    {
      titulo: "Cómo se registró cada respuesta",
      texto: "Cada respuesta queda ligada al audio original, al texto entendido y a la opción que marcó el agente.",
      detalle: "También muestra si una persona la corrigió",
    },
    {
      titulo: "Si la pregunta se escuchó completa",
      texto:
        "El registro muestra si la pregunta terminó, si fue interrumpida, en qué momento y si tuvo que repetirse.",
      detalle: "No basta con saber que se reprodujo",
    },
    {
      titulo: "Qué ocurrió en cada intento",
      texto: "Queda claro si contestaron, rechazaron, no eran elegibles o completaron la entrevista.",
      detalle: "Un resultado claro para cada marcación",
    },
    {
      titulo: "Qué tan bien interpretó las respuestas",
      texto: "Se compara lo que marcó el agente contra la revisión de una persona, pregunta por pregunta.",
      detalle: "La precisión se demuestra, no se supone",
    },
  ],
  cierre:
    "En resumen: no recibe solamente una base de datos. Recibe lo necesario para revisar de dónde salió cada respuesta.",
};

export const panel = {
  titulo: "Un panel que se lee durante el campo, no después",
  items: [
    "Avance del levantamiento y proyección de cierre.",
    "Cuotas en vivo con semáforos por celda.",
    "Tasas AAPOR calculadas solas.",
    "Escuchar cualquier grabación con su transcripción sincronizada y descargar los datos en el formato de siempre.",
  ],
  destacado: "Botón de pausa de emergencia del estudio.",
};

export const cobro = {
  titulo: "Se cobra por entrevista completada",
  intro:
    "La unidad de cobro es la misma que usted ya usa. El criterio de qué cuenta como completa se declara por escrito y se aprueba antes del campo, junto con el instrumento.",
  subtitulo: "Lo que no se cobra",
  noSeCobra: [
    "Marcaciones que no conectan.",
    "Buzones de voz.",
    "Números inválidos.",
    "Contactos que rechazan antes de consentir.",
    "Tamizados por no elegibilidad o por cuota cerrada.",
    "Parciales debajo del umbral acordado.",
    "Entrevistas invalidadas por auditoría.",
  ],
  cierre:
    "La cotización sale del instrumento y del tamaño de muestra. Se cotiza en una llamada.",
};

export const producto = {
  titulo: "Producto",
  disponible: {
    estado: "Disponible",
    titulo: "Levantamiento telefónico autónomo",
    texto:
      "El agente marca, tamiza, obtiene consentimiento, aplica el cuestionario completo y entrega los datos estructurados con su evidencia.",
  },
  desarrollo: {
    estado: "En desarrollo",
    badge: "Próximamente",
    titulo: "Encuestas por mensajería",
    texto:
      "El mismo instrumento versionado, aplicado por WhatsApp y otros canales de mensaje, para muestras donde el teléfono no es el mejor canal.",
    enlace: "Avísame cuando esté listo",
  },
};

export const paraQuien = {
  titulo: "Para quién es",
  items: [
    "Agencias de investigación de mercado",
    "Casas encuestadoras y estudios de opinión",
    "Áreas de inteligencia de mercado en empresas",
    "Instituciones académicas y organismos públicos",
  ],
};

export const faq = {
  titulo: "Preguntas frecuentes",
  items: [
    {
      q: "¿Se le dice al respondente que está hablando con un agente de IA?",
      a: "Sí. La identificación es explícita al inicio de la llamada, junto con el nombre de la casa encuestadora responsable y el aviso de grabación.",
    },
    {
      q: "¿Esto reemplaza a mi equipo de campo?",
      a: "No en todos los estudios. Cubre el volumen repetitivo y estandarizado; su equipo se concentra en lo que requiere criterio humano.",
    },
    {
      q: "¿Qué pasa con los datos personales?",
      a: "El tratamiento se rige por la legislación mexicana vigente en materia de datos personales, con plazos de conservación declarados por estudio y destrucción documentada. No se hace identificación de hablante ni huella vocal.",
    },
    {
      q: "¿En qué se diferencia de un IVR o de un robocall?",
      a: "Un IVR reproduce un menú y espera dígitos. Encudex sostiene una conversación, entiende respuestas abiertas y aplica lógica de salto, filtros y cuotas.",
    },
    {
      q: "¿Qué tan largo puede ser el cuestionario?",
      a: "El instrumento aplicado se diseña para caber en menos de diez minutos conectados. Si el suyo es más largo, hay trabajo de adaptación metodológica antes del campo.",
    },
    {
      q: "¿Qué idioma y qué acento?",
      a: "Español de México, con una voz sintética propia, la misma en todas las llamadas de un estudio.",
    },
    {
      q: "¿Cómo sé que los datos son buenos?",
      a: "Con el paquete de validación: concordancia contra codificación humana, tasas AAPOR y las mediciones de la sección de evidencia.",
    },
  ],
};

export const contacto = {
  titulo: "Cuéntenos qué necesita levantar",
  intro:
    "Escríbanos el tipo de estudio, el instrumento y el tamaño de muestra que tiene en mente. De ahí sale la cotización.",
  nota: "Le respondemos en menos de 24 horas hábiles.",
  correo: "contacto@encudex.mx",
  tiposOrganizacion: [
    "Agencia de investigación de mercado",
    "Casa encuestadora o estudios de opinión",
    "Área de inteligencia de mercado en empresa",
    "Institución académica",
    "Organismo público",
    "Otra",
  ],
  volumenes: [
    "Menos de 500",
    "500 a 2,000",
    "2,000 a 5,000",
    "Más de 5,000",
    "Aún no lo sé",
  ],
};

export const footer = {
  descripcion:
    "Encudex es el agente de inteligencia artificial que levanta encuestas telefónicas completas con el mismo rigor metodológico que un entrevistador humano, sin desviarse nunca del guion, a una fracción del costo y sin límite de volumen.",
};
