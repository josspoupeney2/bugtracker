// This is responsible to create the mock server.
const jsonServer = require('json-server');
const Axios = require('axios');
const fs = require('fs');

const {
  generateDemoInfo, getBotRooms, mockInstances, initMockNotifications,
} = require('./mock-file');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Mock delay, for testing loading states. Units are in ms.
const MOCK_DELAY = 3000;

const TMP_FILE = `${__dirname}/db/bugs.json`;
let listOfBugs;


const writeLatestTmp = () => {
  fs.writeFileSync(TMP_FILE, JSON.stringify(listOfBugs));
};

const getLatestTmp = () => {
  if (fs.existsSync(TMP_FILE)) {
    const content = fs.readFileSync(TMP_FILE);
    listOfBugs = (JSON.parse(content));
  } else {
    listOfBugs = [];
  }
};

function send(callback, delay = MOCK_DELAY) {
  if (MOCK_DELAY) {
    setTimeout(callback, delay);
  } else {
    callback();
  }
}

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});


// CRUD OPERATIONS, CREATE, READ, UPDATE, DELETE (bugs)


//Get the list of bugs
server.get('/api/bugs', async (req, res) => {
  send(() => res.json(listOfBugs).status(200).end());
});

//Get a single bug
server.get('/api/bugs/:id', async (req, res) => {
  const index = listOfBugs.findIndex(item => item.id === parseInt(req.params.id));
  send(() => res.json(listOfBugs[index]).status(200).end());
});


// Creates a single bug
server.post('/api/bug',  (req, res) => {
  const bug = req.body;
  bug.id = parseInt((Math.random() * 1000), 10 );
  bug.isDeleted = false;
  listOfBugs.push(bug)
  writeLatestTmp();
  send(() => res.json(bug).status(200).end());
});

// updates a single bug
server.put('/api/bug/:id',  (req, res) => {
  const index = listOfBugs.findIndex(item => item.id.toString() === req.params.id);
  if (index>=0) {
    listOfBugs[index] = req.body;
    writeLatestTmp();
    send(() => res.json(req.body).status(200).end());
  } else {
    send(() => res.sendStatus(500));
  }
});

//deletes a single bug
server.delete('/api/bug/:id',  (req, res) => {
    getLatestTmp();
    const index = listOfBugs.findIndex(item => item.id.toString() === req.params.id);
    if (index>=0) {
      listOfBugs.splice(index, 1);
    }
    writeLatestTmp();
    send(() => res.json(listOfBugs).status(200).end());
});

// Project specific APIs
server.get('/v1/sym/rooms', (req, res) => {
  console.log('Get Bot Rooms!');
  send(() => res.jsonp(getBotRooms()));
});

server.get('/v1/sym/bot-info', (req, res) => {
  send(() => res.jsonp({ username: 'pagerduty_bot' }));
});

server.post('/application/authenticate', (req, res) => {
  res.sendStatus(200);
});

server.post('/application/tokens/validate', (req, res) => {
  res.sendStatus(200);
});

server.post('/application/jwt/validate', (req, res) => {
  res.sendStatus(200);
});

server.listen(3000, () => {
  console.log('JSON Server is running');
});

getLatestTmp();
