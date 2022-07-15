// 'use strict';

// const express = require('express');

// // Constants
// const PORT = 80;
// const HOST = '0.0.0.0';

// // App
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello Node.js Sample!\n');
// });

// var port = process.env.PORT||PORT;
// app.listen(port);
// console.log(`Running on http://${HOST}:${PORT}`);


'use strict';

const express = require('express');

// Constants
// const PORT = 80;
const PORT = process.env.PORT || 3000;
// const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Anshuman nahi rey baBaa... Awward anshooman bolne ka tha na');
});

// var port = process.env.PORT||PORT;
app.listen(PORT);
dsf
// console.log(`Running on http://${HOST}:${PORT}`);
console.log(`Running on port : ${PORT}`);
