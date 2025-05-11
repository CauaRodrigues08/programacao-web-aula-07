module.exports = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] Acesso em: ${req.method} ${req.url}`);
    next();
  };