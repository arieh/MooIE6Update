/*
---
description: This class is a simple port to the JQuery plugin ie6-update (http://ie6update.com)

license: MIT-style

authors:
- Arieh Glazer

requires:
- core/1.2.4: [Class, Class.Extras, Element.Dimensions]

provides: [IENotifier]

...
*/
var IENotifier = new Class({
	Implements : [Options,Events],
	containerHTML : "<div class='icon'></div><div class='close'></div><p></p>",
	options :{
		img_folder : 'images/',
		text : '',
		url : '#',
		show : false
	},
	initialize : function(options){
		this.setOptions(options);
	
		this.container = new Element('a',{id:'activebar-container', href:this.options.url}).set('html',this.containerHTML);
		this.container.getElement('p').appendText(this.options.text);
		
		var icon = this.container.getElements('.icon'),
			close = this.container.getElements('.close'),
			container = this.container,
			url = this.options.url,
			self = this;
		
		icon.setStyle('background-image','url('+this.options.img_folder+'sprites.png)');
		close.setStyle('background-image','url('+this.options.img_folder+'sprites.png)');
		
		close.addEvent('click',function(e){
			self.hide();
			e.stop();
		});
			
		this.container.inject(document.body);
		
		if (this.options.show) this.show();
	},
	toElement : function(){ return this.container; },
	show : function(){
		this.container.tween('height',16);
		this.fireEvent('open',this.toElement());
	},
	hide : function(){
		this.container.tween('height',0);
		this.fireEvent('close',this.toElement());
	}
});

function createIE6UpdateBanner(options){
	options = options || {};
	options.text = options.text || "Internet Explorer is missing updates required to view this site. Click here to update... ";
	options.url  = options.url  || "http://www.microsoft.com/windows/internet-explorer/default.aspx";
	options.show = options.show || true;
	return  new IENotifier(options || {});
}
