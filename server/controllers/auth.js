const db = require('../services/database');
const bcrypt = require('bcrypt');

exports.login = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await db
    .select('ENCRYPTED_PASSWORD')
    .from('USERS')
    .where('USERNAME', username);

  if (user[0]) {
    bcrypt.compare(password, user[0].ENCRYPTED_PASSWORD).then(result => {
      res.json({ result });
    });
  } else {
    res.status(422);
    const error = new Error('Unable to login.');
    next(error);
  }
};
