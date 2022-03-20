module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '744ce9aa92689fdc46147a75ccfd5b12'),
  },
});
