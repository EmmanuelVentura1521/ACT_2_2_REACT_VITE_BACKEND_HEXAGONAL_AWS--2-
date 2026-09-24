const bcrypt = require('bcrypt');
const PasswordHasherPort = require('../domain/passwordHasherPort');
class BcryptAdapter extends PasswordHasherPort { async hash(password){ return bcrypt.hash(password,10); } }
module.exports = BcryptAdapter;
