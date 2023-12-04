import jwt from 'jsonwebtoken'

const generateToken = (res, userID) => {
    const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
        expiresIn:'7d',
    })

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        masAge: 7 * 24 * 60 * 60
    })
}

export default generateToken