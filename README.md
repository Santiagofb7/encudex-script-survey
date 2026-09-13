# Encudex: Encuestas Precisas

Construye el sitio web público de Encudex, una empresa mexicana B2B que levanta encuestas telefónicas con un agente de inteligencia artificial. El sitio es en español de México, va dirigido a agencias de investigación de mercado, casas encuestadoras, áreas de research corporativo e instituciones, y su único objetivo de conversión es agendar una demostración.

Adjunto el logotipo (logo.jpeg) y el isotipo (isotipo.jpeg). Úsalos tal cual, sin redibujarlos ni recolorearlos.

Qué vende Encudex

Tagline principal: El entrevistador que nunca se sale del guion.

Una frase: Encudex levanta encuestas telefónicas completas con un agente de IA que pregunta igual en la entrevista uno que en la cinco mil, sin entrevistador humano y a una fracción del costo.

El diferenciador real no es "tiene IA". Es que el enunciado de cada pregunta solo puede salir de un archivo de audio aprobado antes del campo, al que el sistema accede por identificador. El agente conversa, aclara dudas y responde objeciones con habla generada en vivo, pero no puede pronunciar ni reformular el texto de un reactivo: no es una instrucción que se le da al modelo, es una propiedad de la arquitectura. Eso es lo que un área de metodología no puede objetar de entrada, y es lo que carga el peso de todo el sitio.

Producto secundario, declarado como siguiente paso y no como algo disponible hoy: encuestas por mensajería, con WhatsApp como canal principal.

Estructura del sitio

Una sola página larga (/) con navegación por anclas, más dos páginas secundarias mínimas: /aviso-de-privacidad y /contacto (esta última puede ser solo el formulario con el mismo diseño).

Secciones de la página principal, en este orden:

1. Header fijo. Logo a la izquierda. Enlaces: Cómo funciona · Evidencia · Producto · Preguntas. Botón sólido a la derecha: Agendar demostración. Al hacer scroll, el header gana fondo sólido y una línea inferior de 1px.

2. Hero. Titular grande: El entrevistador que nunca se sale del guion. Debajo, la frase larga como subtítulo. Dos botones: Agendar demostración (sólido) y Cómo funciona (texto con flecha, ancla a la sección 4). A la derecha o debajo, una pieza gráfica construida en código —no una foto de banco de imágenes ni ilustración genérica de robot— que represente el mecanismo: tres carriles horizontales etiquetados REACTIVO, REPERTORIO y CONVERSACIÓN, donde el carril REACTIVO está marcado como archivo fijo con un identificador visible tipo R-014.wav y un candado. Debe leerse como un diagrama técnico sobrio, no como decoración.

3. Tira de posicionamiento. Una línea sobre fondo navy, texto claro, sin números inventados: Investigación telefónica probabilística, aplicada por un agente que no se cansa, no improvisa y deja evidencia de cada decisión.

4. El problema (tres columnas, tono directo, sin dramatismo).

Varianza entre entrevistadores. Dos entrevistadores leen la misma pregunta de dos maneras. Con doscientos, el instrumento que aprobaste no es el que se aplicó.

El costo por completa manda. Cada punto de tasa de contacto se paga en horas de caseta, y la caseta no escala en temporada alta.

Auditar es caro. Verificar que el campo se levantó como se diseñó implica escuchar grabaciones a mano, y casi nadie lo hace a fondo.

5. Cómo funciona. Título: Tres registros de habla, una sola regla dura. Explica con tres tarjetas y un diagrama:

Registro 1 — Reactivos. El enunciado y las opciones de cada pregunta se graban y se aprueban antes de salir a campo. En la llamada solo se reproducen, idénticos, siempre. El sistema los pide por identificador; nunca los redacta.

Registro 2 — Repertorio. Aperturas, transiciones, respuestas a objeciones frecuentes, sondeos y cierres, también pre-grabados y aprobados por escrito.

Registro 3 — Conversación. Lo que nadie anticipó: dudas, aclaraciones, rapport. Aquí el agente sí habla libre, con la misma voz, y con límites verificados en cada turno: no puede leer las opciones antes de tiempo, no puede sugerir qué contestar, no puede agregar información y no puede reformular la pregunta. Si la persona pide que se la repitan, se reproduce el archivo original.

