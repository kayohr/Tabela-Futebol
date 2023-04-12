
 

import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Users from '../database/models/Users';
import { Response } from 'superagent';
import { users } from '../tests/mock/users.mock'
import { validToken } from '../middlewares/validLogin';

chai.use(chaiHttp);

const { expect } = chai;


  describe.only('', () => {
    let chaiHttpResponse: Response;

    beforeEach(async () => {
      sinon.stub(Users, 'findOne')
        .resolves(users[1] as Users);
    });

    afterEach(() => {
      (Users.findOne as sinon.SinonStub).restore();
    })

  
    it('post login  ', async () => {
      chaiHttpResponse = await chai.request(app)
      .post('/login')
      .send({
        'email': 'admin@admin.co',
        'password': 'secret_admin'
      });
      expect(chaiHttpResponse.status).to.be.equal(401);
      expect(chaiHttpResponse.body).to.deep.equal({ "message": "Invalid email or password" })
    })
   
  })
