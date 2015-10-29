var should = require('should'),
    AddressDetails = require('..');


describe('Address Details', function () {
    describe('#for', function () {
        it('should get the details for a real address', function (done) {
            AddressDetails.for('100 Queen St, Brisbane, Australia', function (err, details) {
                should(err).equal(null);
                
                should(details).have.properties('fullAddress', 'street', 'state', 'postCode', 'country', 'latitude', 'longitude');
                should(details.fullAddress).equal("100 Queen St, Brisbane QLD 4000, Australia");
                should(details.street).equal('100 Queen St');
                should(details.state).equal('QLD');
                should(details.postCode).equal('4000');
                should(details.country).equal('Australia');
                should(Math.ceil(details.latitude * 10000) / 10000).equal(-27.4699); // for any rounding issues with changing coords
                should(Math.floor(details.longitude * 10000) / 10000).equal(153.0248); // for any rounding issues with changing coords
                
                done();
            });
        });
        
        
        it('should have an error on a fake address', function (done) {
            AddressDetails.for('123 Fake St, Somewhere', function (err, details) {
                should(err).not.equal(null);
                done();
            });
        });
    });
});