import { defineQuery } from "next-sanity";

export const GET_KWHS = defineQuery(`*[_type == "kwh"] | order(_createdAt asc) {
  _id,
  kwh,
  date
}`)