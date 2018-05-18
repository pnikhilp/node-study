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

var app = rewire('./app')

describe('app',()=>{
    afterEach(()=>{
        app = rewire('./app');
        sandBox.restore();
    })
    context('GET /',()=>{

         it('should get /',(done)=>{
             request(app).get('/')
             .expect(200)
             .end((err,response)=>{
                 expect(response.body).to.have.property('name').to.equal('foo')
                 done(err)
             })
         })
    })

    context('HandleError',()=>{

        let handleError, statusStub, jsonStub;
        
        beforeEach(()=>{
            jsonStub = sandBox.stub().returns('done');
            statusStub = sandBox.stub().returns({
                json: jsonStub
            })
            res = {
                status: statusStub
            }

             handleError = app.__get__('handleError')
        })
        it('handle error',()=>{

        })
    })
})