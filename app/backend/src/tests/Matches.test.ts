import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');
import Teams from "../database/models/Teams";
import { teamsMock } from "./mock/team.mock";

chai.use(chaiHttp)

import { app } from '../app';

import { Response } from 'superagent';
import Users from '../database/models/Users';
import { users } from './mock/users.mock';
import Matches from '../database/models/Matches';
import matchers from '@testing-library/jest-dom/matchers';

chai.use(chaiHttp);

const { expect } = chai;

describe('', () => {
describe('matches', () => {
   
    let chaiHttpResponse : Response ;
  
    beforeEach(async () => {
      sinon
        .stub(Matches, "findAll")
        .resolves(
            teamsMock as Teams[]
         );
    });
  
    afterEach(()=>{
      (Matches.findAll as sinon.SinonStub).restore();
    })
  
    it('get /matches successful', async () => {
      chaiHttpResponse = await chai
         .request(app)
         .get('/matches')
  
      expect(chaiHttpResponse.status).to.be.equal(200)
      expect(chaiHttpResponse.body).to.deep.equal(teamsMock)

    });
  
  //   describe('Seu teste', () => {
   
  //       let chaiHttpResponse : Response ;
      
  //       beforeEach(async () => {
  //         sinon
  //           .stub(Matches, "findOne")
  //           .resolves(
  //               teamsMock as any
  //            );
  //       });
      
  //       afterEach(()=>{
  //         (Matches.update as sinon.SinonStub).restore();
  //       })
      
  //       it('patch /matches/:id/finish', async () => {
  //         chaiHttpResponse = await chai
  //            .request(app)
  //            .patch('/matches/:id/finish')
      
  //         expect(chaiHttpResponse.status).to.be.equal(200)
  //         expect(chaiHttpResponse.body).to.deep.equal({ "message": "Finished" })
    
  //       });
      
      
  //       it('error patch /matches/:id', async () => {
  //         chaiHttpResponse = await chai
  //            .request(app)
  //            .patch('/matches/:id')
      
  //         expect(chaiHttpResponse.status).to.be.equal(401)
  //         expect(chaiHttpResponse.body).to.deep.equal({ "message": "Token not found" })
    
  //       });
  //   })
  //   it('error patch /matches/:id', async () => {
  //     chaiHttpResponse = await chai
  //        .request(app)
  //        .patch('/matches/:id')
  
  //     expect(chaiHttpResponse.status).to.be.equal(200)
  //     expect(chaiHttpResponse.body).to.deep.equal({ "message": "Token must be a valid token" })

  //   });
  // })

  //   describe('Seu teste', () => {
   
  //       let chaiHttpResponse : Response ;
      
  //       beforeEach(async () => {
  //         sinon
  //           .stub(Matches, "findOne")
  //           .resolves(
  //               teamsMock as any
  //            );
  //       });
      
  //       afterEach(()=>{
  //         (Matches.create as sinon.SinonStub).restore();
  //       })
      
  //       it('post matches', async () => {
  //         chaiHttpResponse = await chai
  //            .request(app)
  //            .post('/matches')
      
  //         expect(chaiHttpResponse.status).to.be.equal(200)
  //         expect(chaiHttpResponse.body).to.deep.equal(teamsMock)
    
  //       });
  //       // it('...', async () => {
  //       //   chaiHttpResponse = await chai
  //       //      .request(app)
  //       //      .get('/matches/?inProgress=true')
      
  //       //   expect(chaiHttpResponse.status).to.be.equal(201)
  //       //   expect(chaiHttpResponse.body).to.deep.equal(Number)

  //       // });
  //       // it('...', async () => {
  //       //   chaiHttpResponse = await chai
  //       //      .request(app)
  //       //      .get('/matches/?inProgress=false')
      
  //       //   expect(chaiHttpResponse.status).to.be.equal(20)
  //       //   expect(chaiHttpResponse.body).to.deep.equal(Number)

  //       // });
  //   })

})
})

