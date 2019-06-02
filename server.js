const express = require('express'); //załadowanie modułu express
const app = express(); //utworzenie aplikacji express
const serv = require('http').Server(app); //utworzenie serwera WWW
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const register = fs.readFileSync('register.json');
const users = JSON.parse(register);
const router = express.Router();

// serv.listen(2000);
console.log("Server works...")
// console.log(users)
app.use('/', router);
app.use(express.static('home'));
app.listen(process.env.port || 2000);
app.use(bodyParser.json());

/////////////////// Ładowanie Strony /////////////////////

router.get('/', function(req, res){ 
	res.sendFile(path.join(__dirname + '/home/html/index.html'));
});
router.get('/log.html', function(req, res){ 
	res.sendFile(path.join(__dirname + '/home/html/log.html'));
});
router.get('/filmy.html', function(req, res){ 
	res.sendFile(path.join(__dirname + '/home/html/filmy.html'));
});
router.get('/kina.html', function(req, res){ 
	res.sendFile(path.join(__dirname + '/home/html/kina.html'));
});
router.get('/main.js', function(req, res){ 
	res.sendFile(path.join(__dirname + '/home/js/main.js'));
});
router.get('/style.css', function(req, res){ 
	res.sendFile(path.join(__dirname + '/home/css/style.css'));
});
router.get('/kino.json', function(req, res){ 
	res.sendFile(path.join(__dirname + '/json/kino.json'));
});
router.get('/reservation.json', function(req, res){ 
	res.sendFile(path.join(__dirname + '/json/reservation.json'));
});
router.get('/register.json', function(req, res){ 
	res.sendFile(path.join(__dirname + '/json/register.json'));
});


router.post('/login', function (req,res){
	function equal(){
		for(i=0;users.users.length;i++){
			if(req.body.login == users.users[i].username && req.body.password == users.users[i].password){
			var is_equal = true;
			}
		}	
		return is_equal;
	}
	return res.json({is_log : equal})
})