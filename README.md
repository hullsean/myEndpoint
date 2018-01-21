# myEndpoint
simple lambda function in node.  We use the serverless framework to
create API endpoint

handler.js

Contains the lambda function itself.  Note that all this function 
does is deal with the AWS event object handling.  For the business logic
it calls out to BestEndpoint object class

BestEndpoint.js 

This defines the BestEndpoint class.  For now we just have a function
getCurrentTime.  We return it as the message part of the event object.
Last we use exports to make this class available elsewhere.

handler.test.js

This provides a node unit test for our handler.js.

Test as follows:
$ mocha handler.js

Look for "passing"

messy_handler

This includes a lambda handler with aws event handling code mixed & 
messed up together with the business logic.  No bueno in lambda.

package .json

This includes the node dependencies.

serverless .yml

This is the serverless template.  It outlines versions, and API 
endpoint definition.  Serverless framework will use this to construct
CloudFormation objects to support your lambda code.  It will package
things up nicely too.


$ serverless deploy
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service .zip file to S3 (3.55 MB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
..............
Serverless: Stack update finished...
Service Information
service: myEndpoint
stage: dev
region: us-east-1
stack: myEndpoint-dev
api keys:
  None
endpoints:
  GET - https://ABCDEFGHIJK.execute-api.us-east-1.amazonaws.com/dev/ping
functions:
  currentTime: myEndpoint-dev-currentTime



$ serverless invoke --function endpoint --log

$ curl https://ABCDEFGHIJK.execute-api.us-east-1.amazonaws.com/dev/ping








