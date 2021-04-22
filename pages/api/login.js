import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { secret } from '../../utils/secret';
import cookie from 'cookie';

export default async function login(req, res) {
  const db = await open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database,
  });

  if (req.method === 'POST') {
    const person = await db.get('select * from person where email = ?', [
      req.body.email,
    ]);

    compare(req.body.password, person.password, function (err, result) {
      if (!err && result) {
        const claims = { sub: person.id, email: person.email };
        const jwt = sign(claims, secret, { expiresIn: '1h' });

        res.setHeader(
          'Set-Cookie',
          cookie.serialize('auth', jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 3600,
            path: '/',
          })
        );
        res.json({ message: 'Welcome to App!!!' });
      } else {
        res.json('Login failed');
      }
    });
  } else {
    res.json({ message: 'we can only support post method' });
  }
}
