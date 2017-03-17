const redis = require('redis');
const client = redis.createClient({
  host: 'redis'
});

module.exports.handler = (event, context, cb) => {

  client.setex('testKey', 1, 'testValue', (err, resp) => {
    if (err) throw err;
    console.log('setex for 1 second', resp);
    client.get('testKey', (err, val) => {
      console.log('retrieved the setex val immediately:', val);
    });

    setTimeout(() => {
      client.get("testKey", (err, val) => {
        console.log('retrieved the setex val 3 seconds later:', val);
      });
      client.quit();
      cb(null, { message: 'Finished!' });
    }, 3000);
  });
}
