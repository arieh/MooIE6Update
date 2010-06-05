MooIE6Update
============
This plugin started as a simple port to the JQuery plugin ie6-update (http://ie6update.com). At it's simplest use it will create an update notification similar to the IE notification bar, which will prompt IE6 users to update their browsers to a newer version.

BUT, as I started refactoring the class, I eventualy found myself creating a more generic IENotifier class, which lets you create whatever message you would like with this class.

![Screenshot](http://github.com/arieh/MooIE6Update/raw/master/screenshot.png)


How to use
-----------

### IE6 Update Notifier:

For the IE6 updae notification, simply add these snippets:

	#HTML
	<!-- In The HEAD section /--> 

	<link rel='stylesheet' type='text/css' href='IENotifier.css' />
	
	<!-- With all you other js files /-->

	<script type='text/javascript' src='IENotifier.js'></script>
	<script type='text/javascript'>
		window.addEvent('domready',function(){
			createIE6UpdateBanner({
				img_folder:'path-to-images-folder/' 
			});
		});
	</script>

_The default folder for the sprite-image is `images/`. If you put it in another location you need to point to it via the `img_folder` option._


#### With conditional comments:

	#HTML
	<!--[if lte IE 6]><link rel='stylesheet' type='text/css' href='mooie6update.css' /><![endif]-->
	
	<!--[if lte IE 6]><script type='text/javascript' src='IENotifier.js'></script><script type='text/javascript'>window.addEvent('domready',function(){createIE6UpdateBanner();});</script><![endif]-->
	
### IENotifier Usage:

	#JS
	var notifier = new IENotifier({
		text : 'some notfication about ie beeing a lame browser',
		url : 'http://getfirefox.com',
		img_folder : 'assets/images/'
	});
	
	notifier.show();