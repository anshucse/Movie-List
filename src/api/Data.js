import { toast } from "react-toastify"

let users = JSON.parse(localStorage.getItem("contacts")) || []



export const addDataHandler = (user) => {
    console.log('data =', user)
   let extEmail = users.find((item) => item.email === user.email)
   let extMobile = users.find((item) => item.mobile === user.mobile)

   if(extEmail) {
    toast.warning("email is already exists")
//    } else if (extMobile) {
//     toast.warning('mobile already registered')
   } else { 
        users.push(user)
        saveData(users)
        // toast.success("User Registered success")
   }
}


const saveData = (data) => {
    localStorage.setItem("contacts", JSON.stringify(users))
}