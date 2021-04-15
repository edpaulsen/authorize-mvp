/* eslint-disable-line */
const LambdaService = require("./lamda.service");

exports.handler = async (event, context, callback) => {
  try {
    console.log("event.request.userAttributes", event.request.userAttributes);
    const { sub, email } = event.request.userAttributes;
    const user = {
      id: sub,
      email,
    };
    console.log("adding", user);
    const response = await LambdaService.addUserToDB(user);
    console.log(response);
    callback(null, event);
  } catch (e) {
    callback(e);
  }
};
