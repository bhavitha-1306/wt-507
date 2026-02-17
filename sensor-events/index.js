// Import EventEmitter
const EventEmitter = require('events');
const customEmitter = new EventEmitter();
// Function to simulate async delay
async function simulateAsyncProcess(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 2000); // 2 second delay
    });
}
// Async listener for userLogin
customEmitter.on('userLogin', async (username) => {
    console.log(`User "${username}" is logging in...`);

    // Simulate checking credentials
    await simulateAsyncProcess('Checking user credentials...');

    console.log(`User "${username}" successfully logged in!`);
});
// Async listener for sensorReading
customEmitter.on('sensorReading', async (sensorType, value) => {
    console.log(`Received a reading from ${sensorType}: ${value}`);

    // Simulate processing sensor data
    await simulateAsyncProcess(`Processing ${sensorType} data...`);

    if (sensorType === 'temperature' && value > 30) {
        console.log('Warning: Temperature is too high!');
    } else {
        console.log('Sensor data processed successfully.');
    }
});

// -----------------------------
// Simulated Events
// -----------------------------

// Simulate a user logging in
setTimeout(() => {
    customEmitter.emit('userLogin', 'john_doe');
}, 1000);

// Simulate a temperature sensor reading
setTimeout(() => {
    customEmitter.emit('sensorReading', 'temperature', 35);
}, 3000);

// Simulate a humidity sensor reading
setTimeout(() => {
    customEmitter.emit('sensorReading', 'humidity', 50);
}, 5000);
