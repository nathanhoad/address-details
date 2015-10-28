# Address Details

Look up the details for a given address.


## Usage

`npm install --save address-details`

```javascript
var AddressDetails = require('address-details');


AddressDetails.for('100 Queen St, Brisbane, Australia', function (err, details) {
    console.log(full_address); // 100 Queen St, Brisbane QLD 4000, Australia
    console.log(street); // 100 Queen St
    console.log(state); // QLD
    console.log(post_code); // 4000
    console.log(country); // Australia
    console.log(latitude); // -27.4699397
    console.log(longitude); // 153.0248197
});
```