const { expect } = require("chai");

describe("Lambda function API Endpoints Using Cypress", () => {
    let token="";
    
    it('Test Loginaction Request', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/loginaction',
            headers:{
                'username':'bob',
                'password':'P@55w0rd'
            }
          }).then(res => {
            //cy.log(JSON.stringify(res))
            expect(res.status).to.equal(200)
            expect(res.body).has.property('result','G7T0K3N')
            expect(res.body).to.have.property('result', 'G7T0K3N');
            token=res.body.result;
            cy.log("Token "+ res.body.result)
        })
    });
    

    it("Test Sumaction Request", () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/sumaction',
            headers:{
                'token': token
            },
            body:{
                "first": 333,
                "second": 444
            }
          }).should(response => {
           // cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('result', 777);
            cy.log("result "+   response.body.result)
          })
    })  

})