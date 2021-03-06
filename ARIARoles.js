var ARIARoles = Tool.extend({
	
	name: "ARIA Roles",
	
	CSSString: ".aria-role-highlight{background:#cfc;outline: 3px #0f0 solid;border: 3px #0f0 solid;clear:both;} p.aria-role-highlight-note{background:#9f9;font-weight:bold;margin:0;padding:0;font-size:1em;padding-top:1.2em;}",
	
	constructor: function(name) {
    self = this;
	},
	
	TotalCount: "0",
	
	count: function(fr) {
		self.TotalCount = parseInt(self.TotalCount) + fr.find('[role]:not([role="navigation"],[role="main"],[role="form"],[role="search"],[role="banner"],[role="complementary"],[role="contentinfo"])').length;
	},
	
	getNumOf: function(fr) {
		recurseFrames(jQuery('html'), self.count);
		return self.TotalCount;
		
	},
	
	addStyle: function(fr) {
		fr.find('head').append("<style type='text/css'>" + self.CSSString + "</style>");
	
	},
	
	removeStyle: function(fr) {
		fr.find('style:contains(' + self.CSSString + ')').remove();
		
	},
	
	addNotes: function(fr) {
		
		//fr.find('.aria-role-highlight-note').remove()
		fr.find('[role]:not([role="navigation"],[role="main"],[role="form"],[role="search"],[role="banner"],[role="complementary"],[role="contentinfo"])').each(function() {
        jQuery(this).addClass('aria-role-highlight')
        jQuery(this).prepend("<p class='aria-role-highlight-note'>Role: " + jQuery(this).attr("role") + "</p>")
    });
		
	},
	
	removeNotes: function(fr) {
		
		fr.find('.aria-role-highlight-note').remove();
		fr.find('[role]:not([role="navigation"],[role="main"],[role="form"],[role="search"],[role="banner"],[role="complementary"],[role="contentinfo"])').each(function() {
        jQuery(this).removeClass('aria-role-highlight')
    });
		
	}
	
});
