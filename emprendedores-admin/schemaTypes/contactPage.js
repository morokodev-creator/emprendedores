import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Página de Contáctanos',
  type: 'document',
  fields: [
    // 1. Cabecera (Hero)
    defineField({
      name: 'heroTitle',
      title: 'Título del Banner',
      type: 'string',
      initialValue: 'CONTÁCTANOS',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Subtítulo del Banner',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroBackground',
      title: 'Imagen de Fondo del Banner',
      type: 'image',
      options: { hotspot: true },
    }),

    // 2. Información Central
    defineField({
      name: 'sectionTitle',
      title: 'Título de la Sección',
      type: 'string',
      initialValue: 'ESTAMOS PARA AYUDARTE',
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Descripción de la Sección',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'sideImage',
      title: 'Imagen Vertical (Piloto)',
      type: 'image',
      options: { hotspot: true },
    }),

    // 3. Tarjetas de Contacto
    defineField({
      name: 'contactCards',
      title: 'Tarjetas de Contacto',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Título de la Tarjeta',
              type: 'string',
              description: 'Ej: CALL CENTER / REPUESTOS',
            },
            {
              name: 'details',
              title: 'Detalles (Teléfonos o Dirección)',
              type: 'text',
              rows: 3,
              description: 'Puedes usar saltos de línea para separar la información',
            },
            {
              name: 'icon',
              title: 'Ícono',
              type: 'string',
              options: {
                list: [
                  { title: 'Teléfono (Call Center)', value: 'phone' },
                  { title: 'Celular (Servicio Técnico)', value: 'mobile' },
                  { title: 'Ubicación (Dirección)', value: 'pin' },
                ],
              },
            },
          ],
        },
      ],
    }),
  ],
})