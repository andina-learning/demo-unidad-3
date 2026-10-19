/* =========================================================
   CURSO · DEMO ANDINA · Gobierno, calidad y protección de datos (Unidad 3)
   ---------------------------------------------------------
   DEMO de la piel de Universidad Andina Virtual: el contenido es la
   Unidad 3 de Scala Learning (instituciones/scala-learning/cursos/unidad-3-con-ilustrador),
   maquetada con la estructura RED de Scala y el ADN gráfico de Andina.
   No es un curso de Andina: sirve para validar la línea gráfica.
   Cliente:   Universidad Andina Virtual (aliada de Scala Learning)
   Insumo:    scala-learning/cursos/unidad-3-con-ilustrador/insumos/DI_Unidad3_comentarios.docx
              (el DI vigente del demo de Scala, 2026-10-08) · Preguntas_unidad.docx
   Audiencia: Profesionales del área de Ingeniería de Sistemas con Mención de
              Ingeniería de Software, en el contexto peruano (la del DI de Scala)
   Duración:  [PENDIENTE · el DI no la declara]
   Preset visual: andina  (ver instituciones/andina/INSTITUCION.md)
   Versión template: hibrida

   Como en Scala (decisión del cliente, 2026-10-08): solo el Tema 1, una sola pregunta de
   evaluación, el PDF y el video como ejemplo. Sin Conclusión ni Glosario (ocultos por defecto,
   2026-10-10). Ver scala-learning/cursos/unidad-3-con-ilustrador/insumos/ERRORES-ORIGEN-2026-10-07.md §E.
   ========================================================= */

module.exports = {

  brand: {
    // Logo negativo (blanco + «Virtual» celeste): el que va sobre el sidebar abismo.
    // En el tema «clara» la skin lo cambia por la versión azul.
    name: '',
    sub:  '',
    logo:       'assets/img/logos/andina-logo-blanco.png',
    logoMobile: 'assets/img/logos/andina-aguila-blanco.png',
  },

  course: {
    code:             'UNIDAD 3',
    name:             'Gobierno, calidad y protección de datos',
    subtitle:         'Datos y Persistencia Avanzada: Diseño, Performance y Gobierno',
    duration:         '',
    iso:              '',
    licencia:         '',
    preset:           'andina',
    pdf:              '',            // sin cuaderno de aprendizaje en insumos/
    portadaFullBleed: true,
  },

  /* MENÚ · la estructura RED (la misma de Scala Learning); el orden ES la numeración:
       - `tipo: 'especial'`  → secciones estructurales (inicio, contenido, introducción,
                               evaluación, referencias). Icono, no número.
       - `tipo: 'tema'`      → contenido temático, numerado 1, 2, 3…
     Las `secciones` con `ancla` aparecen en el menú como sub-ítems y bajan a la
     `.ua-seccion` con ese `id` (único en todo el curso). Títulos literales del DI. */
  menu: [
    { id: 'portada',         titulo: 'Inicio',                                    tipo: 'especial', icon: 'mdi:home-outline' },
    { id: 'temario',         titulo: 'Contenido de la unidad',                    tipo: 'especial', icon: 'mdi:map-outline' },

    { id: 'introduccion',    titulo: 'Introducción',                              tipo: 'especial', icon: 'mdi:information-variant',
      secciones: [ { titulo: '¿Qué va a lograr en esta unidad?', ancla: 'que-va-a-lograr' } ] },

    { id: 'tema1',           titulo: 'Gobierno de datos',                         tipo: 'tema', numero: 1,
      secciones: [ { titulo: 'Gobierno, gestión y administración de datos', ancla: 'gobierno-gestion' },
                   { titulo: 'Roles, políticas, responsabilidades y ciclo de vida del dato', ancla: 'roles-politicas' } ] },

    /* Conclusión y Glosario: ocultos por defecto (decisión del 2026-10-10, la de la Unidad 3 de
       Scala). El DI de este demo no los trae: la conclusión es una sección aparte del curso y el
       glosario va en el LMS. Para mostrarlos, crea su pantalla en contenido/ y quita el //. */
    // { id: 'conclusion',      titulo: 'Conclusión',                                tipo: 'especial', icon: 'mdi:flag-outline' },
    { id: 'evaluacion',      titulo: 'Evaluación de la unidad',                   tipo: 'especial', icon: 'mdi:clipboard-check-outline', nota: '1 pregunta' },
    // { id: 'glosario',        titulo: 'Glosario',                                  tipo: 'especial', icon: 'mdi:book-open-variant-outline' },
    { id: 'referencias',     titulo: 'Referencias',                               tipo: 'especial', icon: 'mdi:bookmark-outline' },
    { id: 'creditos',        titulo: 'Créditos',                                  tipo: 'especial', icon: 'mdi:account-group-outline' },
  ],

  /* REFERENCIAS · APA literal del DI §Referencias. Estilo de la línea (INSTITUCION §3.2): autor y
     año sin negrilla, título de la obra en cursiva, URL en texto sin hipervínculo. */
  referencias: [
    'Apache Software Foundation. (s. f.). Apache Atlas documentation.',
    'DAMA International. (2024). The DAMA-DMBOK 2.0 revised edition: Data management body of knowledge. Technics Publications.',
    'LexLatin. (2026, 10 de junio). Perú reforma su régimen de protección de datos personales: qué cambia para las empresas en 2026.',
    'National Institute of Standards and Technology. (2020). NIST Privacy Framework: A tool for improving privacy through enterprise risk management, Version 1.0. U.S. Department of Commerce.',
    'National Institute of Standards and Technology. (2025). NIST Privacy Framework 1.1 (Initial Public Draft, CSWP 40).',
    'OpenLineage Community. (s. f.). OpenLineage documentation.',
    'OpenMetadata. (s. f.). Data lineage. OpenMetadata Documentation.',
    'Perú. Congreso de la República. (2011, 3 de julio). Ley N.º 29733, Ley de Protección de Datos Personales. Diario Oficial El Peruano.',
    'Perú. Ministerio de Justicia y Derechos Humanos. (2024, 30 de noviembre). Decreto Supremo N.º 016-2024-JUS: Reglamento de la Ley N.º 29733, Ley de Protección de Datos Personales. Diario Oficial El Peruano.',
    'PostgreSQL Global Development Group. (2026). Row security policies. PostgreSQL 18 Documentation.',
  ],

  creditos: {
    institucion: 'Universidad Andina Virtual · Escuela de Posgrado',
  },
};
