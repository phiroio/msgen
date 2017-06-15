const { newHandler } = require('./newHandler')


const NEW = 'new'


const command = process.argv[2]

switch (command) {
    case NEW:
        newHandler()
        break
    default:
        break;

}









