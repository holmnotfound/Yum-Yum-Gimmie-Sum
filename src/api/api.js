
export async function fetchMenu() {
    let response = await fetch('https://santosnr6.github.io/Data/yumyumproducts.json')
    let data = await response.json()
    let menu = data
    return menu
}