import pageobject from "../../support/pageObjects/object";

describe('sign up', function(){
    var pageguru99 = new pageobject()
    it('sign up', function(){
        pageguru99.open()
        pageguru99.buttonsign().click()
        pageguru99.enteremail().type('123@gmail.com')
        pageguru99.buttonsubmit().click()
        pageguru99.gettextusername()
        pageguru99.gettextpassword()
        pageguru99.open()
        pageguru99.enterusername()
        pageguru99.enterpassword()
        pageguru99.buttonlogin().click()                    
        pageguru99.buttonlogout().click()
    })


    
})