'use strict';

const BestEndpoint = require('./BestEndpoint.js');

module.exports.endpoint = (event, context, callback) => {
    var bestEndpoint = new BestEndpoint;

    const response = {
        statusCode: 200,
        body: JSON.stringify(bestEndpoint.getCurrentTime(event)),
    };

    callback(null, response);
};
