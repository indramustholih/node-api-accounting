'use strict';

var response = require('../res');
var connection = require('.././database/conn');

exports.users = function(req, res) {
    connection.query('SELECT * FROM set_user', function (error, rows, fields){
        if(error){
            console.log(error);
        } else{
            response.ok(rows, res);
        }
    });
};

exports.findUsers = function(req, res){
	var user_id = req.params.user_id;
	connection.query('select * from set_user where set_userid  = ?',
		[user_id],
		function(error, rows, fields){
			if(error){
				console.log(error);
			}else{
				response.ok(rows,res);
			}
		});
};

exports.createUsers = function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	console.log(username);

	connection.query('insert into set_user (username, password, firstname, lastname) values (?,?,?,?)',
		[username, password, firstname, lastname],
		function (error, rows, fields){
			if(error){
				console.log(error);
			}else{
				response.ok('Berhasil menambahkan user! ', res)
			}
		});
};

exports.updateUsers = function(req, res){
	var userid = req.body.userid;
	var username = req.body.username;
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;

	connection.query(' update set_user set username = ? ,firstname=?, lastname = ? where set_userid = ?',
		[username, firstname, lastname, userid],
		function(error, rows, fields){
			if(error){
				console.log(error);
			}else{
				response.ok('Berhasil merubah user', res);
			}
		})
};

exports.deleteUsers = function(req, res){
	var userid = req.body.userid;
	connection.query('delete from set_user  where set_userid = ?',
		[userid],
		function(error, rows, fields){
			if(error){
				console.log(error)
			}else{
				response.ok('Berhasil menghapus user !',res)
			}
		});
};


exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};