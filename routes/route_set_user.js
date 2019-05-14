'use strict';

module.exports = function(app) {
    var route = require('.././controllers/set_user');

    app.route('/').get(route.index);

    app.route('/users').get(route.users);

    app.route('/users/:user_id').get(route.findUsers)

    app.route('/users').post(route.createUsers);

    app.route('/users').put(route.updateUsers);

    app.route('/users').delete(route.deleteUsers);
};