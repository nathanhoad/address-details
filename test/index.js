var should = require('should'),
    AddressDetails = require('..');


describe('Address Details', function () {
    describe('#for', function () {
        it('should get the details for a real address', function (done) {
            AddressDetails.for('100 Queen St, Brisbane, Australia', function (err, details) {
                should(err).equal(null);
                
                should(details).have.properties('full_address', 'street', 'state', 'post_code', 'country', 'latitude', 'longitude');
                should(details.full_address).equal("100 Queen St, Brisbane QLD 4000, Australia");
                should(details.street).equal('100 Queen St');
                should(details.state).equal('QLD');
                should(details.post_code).equal('4000');
                should(details.country).equal('Australia');
                should(details.latitude).equal(-27.4699397);
                should(details.longitude).equal(153.0248197);
                
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