const authentication = (req, res, next) => {
    const headers = req.headers;
    // headers verify
    if (!headers.authorization) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    // // token verify
    // const token = headers.authorization.split(' ')[1];
    // if (!token) {
    //     return res.status(401).json({ error: 'Unauthorized' });
    // }
    // const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    next();
};

module.exports = authentication;