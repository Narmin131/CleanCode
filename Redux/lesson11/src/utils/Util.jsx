 export const authUser = ()=>{
    const data = localStorage.getItem('User')
    if(data) return true
    else return false
}
