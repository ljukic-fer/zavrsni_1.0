/**
 * Required External Modules
 */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const knex = require('knex');
require('dotenv').config();
const { clientOrigins, serverPort } = require("./config/env.dev");

const { messagesRouter } = require("./messages/messages.router");

const {PythonShell} =require('python-shell'); 

/**
 * App Variables
 */

const app = express();
const apiRouter = express.Router();

//Database inclusion
const pool = require("./database");

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());

app.use("/api", apiRouter);

apiRouter.use("/messages", messagesRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

/**
 * Database routing
 */

app.get("/ext_temp", async(req, res) => {  
  try {
    const allTemps = await pool.query("SELECT * FROM ext_temp");
    res.json(allTemps.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/pressure", async(req, res) => {  
  try {
    const allPressures = await pool.query("SELECT * FROM pressure");
    res.json(allPressures.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/int_val", async(req, res) => {  
  try {
    const allTemps = await pool.query("SELECT * FROM int_val");
    res.json(allTemps.rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/temp_reg_sys", async(req, res) => {  
  try {
    const allTemps = await pool.query("SELECT * FROM temp_reg_sys");
    res.json(allTemps.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//Temperature regulation system

app.get("/cool_start", async(req, res) => {  
  try {
    const allTemps = await pool.query("UPDATE temp_reg_sys SET enabled=1 WHERE component='cooling'");
    res.json(allTemps.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/heat_start", async(req, res) => {  
  try {
    const allTemps = await pool.query("UPDATE temp_reg_sys SET enabled=1 WHERE component='heating'");
    res.json(allTemps.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/cool_stop", async(req, res) => {  
  try {
    const allTemps = await pool.query("UPDATE temp_reg_sys SET enabled=0 WHERE component='cooling'");
    res.json(allTemps.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/heat_stop", async(req, res) => {  
  try {
    const allTemps = await pool.query("UPDATE temp_reg_sys SET enabled=0 WHERE component='heating'");
    res.json(allTemps.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/sys_act", async(req, res) => {  
  try {
    const allTemps = await pool.query("UPDATE temp_reg_sys SET enabled=1 WHERE component='system'");
    res.json(allTemps.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/sys_inact", async(req, res) => {  
  try {
    const allTemps = await pool.query("UPDATE temp_reg_sys SET enabled=0 WHERE component='system'");
    res.json(allTemps.rows);
  } catch (err) {
    console.error(err.message);
  }
});


//Web scraping weather data

app.get("/", (req, res) => {
  let options = { 
    mode: 'text', 
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: './src/'
  };
  

  PythonShell.run('WeatherScrape.py', options, function (err, result){ 
        if (err) throw err; 
        // result is an array consisting of messages collected  
        //during execution of script. 
        console.log('result: ', result.toString()); 
        //res.send(result.toString()) 
  });

  PythonShell.run('PressureScrape.py', options, function (err, result){ 
    if (err) throw err; 
    // result is an array consisting of messages collected  
    //during execution of script. 
    console.log('result: ', result.toString()); 
    res.send(result.toString()) 
});
});


/**
 * Server Activation
 */

app.listen(serverPort, () =>
  console.log(`API Server listening on port ${serverPort}`)
);
