(function (define) {
define(function () {
	return 42;
});
}(typeof define === 'function' && define.amd
	? define
	: function (factory) { module.exports = factory(); }
));
