jQuery(document).ready(function($) {
	demo.init();
});

var demo = {

	init: function() {
		this.validate();
	},

	validate: function() {
		switch (jQuery("#me").val()) {
			case 'demo': {
				this.demo();
				break;
			}
		}
	},

	demo: function() {
		//sdasda
	}

}