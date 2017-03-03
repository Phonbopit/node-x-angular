const validateFunc = (decoded, request, callback) => {
  console.log('validateFunc');
  console.log('decoded', decoded);

  return callback('User not found', false);
}

module.exports = {
  validateFunc
}
