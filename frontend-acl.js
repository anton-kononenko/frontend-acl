;(function() {
	'use strict';
	
	function initACL () {
		if ( document.addEventListener ) {
			document.removeEventListener('DOMContentLoaded', initACL, false);
		} else if (document.attachEvent) {
			if (document.readyState === 'complete') {
				document.detachEvent('onreadystatechange', initACL);
			} else {
				return;
			}
		};
		var body = document.documentElement,
			countOfACL = body.getAttribute('data-acl-count'),
			styleEl = document.createElement('style'),
			generalStylesContent = [],
			stylesContent = [];
		
		if (countOfACL) {
			countOfACL = parseInt(countOfACL);
		} else {
			countOfACL = 2;
		}
		
		for (var i = 0; i < countOfACL; ++i) {
			var acl = i + 1;
			
			generalStylesContent.push('[data-acl="' + acl + '"]');
			
			for (var j = 0; j < acl; ++j) {
				stylesContent.push('[data-current-acl="' + acl + '"] [data-acl="' + (j + 1) + '"] {display:block;}');
			}
		}
		
		styleEl.innerHTML = generalStylesContent.join(',') + '{display:none;}\n' + stylesContent.join('\n');
		document.head.appendChild(styleEl);
	}
	
	if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', initACL, false );
	} else if (document.attachEvent) {
		document.attachEvent('onreadystatechange', initACL);
	}
}());