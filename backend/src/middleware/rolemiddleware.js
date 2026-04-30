const allowRoles = (...allowed) => {
  return (req, res, next) => {
    if (!req.user || !allowed.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: You don't have access to this resource" });
    }
    next();
  };
};

export default allowRoles;