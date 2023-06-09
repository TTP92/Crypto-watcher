const fs = require('fs');
const dotenv = require('dotenv');

const envConfig = dotenv.parse(fs.readFileSync('.env.local'));

module.exports = () => {
    for (const key in envConfig) {
        process.env[key] = envConfig[key];
    }
};
