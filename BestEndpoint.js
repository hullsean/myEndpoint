class BestEndpoint{
    getCurrentTime(event){
        return {
            message: `Hello, the current time is ${new Date().toTimeString()}.`,
            input: event,
        }
    }
}

module.exports = BestEndpoint;
