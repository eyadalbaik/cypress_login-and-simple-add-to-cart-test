describe("THIS IS TO TEST THE LOGIN" , ()=>{
    
    it("FIRST TEST TO THE LOGIN" , ()=>{

     cy.visit("https://www.saucedemo.com/")

     cy.get('[data-test="username"]').type("locked_out_user")
     
     cy.get('[data-test="password"]').type("secret_sauce")
     
     cy.get('[data-test="login-button"]').click()

     })
    })
