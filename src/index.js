const express = require('express');
const router = require('./routes/userRoutes');
const cors = require('cors')
const app = express();
const port = 4400;

app.use(express.json());
app.use(cors({origin: 'http://localhost:5173',
optionsSuccessStatus: 200
}));
app.use('/users', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});