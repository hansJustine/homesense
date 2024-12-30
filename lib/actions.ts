"use server"

import { writeClient } from "@/sanity/lib/write-client"

export const createKw = async (data: {kwh: number, date: string}) => {
    try{
        const result = await writeClient.create({_type: 'kwh', ...data})
        return result
    } catch (err) {
        console.log('CREATE KW: ', err)
    }
}


export const createAppliance = async (data: {appliance: string|undefined,
    powerKw:number|undefined,
    usageHour:number|undefined,
    priceKwh:number|undefined}) => {
    try{
        const result = await writeClient.create({_type: 'appliance', ...data, color:getRandomColor()})
        return result
    } catch (err) {
        console.log('CREATE KW: ', err)
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }