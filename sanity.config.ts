import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { colorInput } from "@sanity/color-input";

export default defineConfig({
  name: 'default',
  title: 'Sanity Shop',

  projectId: 'n34u9jpz',
  dataset: 'production',

  plugins: [colorInput(), deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
