/*
---
description: This class supplies an interface to create IE-notification-like bar

license: MIT-style

authors:
- Arieh Glazer

requires:
- core/1.2.4: [Class, Class.Extras, Element.Dimensions, Assets.image]

provides: [IENotifier, IE6UpdateNotifier]

...
*/
var IENotifier = new Class({
	Implements : [Options,Events],
	containerHTML : "<div class='icon'></div><div class='close'></div>",
	options :{
		img_folder : 'images/',
		text : '',
		url : '#',
		show : false
		, rtl :false
	},
	initialize : function(options){
		this.setOptions(options);
	
		this.container = new Element('a',{'class':'activebar-container', href:this.options.url}).set('html',this.containerHTML);
		this.container.adopt(new Element('p',{html:this.options.text}));
		
		var icon = this.container.getElements('.icon'),
			close = this.container.getElements('.close'),
			container = this.container,
			url = this.options.url,
			self = this;
		
		icon.setStyle('background-image','url('+this.options.img_folder+'icon.png)');
		close.setStyle('background-image','url('+this.options.img_folder+'close.png)');
		
		if (this.options.rtl){
			this.container.setStyle('direction','rtl');
			icon.setStyle('float','right');
			close.setStyle('float','left');
		}
		
		close.addEvent('click',function(e){
			self.hide();
			e.stop();
		});
			
		this.container.inject(document.body);
		
		new Asset.images(this.options.img_folder+'close-over.png' , this.options.img_folder+'icon-over.png');
		
		this.container.addEvents({
			'mouseover':function(){
				icon.setStyle('background-image','url('+self.options.img_folder+'icon-over.png)');
				close.setStyle('background-image','url('+self.options.img_folder+'close-over.png)');
				this.setStyle('background','#3399ff');
			}
			,'mouseout':function(){
				icon.setStyle('background-image','url('+self.options.img_folder+'icon.png)');
				close.setStyle('background-image','url('+self.options.img_folder+'close.png)');
				this.setStyle('background','#ffffe1');
			}
		});
		
		if (this.options.show) this.show();
	},
	toElement : function(){ return $(this.container); },
	show : function(){
		this.container.tween('height',16);
		this.fireEvent('open',this.toElement());
	},
	hide : function(){
		var cont = $(this.container), $this = this;
		var fx = new Fx.Tween(this.container,{
			onComplete :function(){
				$(cont).setStyle('display','none');
				$this.fireEvent('close',$this.toElement());
			}
		});

		fx.start('height',0);
	}
});


var IE6UpdateNotifier = new Class({
	Extends : IENotifier,
	options : {
		text : "Internet Explorer is missing updates required to view this site. Click here to update... ",
		url : "http://www.microsoft.com/windows/internet-explorer/default.aspx",
		show : true
	}
});

function createIE6UpdateBanner(options){
	return  new IE6UpdateNotifier(options || {});
}
