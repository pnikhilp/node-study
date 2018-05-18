var chai = require('chai')
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised)
const sinon = require('sinon')
const sinonChai = require('chai-sinon')
chai.use(sinonChai)
var sandBox = sinon.sandbox.create();

const rewire = require('rewire')
const request = require('supertest')

var users = rewire('./users.controller')

describe('Users',()=>{
    afterEach(()=>{
        users = rewire('./users.controller');
        sandBox.restore();
    })
    context('GET /',()=>{

         it('should get /',(done)=>{
             request(users).getUsers('/')
             .expect(200)
             .end((err,response)=>{
                 expect(response.body).to.have.property('name').to.equal('foo')
                 done(err)
             })
         })
    })
})