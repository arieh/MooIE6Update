/*
---
description: This class is a simple port to the JQuery plugin ie6-update (http://ie6update.com)

license: MIT-style

authors:
- Arieh Glazer

requires:
- core/1.2.4: [Class,Class.Extras,Element.Dimensions]

provides: [HashListener]

...
*/

var IE6Update = new Class({
	Implements : [Options],
	containerHTML : "<div class='icon'><img class='normal' src=''/></div><div class='close'><img class='normal' src=''/></div><div class='content'><div>Internet Explorer is missing updates required to view this site. Click here to update... </div></div>",
	options :{
		img_folder : 'images/'
	},
	initialize : function(options){
		this.setOptions(options);
		this.container = new Element('div',{id:'activebar-container'}).set('html',this.containerHTML);
		
		var icon = this.container.getElements('.icon').getElements('img')[0],
			close = this.container.getElements('.close').getElements('img')[0],
			container=this.container,
			img_folder = this.options.img_folder;
		
		icon.set('src',this.options.img_folder+'icon.png');
		
		close.set('src',this.options.img_folder+'close.png')
			.addEvent('click',function(e){
				container.destroy();
				e.stopPropagation();
			});
			
		this.container.addEvents({
			'mouseover': function(){
				icon.set('src',img_folder+'icon-over.png');
				close.set('src',img_folder+'close-over.png');
				this.setStyle('background-color','#3399ff');
			},
			'mouseout':function(){
				icon.set('src',img_folder+'icon.png');
				close.set('src',img_folder+'close.png');
				this.setStyle('background-color','#ffffe1');
			},
			'click':function(){window.location.href = 'http://www.microsoft.com/windows/internet-explorer/default.aspx';}
		})
		.setStyles({'overflow':'hidden','height':0});
			
		$$('body')[0].adopt(this.container);
		this.container.tween('height',16);
	}
});

function createIE6UpdateBanner(options){
	return  new IE6Update(options || {});
}
