const os = require('os');

// Function to get the number of CPUs
function getNumberOfCPUs() {
    return os.cpus().length;
}

module.exports = { getNumberOfCPUs };
