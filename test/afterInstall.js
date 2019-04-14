let s = require('ssh_keygen_npm@0.0.1');
s('./outs/yolo', (error, stdout, stderr) => {
    console.log('[TEST EVAL]', { error, stdout, stderr })
});