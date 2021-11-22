'use strict';

//TODO: connect github to AWS/S3. Check in github marketplace from possible connect options

// bring in AWS api
let AWS = require('aws-sdk');

// creates new instance of s3 bucket class
let s3 = new AWS.S3();

//TODO: check out util tool from node
  // util.inspect

//TODO: setup lambda handler
exports.handler = async (event, context, callback) => {
console.log('This is the event object in the exports.handler', event); // what is the event?

// research this dependency, runs all functions that are dependent on the return from the function above 
// async.waterfall();

// TODO: let a user upload an image at any size
let params = {"Bucket": 'image-lambda-jp', "Key": 'uuid', "Body": "", "contentType": ""};
// s3.upload(params, function(err, data) {
//   // use params and data?
// });

//TODO: get images.json file
// s3.getObject(); 

//TODO: let a user update (CRUD) a dictionary, like an array of all images

  //TODO: when image is uploaded, download images.json from S3 bucket or create a new array if images.json doesnt exist

  //TODO: return metadata object  with image name, size type etc

  //TODO: append new image to dictionary

  //TODO: upload new image to S3

  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello world!!!')
  }
  return response;
};


