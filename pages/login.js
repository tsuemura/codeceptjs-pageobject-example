/**
 *
 * @param {function(I: CodeceptJS.I)} fn
 */
module.exports = function (fn) {
  const I = actor({
    login: function (email, password) {
      I.fillField('Email', email)
      I.fillField('Password', password)
      I.click('Login', 'form')
    }
  })
  I.amOnPage('login')
  fn(I)
}
