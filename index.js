const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4555;

app.listen(port, () => {
  console.log(`app up and running on ${port}`);
});
