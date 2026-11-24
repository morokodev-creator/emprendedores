export default {
  name: 'warrantyPolicyPage',
  title: 'Política de Garantías',
  type: 'document',
  fields: [
    // --- HERO ---
    {
      name: 'heroTitle',
      title: 'Título del Hero',
      type: 'string',
      initialValue: 'POLÍTICA DE GARANTÍAS',
    },
    {
      name: 'heroSubtitle',
      title: 'Subtítulo del Hero',
      type: 'text',
      rows: 2,
      initialValue: 'Conoce el respaldo y la cobertura que protege tu herramienta de trabajo todos los días.',
    },
    {
      name: 'heroBackground',
      title: 'Imagen de Fondo del Hero',
      type: 'image',
      options: { hotspot: true },
    },

    // --- FAQs (ACORDEÓN) ---
    {
      name: 'faqSectionTitle',
      title: 'Título de la sección de Preguntas Frecuentes',
      type: 'string',
      initialValue: 'Preguntas Frecuentes',
    },
    {
      name: 'faqs',
      title: 'Lista de Preguntas y Respuestas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Pregunta', type: 'string' },
            { name: 'answer', title: 'Respuesta', type: 'text', rows: 4 },
          ],
          preview: {
            select: { title: 'question' },
          },
        },
      ],
    },

    // --- BANNER DE DESCARGA (PDF) ---
    {
      name: 'downloadBanner',
      title: 'Banner de Descarga (PDF)',
      type: 'object',
      fields: [
        {
          name: 'backgroundImage',
          title: 'Imagen de Fondo',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'text',
          title: 'Texto del Banner',
          type: 'text',
          rows: 3,
          initialValue: 'Descarga el documento completo con todas las condiciones, coberturas y detalles de nuestra política de garantía.',
        },
        {
          name: 'buttonText',
          title: 'Texto del Botón',
          type: 'string',
          initialValue: 'DESCARGAR POLÍTICA DE GARANTÍA (PDF)',
        },
        {
          name: 'pdfFile',
          title: 'Documento PDF',
          type: 'file',
          options: { accept: '.pdf' },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: '🛡️ Página: Política de Garantías' };
    },
  },
};