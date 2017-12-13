"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(gen);

function gen() {
	var step1, step2;
	return regeneratorRuntime.wrap(function gen$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					console.log("start");
					_context.next = 3;
					return function () {
						console.log('func');return 2;
					};

				case 3:
					step1 = _context.sent;
					_context.next = 6;
					return new Promise(function (resovle, reject) {
						console.log("start resovle");
						resovle('step2 return');
					});

				case 6:
					step2 = _context.sent;

					console.log('-------');

				case 8:
				case "end":
					return _context.stop();
			}
		}
	}, _marked, this);
}
var g = gen();
var s = g.next();
console.log(s.value());
var s2 = g.next();
console.log(s2);
s2.value.then(function (str) {
	console.log(str);
});
var s3 = g.next();
console.log(s3);