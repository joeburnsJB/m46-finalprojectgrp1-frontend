export const writeCookie = (key, value, days) => {
    //key = name
    //value = jwt token
    //days = when the cookie ill expire

    let date = new Date ()
    days = days || 365
    date.setDate(date.getDate() + days)

    let cookie = document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/"

    return cookie
}
//retrieving the saved cookie
export const getCookie = (cookieName) => {
    //the pattern we want to find in our cookie
    //find the cookie with name we pass to the function
    const re = new RegExp(`(?<=${cookieName}=)[^;]*`)
    console.log("regular expression")
    console.log(re)
    try{
        let cookie = document.cookie.match(re)[0] //will raise a type error if the cookie isn't found
        return cookie
    }catch {
        console.log("cookie not found")
        return false
    }
}

//deleting a cookie
export const deleteCookie = (cookieName) => {
    writeCookie (cookieName, "", -1);
}