let ssh_keygen_npm = require('../index.js');
ssh_keygen_npm( "./outs/testKeyGenerated", (err, result) => {
    console.log(err, result)
})