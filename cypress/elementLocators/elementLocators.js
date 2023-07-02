export class ElementLocators {
    // Home Page
    signUpLink = '#signin2';
    loginLink = '#login2';
    addToCartButtons = '#cartur';
    cartLink = '#page-wrapper > div > div.col-lg-1 > button';
  
    // Sign Up Page
    signUpUsernameInput = '#sign-username';
    signUpPasswordInput = '#sign-password';
    signUpButton = 'button[onclick="register()"]';
  
    // Login Page
    loginUsernameInput = '#loginusername';
    loginPasswordInput = '#loginpassword';
    loginButton = '#logInModal > div > div > div.modal-footer > button.btn.btn-primary';
    logoutLink = '#logout2';
    verifyLogin ='#nameofuser'
    verifyLogout = '#login2'
    exitbutton = "#logInModal > div > div > div.modal-header > button > span"
  
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
  }
  