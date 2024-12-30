import { defineQuery } from "next-sanity";

export const GET_KWHS = defineQuery(`*[_type == "kwh"] | order(_createdAt asc) {
  _id,
  kwh,
  date
}`)

export const GET_APPLIANCES = defineQuery(`*[_type == "appliance"] {
  _id,
  appliance,
  powerKw,
  usageHour,
  priceKwh,
  color
}`)