class pageobject{
    open(){
        cy.visit("http://www.demo.guru99.com/V4/")
          
    }
    username(){
        return cy.get(':nth-child(1) > :nth-child(2) > input')
    }
    password(){
        return cy.get(':nth-child(2) > :nth-child(2) > input')
    }
    buttonlogin(){
        return cy.get('[type="submit"]')
    }
    buttonlogout(){
        return cy.get('.menusubnav > :nth-child(15) > a')
    }
    buttonsign(){
        return cy.get('ol > :nth-child(1) > a')
    }
    enteremail(){
        return cy.get(':nth-child(5) > :nth-child(2) > input')
    }
    buttonsubmit(){
        return cy.get(':nth-child(6) > :nth-child(2) > input').contains('Submit')
    }
    gettextusername(){
        return  cy.get('tbody > :nth-child(4) > :nth-child(2)').invoke('text').as('usertext')
    }
    gettextpassword(){
        return  cy.get('tbody > :nth-child(5) > :nth-child(2)').invoke('text').as('passwordtext')
    }
    enterusername(){
        
        cy.get('@usertext').then((usertext) =>{
            
            cy.get(':nth-child(1) > :nth-child(2) > input').type(usertext)
        })
    }
    enterpassword(){
        cy.get('@passwordtext').then((passwordtext) =>{
            cy.get(':nth-child(2) > :nth-child(2) > input').type(passwordtext.replace(/\s+/g, ''))
            
        })
    }
    createnewcustomer(customername, gender, dateofbirth, address, city, state, PIN, mobilename, email, pass){
        cy.get('.menusubnav > :nth-child(2) > a').click()
        cy.get(':nth-child(4) > :nth-child(2) > input').type(customername)
        if (gender = 'male'){
            cy.get('[value="m"]').check()
        }
        if (gender = 'female'){
            cy.get('[value="f"]').check()
        }
        cy.get('#dob').type(dateofbirth)
        cy.get('textarea').type(address)
        cy.get(':nth-child(8) > :nth-child(2) > input').type(city)
        cy.get(':nth-child(9) > :nth-child(2) > input').type(state)
        cy.get(':nth-child(10) > :nth-child(2) > input').type(PIN)
        cy.get(':nth-child(11) > :nth-child(2) > input').type(mobilename)
        cy.get(':nth-child(12) > :nth-child(2) > input').type(email)
        cy.get(':nth-child(13) > :nth-child(2) > input').type(pass)
        cy.get('[type="submit"]').click()
        //cy.get('td > a').click()
        //cy.get('tbody > :nth-child(5) > :nth-child(2)').should('have.text', 'john')
        //cy.get('tbody > :nth-child(5) > :nth-child(2)').invoke('text').as('usertext1').should('have.text', 'john')
        cy.get('tbody > :nth-child(5) > :nth-child(2)').invoke('text').as('usertext1').should('have.text', 'john')

    }
    }


export default pageobject
