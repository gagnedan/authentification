const db = require('../services/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await db
    .select('COMPANIES.NAME', 'USERS.ID', 'USERS.FIRST_NAME', 'USERS.LAST_NAME', 'USERS.ENCRYPTED_PASSWORD')
    .from('USERS').innerJoin('COMPANIES', 'USERS.COMPANY_ID', 'COMPANIES.ID')
    .where('USERS.USERNAME', username);

  if (user[0]) {
    bcrypt.compare(password, user[0].ENCRYPTED_PASSWORD).then(result => {
      if (result) {
        const payload = {
          id: user[0].ID,
          firstname: user[0].FIRST_NAME,
          lastname: user[0].LAST_NAME,
          company: user[0].NAME,
        };
        jwt.sign(payload, process.env.TOKEN_SECRET, {
          expiresIn: '1d'
        }, (err, token) => {

          if (err) {
            res.status(422);
            const error = new Error('Unable to login.');
            next(error);
          } else {
            res.json({
              token
            })
          }

        })
      } else {
        res.status(422);
        const error = new Error('Unable to login.');
        next(error);
      }
    });
  } else {
    res.status(422);
    const error = new Error('Unable to login.');
    next(error);
  }
};

exports.home = (req, res, next) => {
  res.json({
    user: req.user
  })
};