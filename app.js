const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Yeah, Let\'s do this');
});


app.listen(PORT, () => {
  console.log(`Server is UP && RUNNING @ PORT ${PORT}`);
});
