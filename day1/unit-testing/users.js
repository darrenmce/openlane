function createUserLib(resourceLibrary) {
  
  function getUserName(id, cb) {
    resourceLibrary.getUser(id, (err, data) => {
      if (err) return cb(err);
      if (!data.last_name) return cb(new Error('No last name'));
      cb(null, `${data.first_name} ${data.last_name}`);
    });
  }
  return {
    getName: getUserName
  }; 
}

module.exports = createUserLib;
