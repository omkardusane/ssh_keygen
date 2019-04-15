let { ssh_keygen, ssh_keygen_promise } = require('../index.js');
ssh_keygen("./outs/key1", (err, result) => {
    console.log("[Normal Result]", err, result)
})
ssh_keygen_promise(__dirname + "./outs/key2").then(result => {
    console.log("[Promisified Result]: ", result)
}).catch(err => console.log("[Promisified Result]: ", err))