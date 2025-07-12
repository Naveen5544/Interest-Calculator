const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost:27017/interestdb', { useNewUrlParser: true });

const calcSchema = new mongoose.Schema({
  principal: Number, rate: Number,
  startDate: Date, endDate: Date,
  type: String, interest: Number,
  createdAt: Date
});
const Calc = mongoose.model('Calc', calcSchema);

app.use(cors(), express.json());

app.post('/api/calculate', async (req, res) => {
  const { principal, rate, startDate, endDate, type } = req.body;
  const days = (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
  const t = days / 365;
  let interest;
  if (type === 'simple')
    interest = (principal * rate * t) / 100;
  else
    interest = principal * (Math.pow((1 + rate / 100), t) - 1);

  const record = new Calc({ principal, rate, startDate, endDate, type, interest, createdAt: new Date() });
  await record.save();

  res.json({ interest });
});

app.listen(5000, () => console.log('Server running on port 5000'));
