const prompt = require('prompt');
const fs = require('fs');
prompt.message = ""
const schema = {
    properties: {
        microserviceName: {
            message: 'Microservice name',
            required: true
        },
        domain: {
            message: 'Domain',
        }
    }
};
const newHandler = () => {
    prompt.start();
    prompt.get(schema, function (err, result) {
        fs.mkdirSync(result.domain)
    });

}
exports.newHandler = newHandler