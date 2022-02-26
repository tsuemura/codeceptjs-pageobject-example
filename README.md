# CodeceptJS PageObject Example

## Problem

In the CodeceptJS syntax, every user commands are written in English syntax.

```js
I.amOnPage("https://example.com")
I.see("Example Domain")
```

But if I use PageObject, this beautiful syntax will be broken. `LoginPage login` looks invalid syntax in English. Every commands should starts from `I`.

```js
LoginPage.login('foo@example.com', 'password')
```

Also, sometimes E2E test code could be messy. All lines are flatten, with no structure. It forces us to read the code with memorize "where is the command should be executed".

Here's an example of it. Imagine that the target website is E commerce app, and it redirects users to login page if they tried to add item to cart before signing in.

```js

I.click('Add item to cart')

// If a user hasn't be logged in, it redirects to the login form
I.fillField('email', 'foo@example.com')
I.fillField('password', 'Password')
I.click('Login')
```

Without comment, it's hard to imagine that clicking `Add item to cart` redirects to the login form. In other words, this test code just describe the user's behavior, but doesn't describe the application's behavior.

## Solution

In this sample code, I introduce this new style syntax of page object.

```js
// example_test.js
Feature('Example');

Scenario('Login', ({ I }) => {
  I.amOnLoginPage((I) => {
    I.login("clark@example.com", "password");
    I.see("Clark Evans")
  })
});
```

The `amOnLoginPage` is slightly different with the traditional page object pattern. It is defined as a method of `actor` object. Also, it takes callback function like `within` syntax. When `amOnLoginPage` is called, a browser automatically moved to the login page. Also, the callback function can use some special methods of `I` to handle the login page elements.

The syntax help us to understand the current state of website.

## Setup & run

```bash
$ npm install
$ npx codeceptjs run --steps
```
