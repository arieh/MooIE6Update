var IE6Update = new Class({
	Implements : [Options],
	containerHTML : "<div class='icon'><img class='normal' src=''/></div><div class='close'><img class='normal' src=''/></div><div class='content'><div>Internet Explorer is missing updates required to view this site. Click here to update... </div></div>",
	options :{img_folder : 'images/',css_folder:'css/'},
	initialize : function(options){
		this.setOptions(options);
		this.container = new Element('div',{id:'activebar-container'}).set('html',this.containerHTML);
		
		var icon = this.container.getElements('.icon').getElements('img')[0],
			close = this.container.getElements('.close').getElements('img')[0],
			container=this.container,
			containerHeight = this.container.getSize().y,
			link = new Element('link',{'rel':'stylesheet','type':'text/css','href':this.options.css_folder+'mooie6update.css'}),
			img_folder = this.options.img_folder;
		$$('head')[0].adopt(link);
		
		icon.set('src',this.options.img_folder+'icon.png');
		
		close.set('src',this.options.img_folder+'close.png')
			.addEvent('click',function(e){
				container.destroy();
				e.stopPropagation();
			});
		this.container
			.addEvent('mouseover', function(){
				icon.set('src',img_folder+'icon-over.png');
				close.set('src',img_folder+'close-over.png');
				this.setStyle('background-color','#3399ff');
			})
			.addEvent('mouseout',function(){
				icon.set('src',img_folder+'icon.png');
				close.set('src',img_folder+'close.png');
				this.setStyle('background-color','#ffffe1');
			})
			.addEvent('click',function(){window.location.href = 'http://www.microsoft.com/windows/internet-explorer/default.aspx';})
			.setStyles({'overflow':'hidden','height':0});
			
		$$('body')[0].adopt(this.container);
		this.container.tween('height',16);
	}
});
	
