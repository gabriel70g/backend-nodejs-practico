function err(messge, code ) {
  let e = new Error(messge);

  if (code ){
    e.statusCode = code;
  }
  return e;
}

module.exports = err;
