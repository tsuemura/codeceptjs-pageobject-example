const loginPage = require('./pages/login')

module.exports = function() {
  return actor({
    amOnLoginPage: loginPage
  });
}