Cierra la sección con una frase destacada: La diferencia entre "le pedimos al modelo que no lo hiciera" y "el modelo no tiene cómo hacerlo" es la diferencia entre que te aprueben el estudio y que no.

6. Evidencia (la sección que le habla al metodólogo). Título: No pedimos que nos crea. Se audita. Lista de seis puntos, con íconos de línea sobrios:

Versión del instrumento por entrevista. Cambiar una coma genera una versión nueva con su propio identificador, y el sistema produce un diff legible entre versiones.

Grabación en dos pistas separadas, agente y respondente, sincronizadas.

Registro de cada decisión de codificación: turno, audio, transcripción, modelo, umbral y si un humano la corrigió.

Telemetría de reproducción. No solo qué archivo se mandó a reproducir, sino cuánto se transmitió de verdad, si se interrumpió, en qué segundo y si se releyó.

Disposiciones AAPOR por intento, no por llamada, que es lo que exige una ficha técnica seria.

Concordancia contra codificador humano reportada por pregunta y por estrato, no solo como promedio global.

7. Lo que ve el cliente. Título: Un panel que se lee durante el campo, no después. Cuatro puntos: avance y proyección de cierre; cuotas en vivo con semáforos; tasas AAPOR calculadas solas; escuchar cualquier grabación con su transcripción sincronizada y descargar los datos en el formato de siempre. Y un quinto, con énfasis: botón de pausa de emergencia del estudio. Acompáñalo de una maqueta de panel hecha en código: tarjetas de métrica, una barra de cuotas por celda con semáforos y una mini gráfica de avance. Datos claramente ficticios y etiquetados como ejemplo.

8. Cómo se cobra. Título: Se cobra por entrevista completada. Explica que la unidad es la misma que el cliente ya usa, que el criterio de "completa" se declara y se aprueba antes del campo, y lista lo que no se cobra: marcaciones que no conectan, buzones, números inválidos, contactos que rechazan antes de consentir, tamizados por no elegibilidad o cuota cerrada, parciales debajo del umbral y entrevistas invalidadas por auditoría. Sin cifras ni tabla de precios. Cierra con: La cotización sale del instrumento y del tamaño de muestra. Se cotiza en una llamada.

9. Producto. Dos tarjetas asimétricas:

Disponible — Levantamiento telefónico autónomo. El agente marca, tamiza, obtiene consentimiento, aplica el cuestionario completo y entrega los datos estructurados con su evidencia.

En desarrollo — Encuestas por mensajería. El mismo instrumento versionado, aplicado por WhatsApp y otros canales de mensaje, para muestras donde el teléfono no es el mejor canal. Marca esta tarjeta visiblemente como Próximamente y agrega un enlace: Avísame cuando esté listo que abre el mismo formulario con el asunto pre-llenado.

10. Para quién es. Cuatro chips o tarjetas chicas: agencias de investigación de mercado · casas encuestadoras y estudios de opinión · áreas de inteligencia de mercado en empresas · instituciones académicas y organismos públicos.

11. Preguntas frecuentes (acordeón).

¿Se le dice al respondente que está hablando con un agente de IA? Sí. La identificación es explícita al inicio de la llamada, junto con el nombre de la casa encuestadora responsable y el aviso de grabación.

¿Esto reemplaza a mi equipo de campo? No en todos los estudios. Cubre el volumen repetitivo y estandarizado; su equipo se concentra en lo que requiere criterio humano.

¿Qué pasa con los datos personales? El tratamiento se rige por la legislación mexicana vigente en materia de datos personales, con plazos de conservación declarados por estudio y destrucción documentada. No se hace identificación de hablante ni huella vocal.

¿En qué se diferencia de un IVR o de un robocall? Un IVR reproduce un menú y espera dígitos. Encudex sostiene una conversación, entiende respuestas abiertas y aplica lógica de salto, filtros y cuotas.

¿Qué tan largo puede ser el cuestionario? El instrumento aplicado se diseña para caber en menos de diez minutos conectados. Si el suyo es más largo, hay trabajo de adaptación metodológica antes del campo.

¿Qué idioma y qué acento? Español de México, con una voz sintética propia, la misma en todas las llamadas de un estudio.

¿Cómo sé que los datos son buenos? Con el paquete de validación: concordancia contra codificación humana, tasas AAPOR y las mediciones de la sección de evidencia.

