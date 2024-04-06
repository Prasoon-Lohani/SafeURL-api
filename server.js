require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect(process.env.MONGO_URI)
  .then((conn) => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
      console.log(
        `Server Running... \nPORT: ${PORT} \nDatabase Connected: ${conn.connection.host}`
      )
    );
  })
  .catch((err) => {
    console.log("Error Starting Server...!", err);
  });
