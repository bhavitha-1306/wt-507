const EventEmitter = require('events');

const customEmitter = new EventEmitter();

/* Event Listener: userLogin */

customEmitter.on('userLogin', async (username) => {

    console.log(`User "${username}" is logging in...`);

    await simulateAsyncProcess("Checking user credentials...");

    console.log(`User "${username}" successfully logged in!`);

});


/* Event Listener: sensorReading */

customEmitter.on('sensorReading', async (sensorType, value) => {

    console.log(`Received a reading from ${sensorType}: ${value}`);

    await simulateAsyncProcess(`Processing ${sensorType} data...`);

    if (sensorType === 'temperature' && value > 30) {

        console.log("Warning: Temperature is too high!");

    }
    else {

        console.log("Sensor data processed successfully.");

    }

});


/* Function to simulate async process */

async function simulateAsyncProcess(message) {

    return new Promise((resolve) => {

        setTimeout(() => {

            console.log(message);

            resolve();

        }, 2000);

    });

}


/* Simulate events */

setTimeout(() => {

    customEmitter.emit('userLogin', 'john_doe');

}, 1000);


setTimeout(() => {

    customEmitter.emit('sensorReading', 'temperature', 35);

}, 3000);


setTimeout(() => {

    customEmitter.emit('sensorReading', 'humidity', 50);

}, 5000);