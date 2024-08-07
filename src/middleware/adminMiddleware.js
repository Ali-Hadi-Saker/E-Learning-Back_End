export const adminMiddleware = (req, res, next) => {
    try {
        if (req.user && req.user.role === 'admin') {

            next();

        } else {
            console.log(req.user)
            return res.status(403).json({ message: 'Access denied: Admins only.' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Server error: ' + error.message });
    }
};
