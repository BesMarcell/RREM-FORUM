var messages = require('../controllers/messages.server.controller');

var bodyparser = require('body-parser');

module.exports = function(router) {
  router.use(bodyparser.json());

router.route('/messages')
      .get(messages.list);

router.route('/newmessage')
      .post(messages.create);
      
}
