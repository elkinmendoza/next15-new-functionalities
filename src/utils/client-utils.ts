import "client-only"

export const ClientSideFunction= ()=>{
    console.log(
        'use window object',
        'use localstorage only client-side specific functions and methods'
    )
    return "client result"
}