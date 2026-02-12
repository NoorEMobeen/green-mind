const authentication = (req, res, next) => {
    const headers = req.headers;
    // headers verify
    if (!headers.authorization) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    next();
};

module.exports = authentication;