import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { codeInput } from '@sanity/code-input' // 1. Import this

export default defineConfig({
  name: 'default',
  title: 'ai-guide',

  projectId: 'hm4t7i73',
  dataset: 'production',

  // 2. Add codeInput() to your plugins array
  plugins: [structureTool(), visionTool(), codeInput()], 

  schema: {
    types: schemaTypes,
  },
})