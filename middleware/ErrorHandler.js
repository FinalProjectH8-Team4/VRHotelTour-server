function ErrorHandler (err, req, res, next) {
    
    let status = 500
    let msg = err.name || 'Internal Server Error'
    
    if(err.name === 'Bad Request'){
        status = 400
        msg = 'Bad Request'
    }
    else if(err.name === 'Not Found' || err.name === 'Error Not Found'){
        status = 404
        msg = 'Error Not Found'
    }
    res.status(status).json({msg})
}

module.exports = ErrorHandler