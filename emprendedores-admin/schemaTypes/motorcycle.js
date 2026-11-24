export default {
  name: 'motorcycle',
  title: 'Modelos de Motos',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nombre del Modelo (Ej: BAJAJ CT125)', type: 'string' },
    { name: 'slug', title: 'URL del modelo (Ej: ct-125)', type: 'slug', options: { source: 'name' } },
    { name: 'watermark', title: 'Texto de Marca de Agua (Ej: CT125, BOXER)', type: 'string' },
    { name: 'intro', title: 'Texto Introductorio', type: 'text', rows: 4 },
    { name: 'hero360Images', title: 'Imágenes Visor 360 (Hero)', type: 'array', of: [{ type: 'image' }] },
    {
      name: 'highlights',
      title: 'Lo Más Destacado (Tarjetas Bento)',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Título inicial (Ej: Recorre más, gastando menos:)', type: 'string' },
          { name: 'accentText', title: 'Texto Resaltado en Azul', type: 'string' },
          { name: 'description', title: 'Descripción', type: 'text' },
          { name: 'icon', title: 'Ícono (Recomendado: SVG o PNG sin fondo)', type: 'image' } // <-- NUEVO CAMPO AGREGADO AQUÍ
        ]
      }]
    },
    {
      name: 'colors',
      title: 'Colores Disponibles',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Nombre del Color (Ej: Azul)', type: 'string' },
          { name: 'hex', title: 'Código HEX (Ej: #0047ff)', type: 'string' },
          { name: 'sideImage', title: 'Foto lateral para este color', type: 'image' }
        ]
      }]
    },
    {
      name: 'techSpecs',
      title: 'Especificaciones Técnicas',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Característica', type: 'string' },
          { name: 'value', title: 'Valor', type: 'string' }
        ]
      }]
    }
  ]
}