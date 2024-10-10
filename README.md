In this framework,
The application used is https://www.saucedemo.com/.
The framework used is Mocha framework.
Design pattern followed is Page Object Design Model.
It has currently three validations:
  1.validate the logo of the home page
  2.Validate the count of inventory items present in the homepage.
  3.Validate the price of backPack displayed in the homepage i.e 29.99


framework has basically 2 folders:
fixtures: the test data is stored in the form of json
integration: it has 3 sub folders:
1.examples: in this foldwer all the test cases are stored.
2.PageObjects: here all the locators are maintained.
3.PageActions: Here all the custom commands are written corresponding to individual pages.
