let s = require('../index.js');
s('./outs/testKeyGenerated', (error, stdout, stderr) => {
    console.log({ error, stdout, stderr })
});