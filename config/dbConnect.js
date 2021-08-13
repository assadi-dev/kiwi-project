const mongoose = require("mongoose");

const password = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://kiwiDB:${password}@cluster0-acerom.ypzqx.mongodb.net/kiwi-project`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB ", err));
