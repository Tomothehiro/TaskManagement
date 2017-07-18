var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return `mongodb://${configValues.uname}:${configValues.pwd}@ds161262.mlab.com:61262/taskmanagement`;
    }
}