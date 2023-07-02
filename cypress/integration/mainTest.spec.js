import HomePage from '../pageObjects/homePage';
import SignUpPage from '../pageObjects/signUpPage';
import LoginPage from '../pageObjects/loginPage';
import CartPage from '../pageObjects/cartPage';
import OrderPage from '../pageObjects/orderPage';
import testData from '../fixtures/testData.json';

describe('DemoBlaze', () => {
  const homePage = new HomePage();
  const signUpPage = new SignUpPage();
  const loginPage = new LoginPage();
  const cartPage = new CartPage();
  const orderPage = new OrderPage();

  beforeEach(() => {
    homePage.visitHomePage();
  });

  it('should sign up successfully', () => {
    homePage.clickSignUpLink();
    signUpPage.signUp(testData.username, testData.password);
    signUpPage.verifySignUpSuccess();
  });

  it('should sign up failed', () => {
    homePage.clickSignUpLink();
    signUpPage.signUp(testData.username, testData.password);
    signUpPage.verifySignUpFailed();
  });

  it('should log in and log out', () => {
    homePage.clickLoginLink();
    loginPage.login(testData.username, testData.password);
    loginPage.verifyLoginSuccess();
    loginPage.clickLogoutLink();
    loginPage.verifyLogoutSuccess();
  });

  it('should add item to cart ', () => {
    homePage.clickCartLink();
    homePage.addToCart();
    cartPage.verifyAddCartSuccess();
  });

  it('should place order successfully', () => {
    homePage.clickCartButton();
    cartPage.placeOrder();
    orderPage.fillOrderDetails(testData.name, testData.country, testData.city, testData.creditCard, testData.month, testData.year);
    orderPage.purchaseOrder();
    orderPage.verifyPurchaseSuccess();
  });

  it('should place order failed', () => {
    homePage.clickCartButton();
    cartPage.placeOrder();
    orderPage.fillOrderDetailsFailed();
    orderPage.purchaseOrder();
    orderPage.verifyPutchaseFailed();
  });


});
