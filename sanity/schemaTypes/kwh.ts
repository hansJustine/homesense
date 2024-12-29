import { defineField, defineType } from "sanity";

//Date Format
// YYYY-MM-DD

export const kwh = defineType({
    name: 'kwh',
    title: 'Kwh',
    type: 'document',
    fields: [
        defineField({
            name: 'kwh',
            type: 'number'
        }),
        defineField({
            name: 'date',
            type: 'date'
        }),
    ]
})