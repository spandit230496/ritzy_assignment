const jwt = require('jsonwebtoken')
const secret = "secretcode"

const setUserToken = (user)=>{
 return (   
   jwt.sign({
        id:user._id,
        employee_id:user.employee_id
    },secret))
}


module.exports=setUserToken
