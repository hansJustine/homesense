import { defineField, defineType } from "sanity";

//Date Format
// YYYY-MM-DD

export const appliance = defineType({
    name: 'appliance',
    title: 'appliance',
    type: 'document',
    fields: [
        defineField({
            name: 'appliance',
            type: 'string'
        }),
        defineField({
            name: 'powerKw',
            type: 'number'
        }),
        defineField({
            name: 'usageHour',
            type: 'number'
        }),
        defineField({
            name: 'priceKwh',
            type: 'number'
        }),
        defineField({
            name: 'color',
            type: 'string'
        }),
    ]
})