const assertRevert = require('./helpers/assertRevert');
const assertInvalidOpCode = require('./helpers/assertInvalidOpcode');
const time = require('./helpers/increaseTime');

const carRent = artifacts.require('carRent');


contract('tmp', function([owner, renter, judge, anotherAccount]) {

    beforeEach(async function() {
        this.contract = await carRent.new({ from: owner });
        console.log(judge);
    });


    describe('test', function() {


        it('testit', async function() {
            console.log('can accept Car ' + await this.contract.canAcceptCar({ from: renter }));
            await this.contract.acceptCar({ from: renter, value: 300000 });

            console.log('can return Car ' + await this.contract.canReturnCar({ from: renter }));
            await this.contract.returnCar({ from: renter });

            console.log('can return Deposit ' + await this.contract.canReturnDeposit({ from: owner }));
            await this.contract.returnDeposit(30, { from: owner });

            console.log('canDisputeDeposit ' + await this.contract.canDisputeDeposit({ from: renter }));
            await this.contract.disputeDeposit({ from: renter });

            console.log('canJudgeDeposit ' + await this.contract.canJudgeDeposit({ from: judge }));
            await this.contract.judgeDeposit(30, { from: judge });


        });



    });

});