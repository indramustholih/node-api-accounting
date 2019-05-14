'use strict';

module.exports = function(app) {
    var todoList = require('.././controllers/set_user');

    app.route('/')
        .get(todoList.index);

    app.route('/users')
        .get(todoList.users);
};