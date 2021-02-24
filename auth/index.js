const jwt = require('jsonwebtoken');
const config = require('../config');
const secret = config.jwt.secret;



function sign(data) {
  return jwt.sign(data, secret);
}

const check = {
  own: function(req, owner) {
    const decoded = decodeHeader(req);
    console.log('decoded.id',decoded)
    console.log('owner', owner)

    if (decoded.id !== owner) {
      throw new Error('Accion no permitida');
    }

  },
}

function verify(token){
  return jwt.verify(token, secret);

}

function getToken(auth){
  if (!auth){
    throw new Error('No existe el token');
  }

  if (auth.indexOf('Bearer ')=== -1 ){
    throw new Error('Formato invalido');
  }

  let token = auth.replace('Bearer ', '')

  return token;
}


function decodeHeader(req) {
  const authorization  = req.headers.authorization || '';
  const token = getToken(authorization);
  const decode = verify(token);
  console.log('retornando el decode', decode)

  req.user = decode;
  return decode;

}

module.exports = {
  check,
  sign
} 