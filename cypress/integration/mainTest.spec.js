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

  it('should sign up', () => {
    homePage.clickSignUpLink();
    signUpPage.signUp(testData.username, testData.password);
    //signUpPage.verifySignUpSuccess();
  });

  it('should log in and log out', () => {
    homePage.clickLoginLink();
    loginPage.login(testData.username, testData.password);
    loginPage.verifyLoginSuccess(testData.username);
    loginPage.clickLogoutLink();
    loginPage.verifyLogoutSuccess();
  });

  it('should add item to cart and place order', () => {
    homePage.addToCart();
    //homePage.clickCartLink();
    cartPage.placeOrder();
    orderPage.fillOrderDetails(testData.name, testData.country, testData.city, testData.creditCard, testData.month, testData.year);
    orderPage.purchaseOrder();
    orderPage.verifyPurchaseSuccess();
  });
});
