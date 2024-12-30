import { type SchemaTypeDefinition } from 'sanity'
import { kwh } from './kwh'
import { appliance } from './appliance'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [kwh, appliance],
}
