import pageobject from "../../support/pageObjects/object";

describe('login', function(){
    var pageguru99 = new pageobject()
    it('open page', function(){
        pageguru99.open()
        pageguru99.username().type('mngr361155')
        pageguru99.password().type('vuhAjYg')
        pageguru99.buttonlogin().click()
        pageguru99.createnewcustomer('john', 'female', '2021-12-20', 'alo', 'alo', 'alo', '123456', '1932231474', '1854123@gmail.com', '1234')
        
    })
    
})