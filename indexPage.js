var statModule = require('./public/js/statModule.js');
module.exports = (function () {
	var getPage = function () {
		return '<html>' + getPageHead() + '<body>' + getPageHeader() + getPageNav() + getMain() + '</body></html>';
	}

	var getPageHead = function () {
		return '<head><title>Статистика по студентах</title>' + 
		'<meta charset="UTF-8">' + 
		'<meta http-equiv="X-UA-Compatible" content="IE=edge">' + 
    	'<meta name="viewport" content="width=device-width, initial-scale=1">' + 
		'<link href="css/bootstrap.css" rel="stylesheet">' +
		'<link href="css/bootstrap-theme.css" rel="stylesheet">' + 
		'<link href="css/style.css" rel="stylesheet">' + 
		'<script src="js/statModule.js"></script>' +
		'<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>' +
		'</head>';
	};
	var getPageHeader = function () {
		return '<header><div class="container"><h1><a href="/">Дані по навчанню студентів трьох груп
		 Національного Університету</a></h1></div></header>';
	};
	var getPageNav = function () {
		return '<nav>' +
		'<div class="container searchByName">' + 
				'<div class="form-group">' + 
					'<label>Пошук по імені</label>' + 
					'<input type="text" name="" id="name">' + 
					'<button type="submit" onclick="statModule.displayStudent()">Пошук</button>' + 
				'</div>' + 
		'<div class="container searchByGroup">' + 
				'<div class="form-group">' + 
					'<label>Пошук по групі</label>' + 
					'<input type="text" name="" id="group">' + 
					'<button type="submit" onclick="statModule.displayGroupt()">Пошук</button>' + 
				'</div>' + 
			'</nav>'
	};
	var getMain = function () {
		return '<main>' + 
					'<div class="container">' + 
						'<div class="row">' + 
							'<div id="ResultDisplay"></div>' + 
						'</div>' + 
					'</div>' + 
				'</main>'
	}

	return {
		getPage: getPage
	};

})();