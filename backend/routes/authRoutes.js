// backend/routes/authRoutes.js
import express from 'express';
import passport from 'passport';

const router = express.Router();

// @desc: Auth with Google
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

// @desc: Google Auth callback
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/failure' }),
  (req, res) => {
    // Successful login
    res.redirect('http://localhost:5173/dashboard'); // Redirect to frontend
  }
);

// @desc: Logout
router.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect('/');
  });
});

// @desc: Failure redirect
router.get('/failure', (req, res) => {
  res.send('Failed to authenticate.');
});

export default router;

// backend/routes/authRoutes.js
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post('/google-token', async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    // Optional: store user in DB

    res.status(200).json({
      name: payload.name,
      email: payload.email,
      picture: payload.picture,
    });
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
});
