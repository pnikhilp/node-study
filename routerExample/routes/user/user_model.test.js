const chai = require('chai');
const expect = chai.expect;

const User = require('./user_model');

describe('User model',()=>{
    it('should return an error if required fields are missing',(done)=>{
        var user = new User();
        user.validate((err)=>{
            expect(err.errors.username).to.exist;
            expect(err.errors.password).to.exist;
            expect(err.errors.phone).to.not.exist;
            done();
        })
    })
    it('should have optional phone field',(done)=>{
        let user = new User({
            username: 'nikhil',
            password: 'password',
            phone: 12345
        });
        expect(user).to.have.property('phone').to.equal(12345)
        done();
    })
})