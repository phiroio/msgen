const prompt = require('prompt');
const fs = require('fs');
const Handlebars = require('Handlebars');
const GIT_IGNORE_HB = "templates/.gitignore.handlebars"
const GIT_IGNORE = ".gitignore"
const BUILD_SBT_HB = "templates/build.sbt.handlebars"
const BUILD_SBT = "build.sbt"
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
        fs.mkdirSync(result.microserviceName)
        const gitIgnoreTemplate = fs.readFileSync(GIT_IGNORE_HB, { encoding: 'utf8' })
        fs.writeFileSync(result.microserviceName + "/" + GIT_IGNORE, Handlebars.compile(gitIgnoreTemplate)({}))
        const buildSbtTemplate = fs.readFileSync(BUILD_SBT_HB, { encoding: 'utf8' })
        fs.writeFileSync(result.microserviceName + "/" + BUILD_SBT, Handlebars.compile(buildSbtTemplate)({
            microserviceName: result.microserviceName,
            domain: result.domain,
        }))
    });
}




exports.newHandler = newHandler