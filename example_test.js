Feature('Example');

Scenario('Login', ({ I }) => {
  I.amOnLoginPage((I) => {
    I.login("clark@example.com", "password");
    I.see("Clark Evans")
  })
});
