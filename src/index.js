const express = require('express');
const router = require('./routes/userRoutes');
const app = express();
const port = 4400;

app.use(express.json());
app.use('/users', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});