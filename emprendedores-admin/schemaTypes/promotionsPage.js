import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'promotionsPage',
  title: 'Página de Promociones',
  type: 'document',
  fields: [
    // 1. Los campos para configurar el título y fondo de arriba (Hero)
    defineField({
      name: 'heroTitle',
      title: 'Título del Banner Principal',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Subtítulo del Banner Principal',
      type: 'string',
    }),
    defineField({
      name: 'heroBackground',
      title: 'Imagen de Fondo del Banner Principal',
      type: 'image',
      options: { hotspot: true },
    }),

    // 2. La lista donde el cliente agregará cada promoción (Título, Banner/Video y PDF)
    defineField({
      name: 'promotionsList',
      title: 'Listado de Promociones',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Título de la Promoción (Ej. PROMOCIÓN 1)',
              type: 'string',
            },
            
            // --- NUEVO: Selector de tipo de multimedia ---
            {
              name: 'mediaType',
              title: 'Tipo de Multimedia',
              type: 'string',
              options: {
                list: [
                  { title: 'Imagen Estática', value: 'image' },
                  { title: 'Video de YouTube', value: 'video' }
                ],
                layout: 'radio',
              },
              initialValue: 'image', // Por defecto será imagen para no romper lo que ya subieron
            },
            
            // --- MODIFICADO: Imagen condicional ---
            {
              name: 'bannerImage',
              title: 'Imagen del Banner',
              type: 'image',
              options: { hotspot: true },
              hidden: ({ parent }) => parent?.mediaType === 'video', // Se oculta si eligen video
            },
            
            // --- NUEVO: Video condicional ---
            {
              name: 'youtubeUrl',
              title: 'Enlace del Video de YouTube',
              type: 'url',
              description: 'Pega el link completo de YouTube (Ej: https://www.youtube.com/watch?v=...)',
              hidden: ({ parent }) => parent?.mediaType !== 'video', // Solo se muestra si eligen video
            },

            {
              name: 'termsPdf',
              title: 'PDF de Términos y Condiciones',
              type: 'file',
              options: { accept: '.pdf' },
            },
          ],
        },
      ],
    }),
  ],
})