import HomePage from "../PageObjects/HomePage"
const homePage = new HomePage()


Cypress.Commands.add('homePage_validateLogoText', (url, username, password) => 
    {
       
        homePage.homePage_getLogoText().then(($logotext)=>
            {
               var logoTextValue = $logotext.text()
               cy.log(logoTextValue)
               return cy.wrap(logoTextValue)
            }) 
        
        
    })

Cypress.Commands.add('homePage_validateBackPackPrice', (url, username, password) => 
    {
        var priceVal = 0
       
        homePage.homePage_getInventoryItemList().each(($e1,index,$list)=>
            {
               var inventoryName = $e1.find('div.inventory_item_name').text()
               cy.log(inventoryName)
               if(inventoryName.includes('Sauce Labs Backpack'))
               {
                var price = $e1.find('.inventory_item_price').text()
                cy.log(price)
                priceVal = parseFloat(price.replace(/[^0-9.-]+/g, ''))
                cy.log(priceVal)
                

                
               }
            
              
              

            }).then(() => {
                return cy.wrap(priceVal)
            }); 
        
        
    })    

Cypress.Commands.add('homePage_validateInventoryItemsCount', (url, username, password) => 
    {
        var inventoryItems=[]
       
        homePage.homePage_getInventoryItemList().each(($e1,index,$list)=>
            {
                var inventoryname = $e1.find('div.inventory_item_name').text()
               cy.log(inventoryname)
               inventoryItems.push(inventoryname)

            
              
              

            }).then(() => {
                return cy.wrap(inventoryItems.length)
            }); 
        
        
    })        
    