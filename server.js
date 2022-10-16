const express = require('express');
const inputCheck = require('./utils/inputCheck');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

// Add after Express middleware
app.use('/api', apiRoutes);


// Not Found response for unmatched routes. Default response for any other request.
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});



/* In line 4: Remember that you don't have to specify index.js 
in the path (e.g., ./routes/apiRoutes/index.js). If the directory 
has an index.js file in it, Node.js will automatically look for 
it when requiring the directory. */