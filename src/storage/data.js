import { fetchMenu } from "../api/api.js"

export let menuNew = await fetchMenu()
console.log(menuNew)

