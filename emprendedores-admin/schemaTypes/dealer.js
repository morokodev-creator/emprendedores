import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'dealer',
  title: 'Distribuidores',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Distribuidor',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'Departamento / Ciudad',
      type: 'string',
      description: 'Ej: Lima, Arequipa, Cusco (Importante para los filtros)',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Dirección Completa',
      type: 'string',
    }),
    defineField({
      name: 'lat',
      title: 'Latitud',
      type: 'number',
      description: 'Ej: -12.046374',
    }),
    defineField({
      name: 'lng',
      title: 'Longitud',
      type: 'number',
      description: 'Ej: -77.042793',
    }),
    // --- CAMBIO APLICADO: De 'phone' a 'email' ---
    defineField({
      name: 'email',
      title: 'Correo Electrónico',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Servicios',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Ventas', value: 'Ventas' },
          { title: 'Repuestos', value: 'Repuestos' },
          { title: 'Servicios', value: 'Servicios' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'city',
    },
  },
})