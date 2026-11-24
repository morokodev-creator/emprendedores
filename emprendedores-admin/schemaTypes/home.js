export default {
  name: 'home',
  title: 'Página de Inicio (Home)',
  type: 'document',
  fields: [
    // --- 1. HERO PRINCIPAL ---
    {
      name: 'heroSection',
      title: 'Sección Principal (Hero)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Título', type: 'string', initialValue: 'Tu mejor aliado para salir adelante' },
        { name: 'description', title: 'Descripción', type: 'text', initialValue: 'Acompañamos tu jornada con motos diseñadas para resistir el trabajo diario, la carga pesada y las rutas de delivery.' },
        { name: 'buttonText', title: 'Texto del Botón', type: 'string', initialValue: 'Ver modelos de trabajo' },
        { name: 'buttonLink', title: 'Enlace del Botón', type: 'string', initialValue: '/modelos' },
        { name: 'heroImage', title: 'Imagen del Banner', type: 'image', options: { hotspot: true } }
      ]
    },

    // --- 2. SECCIÓN: EL ALIADO DE TU NEGOCIO ---
    {
      name: 'aliadoSection',
      title: 'Sección: El Aliado de tu Negocio',
      type: 'object',
      fields: [
        { name: 'title', title: 'Título Principal', type: 'string', initialValue: 'El aliado de tu negocio' },
        { 
          name: 'description', 
          title: 'Descripción', 
          type: 'text',
          initialValue: 'Diseñadas para maximizar tu rentabilidad y resistir el ritmo de la ciudad.'
        },
        { 
          name: 'image', 
          title: 'Imagen de la sección', 
          type: 'image',
          options: { hotspot: true }
        }
      ]
    },

    // --- 3. SECCIÓN: MODELOS DE TRABAJO ---
    {
      name: 'modelsSection',
      title: 'Sección: Modelos de Trabajo',
      type: 'object',
      fields: [
        { name: 'title', title: 'Título de la sección', type: 'string', initialValue: 'Modelos de Trabajo' },
        { name: 'description', title: 'Descripción', type: 'text', initialValue: 'Encuentra la moto perfecta para tus necesidades de carga y transporte.' },
        {
          name: 'featuredModels',
          title: 'Motos Destacadas',
          description: 'Selecciona las motos que aparecerán en el home',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'motorcycle' }] }]
        }
      ]
    },

    // --- 4. BANNER DE CONVERSIÓN (CTA) ---
    {
      name: 'ctaBanner',
      title: 'Banner Final (Únete a los peruanos)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Título', type: 'string', initialValue: 'Únete a los peruanos que mueven la ciudad' },
        { name: 'description', title: 'Descripción', type: 'text', initialValue: 'Da el siguiente paso en tu negocio con el respaldo y garantía que necesitas todos los días.' },
        { name: 'buttonText', title: 'Texto del Botón', type: 'string', initialValue: 'Cotiza tu moto hoy' },
        { name: 'buttonLink', title: 'Enlace del Botón', type: 'string', initialValue: '/contactanos' },
        { name: 'backgroundImage', title: 'Imagen de Fondo', type: 'image', options: { hotspot: true } }
      ]
    }
  ],

  preview: {
    prepare() {
      return {
        title: '🏠 Configuración del Home (Emprendedores)',
      };
    }
  }
};