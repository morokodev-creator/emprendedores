import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// 1. Importamos el componente de carga masiva que creaste
import { CsvUploader } from './components/CsvUploader' 

export default defineConfig({
  name: 'default',
  title: 'Emprendedores',

  projectId: 'pm3rccbq',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  
  // 2. Agregamos la pestaña personalizada al menú superior
  tools: (prev) => {
    return [
      ...prev,
      {
        name: 'import-distribuidores',
        title: 'Carga Masiva', // Este será el botón que verá el cliente
        component: CsvUploader,
      },
    ]
  },
})