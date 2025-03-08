export const isAdmin = (req, res, next) => {
    if (req.user.role !== "ADMIN") {
        return res.status(403).json({ success: false, message: "Access denied" });
    }
    next();
};
 