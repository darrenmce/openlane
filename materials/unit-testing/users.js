'use strict';

function createUserUtils(resources) {

  function getUserName(id, callback) {
    resources.getUser(id, (err, user) => {
      if (err) {
        return callback(err);
      }
      callback(null, `${user.first_name} ${user.last_name}`);
    });
  }

  return {
    getUserName
  };

}

module.exports = createUserUtils;