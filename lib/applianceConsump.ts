
export const calculateConsumpPerDay = (powerKw:number|undefined, usageHour:number|undefined, priceKwh:number|undefined) => {
    const power = powerKw || 0
    const usage = usageHour || 0
    const rate = priceKwh || 0
    const totalKwh = power*usage
    const electricityPrice = totalKwh * rate
    return electricityPrice
}

export const calculateConsumpPerMonth = (powerKw:number|undefined, usageHour:number|undefined, priceKwh:number|undefined) => {
    const electricityPricePerDay = calculateConsumpPerDay(powerKw, usageHour, priceKwh)
    const electricityPricePerMonth = electricityPricePerDay * 30.436875
    const rounded = Math.round((electricityPricePerMonth + Number.EPSILON) * 100) / 100
    return rounded
}