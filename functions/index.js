const functions = require('firebase-functions');
var nodemailer = require('nodemailer');



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });





// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.

// The Firebase Admin SDK to access the Firebase Realtime Database. 



var admin = require("firebase-admin");

//var serviceAccount = require("/serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert({


  "project_id": "shout-my-ad",
  "private_key_id": "a04684c1f618dc383ebd0f9d9cd127b65512881c",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQCsdk9wGy9TKw8v\nTrAHXUHJWoZBIqHYnnIEZoNyP5PkZL8nBApJU5Dlufgm7MADLLL38h6626rjca3A\nQpCe2uCvki0Xt4+EfFpUKjhDOQH3GBis5H2p/elFG+jYsu8UuERvFQOcqxZzC04V\nkHYDdYPfEvk7Ik6jEogWVLX6Is/tc4uSWk6uY0zC0pN3LQogbbKs7SR9QZyTtthR\nMABHgD4ElGNxOB6QMj+mNlW3DNIZkOiUGof2lcwa0Z9+mqQI69stn+fNsiDZOOjY\n8WHZU2g2h+N+ruyccZafv14iPlh5K/+ojmwt9UHOyeJccLCBAa4OxwchIDMQYQh7\n5t9cADFPAgMBAAECggEAHAoQ6JyliUORxfK+ADcuIs24Jdnlb2x0rs4jUTgQqaGk\nScnIibBvo/H5lwvckgeP7MEC3wV87LAG/EsLlqWRFz/QW1qe7P7cyXH4e3Fxe4TW\n6jEsqdkxi74PEZWnSk/v4bw3E0nmWKZTYoJ+CsTt6kmm7MbV+yxgT3p5VbrtjGDS\nwJmUZTlLmG7W4xZDHxJYLrVviF9SE5ycnlaex/wEY/VXCJASUIYuS/KtpFPlx0QR\nAr650YD94M5DGZ8FFXGYgfJ9Oid1zFK+IYtUEZXR4NXqTmAKFhy5JO0d+uB5DdsR\nRzVRR3cC0sAYpiYK3jlSkqfGAlod/7PtwC79khJoSQKBgQDkZO+UibvvSgT9hESZ\nV1Tv7GNfGgfvhwT0aaz62+xDK3niPcQ51aBASLVyeLqBi6PgYg0jsfLD9m4gxiLN\nP/xaAz3GAVMDwGfoVHtgXNc9bZzIVggEFZdlLD0tqpJx0Ah5/ld8rBkPhjF0ck7w\npeld5UeiOjMfEoVSFRprRd8S2QKBgQDBTrNo2zO2eGmGs8KjiUbYJl+FCvc1pHlY\nALF24Uov9DL/0eCCb7/vcvF0cqYlgQosPCItMwCcjQ7hzV0gEqJ8l3LxJHZGmVBg\nXrBwJtLHAnD8rdC0z7YgzTodJpnpSaMKV2EFcKy11tGV3Bmg1wrCZ+Jz96ADvANU\nDYZMuwL8ZwKBgE+O7XnThLi1EwnwgijcKAUvVeox2iPQ56PwD8aOxz0arullVK5E\nwP7DlRkb/vPTXbFy1lrhyMwEUpZuDn9q04/TYzhPC8jZxBhFHXkSvhNy1FNgzIgH\nsWYXw/PdYAfvTJSaSYVvOYeT2jRTATaIxMLldE+JcHdZb0GJglttymf5AoGBAKKT\nXBRd9toJ30ZovNPpSmnTrBYqqMq2r08yFg7TXx+Bk7rPerB458WsuCGlotJ7+mBF\nmsDE2kjP4apKm32z7nA2t3bToZ2yp4TFXkKUhETXass4LAVFg/mGYM/PfTZUtgim\ngHSg1MCCEPami+9XrDbgQ/YgVrWNVIdGcKLrzZEVAn9WEdojGza542XVNPFjVEvq\nTUnlvcSGIDTkCMagHSW0hdmZPXt+Mwef3co1o9Upt7i8tPTGleG6u3I2Ml1JGKqK\nKHP4vnWAtQUWUJQvAM7LEKA9TcKU20gTS8FXF6TqM9mb38FDiTLXTQMnH8liNLtP\nP826z78S91amRts46hT/\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-ulnxf@shout-my-ad.iam.gserviceaccount.com",
  
  }),
  databaseURL: "https://shout-my-ad.firebaseio.com"
});



exports.addData=functions.https.onRequest((req,res)=>{




res.send("ADD data called");

});


exports.storeInfo = functions.https.onRequest(
  (req, res) => {
  
  
  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shoutmyad@gmail.com',
    pass: 'Work@123'
  }
});

  
    // Grab the text parameter.
  
 
    //var data=  req.query;
    var formdata=req.body;



    
    console.log(formdata);
   //console.log( admin.database().ref('/userInfo'));  
    
   var d=admin.database().ref('/userInfo').push();
   console.log(d.key); 
   console.log('/userInfo/'+d.key);

   admin.database().ref('/userInfo/'+d.key).set(formdata,
    (e)=>{

    if(e){
    console.log(e);
          res.send("<h1>Firebase Cloud Demo</h1><p>Failed to save Info..</p>")
  
    }else{

var mailOptions = {
  from: 'ShoutMyAd@gmail.com',
  to: req.body.email,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  //  res.send("Failed to send Mail" + JSON.stringify(error));

  } else {
    console.log('Email sent: ' + info.response);
//    res.send('Email sent: ' + info.response);
  }
});


          res.send("<h1>Firebase Cloud Demo</h1><p>Info has been stored successfully</p>")

    }
  }

  );














  //res.send(data);
});








// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.sendMail = functions.https.onRequest((req, res) => {
  // Grab the text parameter.
  
 
    var data=  req.query.to;
    
    console.log("Sending mail to :"+data);

   


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shoutmyad@gmail.com',
    pass: 'Work@123'
  }
});

var mailOptions = {
  from: 'ShoutMyAd@gmail.com',
  to: req.query.to,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    res.send("Failed to send Mail" + JSON.stringify(error));

  } else {
    console.log('Email sent: ' + info.response);
    res.send('Email sent: ' + info.response);
  }
});


    ///

    
    
});