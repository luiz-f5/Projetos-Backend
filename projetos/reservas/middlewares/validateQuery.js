module.exports = (req, res, next) => {
    const { page, limit } = req.query;
    if ((page && (!Number.isInteger(+page) || +page <= 0)) ||
        (limit && (!Number.isInteger(+limit) || +limit <= 0))) {
      return res.status(400).json({ error: 'Parâmetros de paginação inválidos' });
    }
    next();
  };  