import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');
import Teams from "../database/models/Teams";
import { teamsMock } from "./mock/team.mock";

chai.use(chaiHttp)

import { app } from '../app';

import { Response } from 'superagent';
// import Users from '../database/models/Users';
// import { users } from './mock/users.mock';

chai.use(chaiHttp);

const { expect } = chai;

// describe('', () => {
//     describe('', () => {
//         it('', async () => {
//             const httpResponse = await chai.request(app).post('/login'.send({}))
//             expect(httpResponse.status).to.equal(400)
//         })
//     })
// })
describe('', () => {
describe('teams', () => {
   
    let chaiHttpResponse : Response ;
  
    beforeEach(async () => {
      sinon
        .stub(Teams, "findAll")
        .resolves(
            teamsMock as Teams[]
         );
    });
  
    afterEach(()=>{
      (Teams.findAll as sinon.SinonStub).restore();
    })
  
    it('get /teams successful', async () => {
      chaiHttpResponse = await chai
         .request(app)
         .get('/teams')
  
      expect(chaiHttpResponse.status).to.be.equal(200)
      expect(chaiHttpResponse.body).to.deep.equal(teamsMock)

    });
  
    
    
  });
  
  
  
});
describe('Seu teste', () => {

    let chaiHttpResponse : Response ;
  
    beforeEach(async () => {
      sinon
        .stub(Teams, "findOne")
        .resolves(
            teamsMock[1] as any
         );
    });
  
    afterEach(()=>{
      (Teams.findOne as sinon.SinonStub).restore();
    })
  
    // it(' get /teams [0]', async () => {
    //   chaiHttpResponse = await chai
    //      .request(app)
    //      .get('/teams')
  
    //   expect(chaiHttpResponse.status).to.be.equal(200)
    //   expect(chaiHttpResponse.body).to.deep.equal(teamsMock)

    // });
  
  
    it('get teams id', async () => {
      chaiHttpResponse = await chai
         .request(app)
         .get('/teams/:id')
  
      expect(chaiHttpResponse.status).to.be.equal(200)
      expect(chaiHttpResponse.body).to.deep.equal(teamsMock[1])

    });
})