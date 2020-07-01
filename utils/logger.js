const info = (...params) => {
  console.log(params.join(' '));
};

const error = (...params) => {
  console.error(params.join(' '));
};

module.exports = {
  info,
  error,
};
