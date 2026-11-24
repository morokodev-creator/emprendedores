import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'termsPage',
  title: 'Términos y Condiciones',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título de la Página',
      type: 'string',
      initialValue: 'TÉRMINOS Y CONDICIONES',
    }),
    defineField({
      name: 'content',
      title: 'Contenido Legal',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Ingresa todo el texto. Puedes usar negritas para los subtítulos, crear listas y añadir enlaces.',
    }),
  ],
})