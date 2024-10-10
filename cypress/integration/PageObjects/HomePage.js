class HomePage
{
    
    homePage_getLogoText()
    {
        return cy.get('div.app_logo',{ timeout: 10000 })
    }

    homePage_getInventoryItemList()
    {
        return cy.get('div.inventory_item',{timeout: 10000})
    }

    homePage_getInventoryItemName()
    {
        return cy.get('div.inventory_item_name',{timeout: 10000})
    }
    //.inventory_item_name
    
}export default HomePage;