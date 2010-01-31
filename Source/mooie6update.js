/*
---
description: This class is a simple port to the JQuery plugin ie6-update (http://ie6update.com)

license: MIT-style

authors:
- Arieh Glazer

requires:
- core/1.2.4: [Class, Class.Extras, Element.Dimensions]

provides: [IE6Update]

...
*/

var IE6Update = new Class({
	Implements : [Options],
	containerHTML : "<div class='icon'></div><div class='close'></div><p>Internet Explorer is missing updates required to view this site. Click here to update... </p>",
	options :{
		img_folder : 'images/'
	},
	initialize : function(options){
		this.setOptions(options);
		this.container = new Element('div',{id:'activebar-container'}).set('html',this.containerHTML);
		
		var icon = this.container.getElements('.icon'),
			close = this.container.getElements('.close'),
			container = this.container;
		
		icon.setStyle('background-image','url('+this.options.img_folder+'sprites.png)');
		close.setStyle('background-image','url('+this.options.img_folder+'sprites.png)');
		
		close.addEvent('click',function(e){
			container.destroy();
			e.stop();
		});
			
		this.container.addEvents({
			'mouseover': function(){
				icon.setStyle('background-position','17px 16px');
				close.setStyle('background-position','0 16px');
				this.setStyle('background-color','#3399ff');
			},
			'mouseout':function(){
				icon.setStyle('background-position','17px 0');
				close.setStyle('background-position','0 0');
				this.setStyle('background-color','#ffffe1');
			},
			'click':function(){window.location.href = 'http://www.microsoft.com/windows/internet-explorer/default.aspx';}
		})
		.setStyles({'overflow':'hidden','height':0});
			
		this.container.inject(document.body);
		
		this.container.tween('height',16);
	}
});

function createIE6UpdateBanner(options){
	return  new IE6Update(options || {});
}
