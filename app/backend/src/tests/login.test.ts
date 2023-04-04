// import * as sinon from 'sinon';
// import * as chai from 'chai';
// import chaiHttp from "chai-http";
// import { app } from "../app";
// import Teams from "../database/models/Teams";
// import { teamsMock } from "./mock/team.mock";
// import { after, before } from "node:test";
// import { Response } from "superagent";

// chai.use(chaiHttp)
// const { expect } = chai;

// // describe('', () => {
// //     describe('', () => {
// //         it('', async () => {
// //             const httpResponse = await chai.request(app).post('/login'.send({}))
// //             expect(httpResponse.status).to.equal(400)
// //         })
// //     })
// // })
// describe('', () => {
// describe('Seu teste', () => {
   
//     let chaiHttpResponse : Response ;
  
//     before(async () => {
//       sinon
//         .stub(Teams, "findAll")
//         .resolves(
//             teamsMock as any
//          );
//     });
  
//     after(()=>{
//       (Teams.findAll as sinon.SinonStub).restore();
//     })
  
//     it('...', async () => {
//       chaiHttpResponse = await chai
//          .request(app)
//          .get('/teams')
  
//       expect(chaiHttpResponse.status).to.be.equal(200)
//       expect(chaiHttpResponse.body).to.be.equal(teamsMock)

//     });
  
//     describe('Seu teste', () => {
   
//         let chaiHttpResponse : Response ;
      
//         before(async () => {
//           sinon
//             .stub(Teams, "findOne")
//             .resolves(
//                 teamsMock as any
//              );
//         });
      
//         after(()=>{
//           (Teams.findAll as sinon.SinonStub).restore();
//         })
      
//         it('...', async () => {
//           chaiHttpResponse = await chai
//              .request(app)
//              .get('/teams')
      
//           expect(chaiHttpResponse.status).to.be.equal(200)
//           expect(chaiHttpResponse.body).to.be.equal(teamsMock[0])
    
//         });
//     })
  
//   });
//   })