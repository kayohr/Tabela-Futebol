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
describe('login', () => {
   
    let chaiHttpResponse : Response ;
  
    before(async () => {
      sinon
        .stub(Users, "findAll")
        .resolves(
            teamsMock as Teams[]
         );
    });
  
    after(()=>{
      (Users.findAll as sinon.SinonStub).restore();
    })
  
    it('...', async () => {
      chaiHttpResponse = await chai
         .request(app)
         .post('/login')
  
      expect(chaiHttpResponse.status).to.be.equal(200)
      expect(chaiHttpResponse.body).to.deep.equal(teamsMock)

    });
  
    describe('Seu teste', () => {
   
        let chaiHttpResponse : Response ;
      
        before(async () => {
          sinon
            .stub(Users, "findOne")
            .resolves(
                teamsMock as any
             );
        });
      
        after(()=>{
          (Users.findAll as sinon.SinonStub).restore();
        })
        
        // it('...', async () => {
        //     chaiHttpResponse = await chai
        //        .request(app)
        //        .get('/login/role')
          
        //     expect(chaiHttpResponse.status).to.be.equal(200)
        //     expect(chaiHttpResponse.body).to.deep.equal(teamsMock[0])
        //   });
          
        //   it('...', async () => {
        //     chaiHttpResponse = await chai
        //        .request(app)
        //        .get('/login/role')
        //        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoyLCJ1c2VybmFtZSI6IlVzZXIiLCJyb2xlIjoidXNlciIsImVtYWlsIjoidXNlckB1c2VyLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA4JFk4QWJpOGpYdnNYeXFtLnJtcDBCLnVRQkE1cVV6N1Q2R2hsZy9DdlZyL2dMeFlqNVVBWlZPIn0sImlhdCI6MTY4MDYzOTc1OSwiZXhwIjoxNjgzMjMxNzU5fQ.5fC5evs0JphbXtjHNA8L4RZYKgA6xs7mk-AvYFFNX3c')
  
        //     expect(chaiHttpResponse.status).to.be.equal(200)
        //     expect(chaiHttpResponse.body).to.deep.equal(teamsMock)
      
        //   });
        it('...', async () => {
          chaiHttpResponse = await chai
             .request(app)
             .get('/login/role')
             .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoyLCJ1c2VybmFtZSI6IlVzZXIiLCJyb2xlIjoidXNlciIsImVtYWlsIjoidXNlckB1c2VyLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA4JFk4QWJpOGpYdnNYeXFtLnJtcDBCLnVRQkE1cVV6N1Q2R2hsZy9DdlZyL2dMeFlqNVVBWlZPIn0sImlhdCI6MTY4MDYzOTc1OSwiZXhwIjoxNjgzMjMxNzU5fQ.5fC5evs0JphbXtjHNA8L4RZYKgA6xs7mk-AvYFFNX3c')
      
          expect(chaiHttpResponse.status).to.be.equal(401)
          expect(chaiHttpResponse.body).to.deep.equal({ "message": "Token not found" }
          )
    
        });
      
        it('...', async () => {
          chaiHttpResponse = await chai
             .request(app)
             .get('/login/role')
             .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoyLCJ1c2VybmFtZSI6IlVzZXIiLCJyb2xlIjoidXNlciIsImVtYWlsIjoidXNlckB1c2VyLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA4JFk4QWJpOGpYdnNYeXFtLnJtcDBCLnVRQkE1cVV6N1Q2R2hsZy9DdlZyL2dMeFlqNVVBWlZPIn0sImlhdCI6MTY4MDYzOTc1OSwiZXhwIjoxNjgzMjMxNzU5fQ.5fC5evs0JphbXtjHNA8L4RZYKgA6xs7mk-AvYFFNX3c')
      
          expect(chaiHttpResponse.status).to.be.equal(401)
          expect(chaiHttpResponse.body).to.deep.equal({ "message": "Token must be a valid token" })
    
        });
    })
  
  });


});
