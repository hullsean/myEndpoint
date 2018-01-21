var endpoint = require('./handler').endpoint

describe("Seans endpoint tests", function () {

        it('sean endpoint should work fine', function(done){
            var event={};
            var context={};
            var callback = (ctx, data) => {
                console.log(data);
                done();
            }
            endpoint(event, context, callback)
        })

});

