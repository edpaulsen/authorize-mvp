const AWS = require("aws-sdk");
const uuid = require("uuid");
const ENV = "dev";
const BUCKET_NAME = `authorize-mvp-storage121345-${ENV}`;
const TABLE_NAME = `Products-a5c5efaqpjd7thvulkw73dh5ye-${ENV}`;
const fs = require("fs");

const PRODUCTS = [
  {
    id: uuid.v4(),
    price: 85.0,
    name: `I'm a watch product.`,
    description: `I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.`,
    path: `${__dirname}/images/watch.png`,
  },
  {
    id: uuid.v4(),
    price: 25.0,
    name: `I'm a shirt product.`,
    description: `I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.`,
    path: `${__dirname}/images/shirt.png`,
  },
  {
    id: uuid.v4(),
    price: 10.0,
    name: `I'm a shoes product.`,
    description: `I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.`,
    path: `${__dirname}/images/shoes.png`,
  },
];

AWS.config.update({
  accessKeyId: "AKIASH2CUKGW5SGYOLKF",
  secretAccessKey: "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",
  region: "us-east-2",
});

const DocumentClient = new AWS.DynamoDB.DocumentClient({
  region: "us-east-2",
});
const s3 = new AWS.S3();

const insertDummyProducts = async () => {
  await Promise.all(
    PRODUCTS.map(async (product) => {
      await uploadFile(product.path, product.id);
    })
  );
  await Promise.all(
    PRODUCTS.map(async (product) => {
      delete product.path;
      await uploadDataToDb({
        TableName: TABLE_NAME,
        Item: {
          ...product,
          images: [
            {
              key: `products/${product.id}.png`,
              mimeType: "image/png",
            },
          ],
        },
      });
    })
  );
};

const uploadFile = async (filePath, key) => {
  // Read content from the file
  const fileContent = fs.readFileSync(filePath);
  // Setting up S3 upload parameters
  const params = {
    Bucket: BUCKET_NAME,
    Key: `public/products/${key}.png`, // File name you want to save as in S3
    Body: fileContent,
  };
  // Uploading files to the bucket
  await s3.upload(params).promise();
};

const uploadDataToDb = async (params) => {
  await DocumentClient.put(params).promise();
};

insertDummyProducts().then(() => console.log("DONE"));
