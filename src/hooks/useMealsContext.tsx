import { MealsContext } from "@context/MealsProvider"
import { useContext } from "react"

export const useMealsContext = () => {
  return useContext(MealsContext)
}