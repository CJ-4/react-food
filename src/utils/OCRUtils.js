import AWS from "aws-sdk";

class OCRUtils {
  static processImage = (image) => {
    AWS.config.update({
      region: "us-east-2",
    });
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      // TODO : cahnge to auth role//
      IdentityPoolId: "us-east-2:6d19f584-3c0a-4e7e-92da-07f5682c3e01",
    });
    var rekognition = new AWS.Rekognition();
    var params = {
      Image: {
        Bytes: image,
      },
    };
    rekognition.detectText(params, function (err, data) {
      if (err) console.log(err, err.stack);
      else console.log("aws returned: ", data);
    });
  };
}

export default OCRUtils;
