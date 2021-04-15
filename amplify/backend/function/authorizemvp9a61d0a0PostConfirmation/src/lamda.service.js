/* eslint-disable-line */ const aws = require("aws-sdk");

const invoke = async (functionName, payload) => {
  const lambda = new aws.Lambda({ region: process.env.REGION });
  await lambda
    .invoke({
      FunctionName: functionName,
      InvocationType: "Event",
      Payload: JSON.stringify(payload),
    })
    .promise();
};

const addUserToDB = async (user) =>
  invoke("addUserToDb-" + process.env.ENV, { arguments: { user } });

module.exports = {
  addUserToDB,
};
