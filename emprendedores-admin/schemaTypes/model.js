import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'model',
  title: 'Modelos Dominar',
  type: 'document',
  groups: [
    { name: 'general', title: 'Info General y Hero' },
    { name: 'multimedia', title: 'Colores y Vistas 360°' },
    { name: 'specs', title: 'Especificaciones (Highlights)' },
    { name: 'features', title: 'Características (Hotspots)' },
    { name: 'technical', title: 'Ficha Técnica A Fondo' },
  ],
  fields: [
    // --- GENERAL ---
    defineField({
      name: 'name',
      title: 'Nombre del Modelo',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      group: 'general',
    }),
    defineField({
      name: 'tagline',
      title: 'Frase Hero (Tagline)',
      type: 'string',
      description: 'Ej: Perfecta para cualquier aventura.',
      group: 'general',
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen Hero',
      type: 'image',
      options: { hotspot: true },
      group: 'general',
    }),
    defineField({
      name: 'introText',
      title: 'Texto de Introducción',
      type: 'text',
      description: 'Texto principal debajo del título en la sección introductoria.',
      group: 'general',
    }),

    // --- COLORES Y VISTA 360 INTEGRADAS ---
    defineField({
      name: 'colors',
      title: 'Colores y Vistas 360°',
      description: 'Crea un color y sube su secuencia de imágenes 360° correspondientes.',
      type: 'array',
      group: 'multimedia',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'colorName', title: 'Nombre del Color', type: 'string', description: 'Ej: Rojo Racing' },
            { name: 'hexCode', title: 'Código Hexadecimal', type: 'string', description: 'Ej: #FF0000 para pintar el botón.' },
            { 
              name: 'gallery360', 
              title: 'Secuencia de imágenes 360°', 
              type: 'array', 
              description: 'Selecciona todas las imágenes de la secuencia en tu computadora y arrástralas juntas hasta este espacio.',
              options: { layout: 'grid' },
              of: [{ type: 'image' }] 
            },
          ],
          preview: { select: { title: 'colorName', subtitle: 'hexCode' } }
        },
      ],
    }),
    defineField({
      name: 'detailGallery',
      title: 'Galería de Detalles (Grilla inferior)',
      type: 'array',
      group: 'multimedia',
      options: { layout: 'grid' },
      of: [{ type: 'image' }],
    }),

    // --- HIGHLIGHT SPECS (ACTUALIZADO CON FONDO E ICONOS SVG) ---
    defineField({
      name: 'highlightSpecs',
      title: 'Especificaciones Destacadas',
      type: 'object',
      group: 'specs',
      fields: [
        {
          name: 'backgroundImage',
          title: 'Imagen de Fondo de la Sección',
          type: 'image',
          options: { hotspot: true },
          description: 'Foto de fondo que aparecerá detrás de las tarjetas de especificaciones.'
        },
        {
          name: 'specs',
          title: 'Lista de Especificaciones',
          type: 'array',
          validation: (Rule) => Rule.max(3),
          of: [
            {
              type: 'object',
              fields: [
                { 
                  name: 'icon', 
                  title: 'Icono SVG', 
                  type: 'image',
                  options: {
                    accept: '.svg'
                  },
                  description: 'Sube tu archivo .svg para el icono.'
                },
                { name: 'label', title: 'Etiqueta', type: 'string', description: 'Ej: CILINDRADA' },
                { name: 'value', title: 'Valor', type: 'string', description: 'Ej: 248.77 CC' },
              ],
            },
          ],
        }
      ]
    }),

    // --- HOTSPOTS ---
    defineField({
      name: 'featureHotspots',
      title: 'Características (Hotspots)',
      type: 'object',
      group: 'features',
      fields: [
        { name: 'mainImage', title: 'Imagen Principal', type: 'image' },
        {
          name: 'points',
          title: 'Puntos Interactivos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Título', type: 'string', description: 'Ej: Tubo de escape doble vía' },
                { name: 'description', title: 'Descripción corta', type: 'string' },
                { name: 'xCoord', title: 'Coordenada X (%)', type: 'number' },
                { name: 'yCoord', title: 'Coordenada Y (%)', type: 'number' },
              ],
            },
          ],
        },
      ],
    }),

    // --- ACORDEONES DE FICHA TÉCNICA REFINADOS ---
    defineField({
      name: 'technicalSpecs',
      title: 'Ficha Técnica Completa (Acordeones)',
      description: 'Crea cada categoría (ej. MOTOR) y agrega dentro sus especificaciones.',
      type: 'array',
      group: 'technical',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'category', title: 'Categoría (Título del Acordeón)', type: 'string', description: 'Ej: MOTOR, CHASIS...' },
            {
              name: 'specsList',
              title: 'Detalle de Especificaciones',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'specValue', title: 'Dato en Grande', type: 'string', description: 'Ej: 248.77 cc, monocilíndrico, sistema FI...' },
                    { name: 'specLabel', title: 'Título en Pequeño', type: 'string', description: 'Ej: MOTOR o TRANSMISIÓN' },
                  ],
                },
              ],
            },
          ],
          preview: { select: { title: 'category' } }
        },
      ],
    }),
  ],
})