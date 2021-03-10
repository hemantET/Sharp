const { verifyJWT } = require('../common/utils')
const UserModel = require("../services/auth/auth.model")

const jwtMiddleWare = async (req, res, next) => {
    try {
    if (req.headers.authorization) {
        let token = req.headers.authorization.split(' ')[1];
        tokenResponse = verifyJWT(token)
        console.log('token',tokenResponse)
       
        if (tokenResponse) {
            req.user = tokenResponse
            next()
        } else {
            res.json({
                code: 403,
                error: "Invalid Token",
                success: false
            })
        }
    } else { 
        res.json({
            code: 403,
            error: "Authorization required",
            success: false
        })
    }
}catch(err){
    res.json({
        code: 403,
        error: err.message,
        success: false
    })
}
}

module.exports = jwtMiddleWare