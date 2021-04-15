/* Amplify Params - DO NOT EDIT
	API_AUTHORIZEMVP_GRAPHQLAPIENDPOINTOUTPUT
	API_AUTHORIZEMVP_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const paymentService = require("./services/payment.service");
const orderService = require("./services/order.service");
const uuid = require("uuid");

exports.handler = async (event) => {
  try {
    const { input } = event.arguments; //Fetch the input paramters;
    const { cardInfo, amount, productIds } = input;
    orderService.init();
    await paymentService.processPayment(cardInfo, amount);
    const orderId = uuid.v4();
    await Promise.all([
      orderService.createOrder({
        id: orderId,
        status: "SUCCESS",
        price: amount,
      }),
      orderService.createBulkOrderProducts(orderId, productIds),
    ]);
    return "Payment processed successfully";
  } catch (error) {
    console.log("Error in processing payment", error);
    return "Error in processing payment";
  }
};
