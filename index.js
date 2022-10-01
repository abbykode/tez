const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4555;

app.get('/', (req, res) => {
  res.send('home page');
});

app.listen(port, () => {
  console.log(`app is up and running on .+..${port}`);
});
