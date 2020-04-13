if (process.env.NODE_ENV === "production") {
  module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    mongodbUri: process.env.MONGODB_PROD_URI
  };
} else {
  module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    mongodbUri: process.env.MONGODB_DEV_URI
  };
}