12. Cierre y formulario. Título: Cuéntenos qué necesita levantar. Formulario con: nombre, empresa, correo corporativo, teléfono, tipo de organización (select), volumen mensual estimado de entrevistas (select con rangos: menos de 500 · 500 a 2,000 · 2,000 a 5,000 · más de 5,000 · aún no lo sé) y mensaje. Validación en cliente, estados de carga y de éxito, mensaje de error legible. Debajo del botón, una línea chica: Le respondemos en menos de 24 horas hábiles.

13. Footer. Isotipo, una línea de descripción, enlaces a las secciones, aviso de privacidad, correo de contacto y aviso de derechos con el año en curso.

Dirección de diseño

El registro visual es institucional y técnico, no startup de IA. Piensa en el sitio de una firma de investigación seria que además sabe de software. Nada de degradados morados, nada de brillos, nada de partículas animadas, nada de ilustraciones de robots o de cerebros.

Paleta, tomada del logotipo: navy profundo #16244C como color dominante de texto y superficies oscuras; verde salvia #8FA9A4 como único acento, usado con moderación; fondo hueso #F4F5F5; blanco puro para tarjetas; grises fríos para texto secundario. Un solo acento, sin colores adicionales.

Tipografía: títulos en Montserrat (SemiBold/Bold, tracking ligeramente cerrado en los tamaños grandes) para amarrar con el logotipo; cuerpo en Inter, 17–18px, interlineado generoso. Jerarquía clara y pocos tamaños.

Composición: mucho aire, ancho de contenido máximo de 1,200px, texto de párrafo máximo de 68 caracteres, secciones separadas por reglas de 1px en gris muy claro en lugar de cambios de color constantes. Alterna fondo hueso y blanco; usa navy sólido solo en dos secciones para dar ritmo.

Detalle: esquinas apenas redondeadas (4–6px), sombras casi imperceptibles o ninguna, bordes finos. Números y etiquetas técnicas en versalitas o en fuente monoespaciada cuando aparezcan identificadores como R-014.wav.

Movimiento: solo aparición suave al entrar en viewport y transiciones de 150–200ms en hover. Nada más.

Responsive de verdad, diseñado para móvil primero; los diagramas deben reflujar a una columna sin romperse.

Accesibilidad: contraste AA como mínimo, foco visible, acordeón y formulario navegables por teclado, alt descriptivo en el logotipo.

Reglas de contenido que no se pueden romper

Esto es lo más importante del encargo. La empresa está en etapa temprana y cualquier afirmación inflada la descalifica frente a un cliente metodológicamente riguroso:

No inventes clientes, logotipos, testimonios ni casos de éxito. Nada de "confían en nosotros" con logos de relleno.

No inventes cifras. Ni porcentajes de ahorro, ni tasas de respuesta, ni "10,000 entrevistas levantadas", ni precios, ni número de empleados, ni año de fundación.

No uses medallas de cumplimiento ni membresías (AMAI, ESOMAR, ISO, certificaciones). No las tenemos.

Nunca escribas "cero generación libre" ni "el agente nunca genera texto". Es falso y es verificable. La formulación correcta es siempre: el agente conversa, pero el enunciado de la pregunta solo sale de un archivo aprobado y no puede reformularse.

Nada de "99% de precisión", "sin errores", "perfecto" ni superlativos absolutos.

Nada de vocabulario de moda: "revolucionario", "disruptivo", "potenciado por IA de última generación". El tono es sobrio, específico y en voz de "usted".

Todo el texto visible en español de México. Sin anglicismos evitables.

Técnico

React con Vite, TypeScript, Tailwind y shadcn/ui.

Componentes separados por sección, en src/components/sections/, con el contenido en un archivo de datos (src/content/site.ts) para poder editar copy sin tocar el markup.

El formulario guarda en Supabase, tabla leads con id, created_at, nombre, empresa, correo, telefono, tipo_organizacion, volumen, mensaje, origen. Habilita RLS con una política que solo permita insert anónimo.

SEO: title = "Encudex — Encuestas telefónicas levantadas por un agente de IA", meta description con la frase larga, Open Graph con el logotipo, lang="es-MX", favicon con el isotipo, y encabezados jerárquicos correctos (un solo h1).

Sin dependencias pesadas de animación. Sin librerías de plantillas de landing.

Empieza generando la página completa con todo el copy en español ya escrito, no con texto de relleno.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/49bc4081-63bf-4096-8efa-8c5399583964).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
