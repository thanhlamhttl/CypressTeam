import pageobject from "../../support/pageObjects/object";

describe('login', function(){
    var pageguru99 = new pageobject()
    it('open page', function(){
        pageguru99.open()
        pageguru99.url().should('include', 'guru99')
        pageguru99.username().type('mngr361155')
        pageguru99.password().type('vuhAjYg')
        pageguru99.buttonlogin().click()
        pageguru99.buttonlogout().click()
        
    })
    
})