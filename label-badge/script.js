'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LabelClab = (function () {
	function LabelClab() {
		_classCallCheck(this, LabelClab);
	}

	_createClass(LabelClab, [{
		key: 'beforeRegister',
		value: function beforeRegister() {
			this.is = 'label-clab';
			this.properties = {
				type: {
					type: String,
					value: ''
				},
				counter: {
					type: Number,
					value: null
				},
				remove: {
					type: Boolean,
					value: false
				},
				badge: {
					type: Boolean,
					value: false
				}
			};
		}
	}, {
		key: '_computeClass',
		value: function _computeClass(badge, type) {
			var str = badge ? 'badge' : 'label';
			return [str, type].join(' ');
		}
	}, {
		key: '_removeClicked',
		value: function _removeClicked() {
			this.fire('remove');
		}
	}]);

	return LabelClab;
})();

Polymer(LabelClab);