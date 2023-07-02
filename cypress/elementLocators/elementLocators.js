export class ElementLocators {
    // Home Page
    signUpLink = '#signin2';
    loginLink = '#login2';
    addToCartButtons = '#tbodyid > div.row > div > a';
    cartLink = '#tbodyid > div:nth-child(1) > div > div > h4 > a';
    clickCartButton = '#navbarExample > ul > li:nth-child(4) > a'
  
    // Sign Up Page
    signUpUsernameInput = '#sign-username';
    signUpPasswordInput = '#sign-password';
    signUpButton = 'button[onclick="register()"]';
  
    // Login Page
    loginUsernameInput = '#loginusername';
    loginPasswordInput = '#loginpassword';
    loginButton = '#logInModal > div > div > div.modal-footer > button.btn.btn-primary';
    exitbutton = "#logInModal > div > div > div.modal-header > button > span"
    logoutLink = '#logout2';
    verifyLogin ='#nava'
    verifyLogout = '#login2'
  
    // Cart Page
    placeOrderButton = '#page-wrapper > div > div.col-lg-1 > button';
  
    // Order Page
    orderNameInput = '#name';
    orderCountryInput = '#country';
    orderCityInput = '#city';
    orderCreditCardInput = '#card';
    orderMonthInput = '#month';
    orderYearInput = '#year';
    purchaseButton = '#orderModal > div > div > div.modal-footer > button.btn.btn-primary';
  
    // Alert Box
    alertBoxPurchase = 'body > div.sweet-alert.showSweetAlert.visible';
    alert = 'window:alert';
  }
  