"use server"

import { writeClient } from "@/sanity/lib/write-client"
import { CalendarDate } from "@nextui-org/calendar"

export const createKw = async (data: {kwh: number, date: string}) => {
    try{
        const result = await writeClient.create({_type: 'kwh', ...data})
        return result
    } catch (err) {
        console.log('CREATE KW: ', err)
    }
}