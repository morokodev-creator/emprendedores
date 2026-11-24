export default {
  name: 'maintenancePlanPage',
  title: 'Plan de Mantenimiento',
  type: 'document',
  fields: [
    // --- HERO ---
    {
      name: 'heroTitle',
      title: 'Título del Hero',
      type: 'string',
      initialValue: 'PLAN DE MANTENIMIENTO',
    },
    {
      name: 'heroSubtitle',
      title: 'Subtítulo del Hero',
      type: 'text',
      rows: 2,
      initialValue: 'Mantén tu moto siempre operativa siguiendo el cronograma de revisiones periódicas.',
    },
    {
      name: 'heroBackground',
      title: 'Imagen de Fondo del Hero',
      type: 'image',
      options: { hotspot: true },
    },

    // --- CONTENIDO INTRODUCTORIO ---
    {
      name: 'contentTitle',
      title: 'Título de la Sección',
      type: 'string',
      initialValue: 'Cronograma de Servicios Periódicos',
    },
    {
      name: 'contentDescription',
      title: 'Texto Explicativo',
      type: 'text',
      rows: 4,
      initialValue: 'Para mantener vigente la garantía y asegurar el máximo rendimiento de tu moto, cumple con cada revisión en nuestros talleres autorizados según el tiempo o kilometraje que ocurra primero.',
    },

    // --- CUADRO DE MANTENIMIENTO ---
    {
      name: 'firstYearTitle',
      title: 'Etiqueta Primer Bloque',
      type: 'string',
      initialValue: 'PRIMER AÑO',
    },
    {
      name: 'firstYearServices',
      title: 'Servicios del Primer Año',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'serviceName', title: 'Servicio (ej: 1ero, 2do)', type: 'string' },
            { name: 'months', title: 'Meses después de la compra (ej: 2, 3, 6)', type: 'string' },
            { name: 'mileage', title: 'Rango de kilometraje (ej: 500, 3.000)', type: 'string' },
          ],
          preview: {
            select: { title: 'serviceName', subtitle: 'mileage' },
            prepare({ title, subtitle }) {
              return { title: `Servicio ${title || ''}`, subtitle: `Km: ${subtitle || '-'}` };
            },
          },
        },
      ],
    },
    {
      name: 'yearNTitle',
      title: 'Etiqueta Segundo Bloque',
      type: 'string',
      initialValue: '... AÑO N',
    },
    {
      name: 'yearNServices',
      title: 'Servicios a partir del Año N',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'serviceName', title: 'Servicio (ej: 5to, Nvo)', type: 'string' },
            { name: 'months', title: 'Meses después de la compra', type: 'string' },
            { name: 'mileage', title: 'Rango de kilometraje', type: 'string' },
          ],
          preview: {
            select: { title: 'serviceName', subtitle: 'mileage' },
            prepare({ title, subtitle }) {
              return { title: `Servicio ${title || ''}`, subtitle: `Km: ${subtitle || '-'}` };
            },
          },
        },
      ],
    },

    // --- NOTA AL PIE ---
    {
      name: 'tableFootnote',
      title: 'Nota informativa debajo del cuadro',
      type: 'string',
      initialValue: 'El kilometraje aceptado para la revisión está en un rango de más o menos 500km.',
    },
  ],
  preview: {
    prepare() {
      return { title: '🔧 Página: Plan de Mantenimiento' };
    },
  },
};