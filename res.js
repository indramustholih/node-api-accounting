'use strict';

exports.ok = function(values, res) {
  var data = {
      'status': 200,
      'message': 'Successfully',
      'data': values
  };
  res.json(data);
  res.end();
};