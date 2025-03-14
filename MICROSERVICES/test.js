const autocannon = require('autocannon');

const run = () => {
    const instance = autocannon({
        url: 'http://localhost:5000',
        connections: 10, // default
        duration: 30 // default
    });

    autocannon.track(instance);

    instance.on('done', () => {
        console.log('All requests completed');
    });
};

run();