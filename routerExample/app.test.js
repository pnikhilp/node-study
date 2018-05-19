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

var auth = require('./auth');
var users_controller = require('./routes/user/users.controller')
var app = rewire('./app')

describe('app',()=>{
    afterEach(()=>{
        app = rewire('./app');
        sandBox.restore();
    })
    context('GET /',()=>{

        it('respond with json', function(done) {
            request(app)
              .get('/users')
              .set('Accept', 'application/json')
              .expect('Content-Type', /json/)
              .end((err,response)=>{
                  expect(response.body).to.have.property('name').to.equal('foo')
                  done(err)
              })
            //  .expect(200, done);
          });
        //  it('should get /',(done)=>{
        //      request(app).get('/user_details')
        //      .expect(200)
        //      .end((err,response)=>{
        //          console.log(response.body)
        //          expect(response.body).to.have.property('name').to.equal('foo')
        //          done(err)
        //      })
        //  })
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

    context('POST /',()=>{
        // it('responds with json', (done)=> {
        //     request(app)
        //       .post('/users/add_user')
        //       .send({name: 'ggg',email:'Hggg@nj.com',phone:7847584341})
        //       .set('Accept', 'application/json')
        //       .expect(200)
        //       .end(function(err, res) {
        //         if (err) return done(err);
        //         done();
        //       });
        //   });
    })

    context('DELETE /:id',()=>{
        it('should call users delete',(done)=>{
            request(app)
            .del('/users/delete/5affe10af730031ca9f468bd')
            .expect(200)
            .end((error,response)=>{
                if(error){
                   return done(error)
                }
                done()
            })
          })
        // let authStub, deleteStub;
         
        // beforeEach(()=>{
        //    fakeAuth = (req,res,next) =>{
        //        return next();
        //    }
        //    authStub = sandBox.stub(auth,'isAuthorised').callsFake(fakeAuth);
        //    app = rewire('./app');
        // })
        // it('should call users delete',(done)=>{
        //     deleteStub = sandBox.stub(users_controller,'deleteUser').resolves('fake_delete');
         
        //    request(app)
        //    .post('/users/delete/123')
        //    .expect(200)
        //    .end((error,response)=>{
        //        expect(authStub).to.have.been.calledOnce;
        //        expect(deleteStub).to.have.been.calledWithMatch(123)
        //        expect(response.body).to.equal('fake_delete')
        //        done(error);
        //    })
       
    })
})