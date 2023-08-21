module.exports = (fn) => {
  return (req, res, next) => {
    // next will proceed to global middleware error handling
    fn(req, res, next).catch(next);
  };
};
