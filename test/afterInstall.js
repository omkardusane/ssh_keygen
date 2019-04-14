let s = require('ssh_keygen_npm');
s('./outs/yolo', (error, stdout, stderr) => {
    console.log('[TEST EVAL]', { error, stdout, stderr })
});