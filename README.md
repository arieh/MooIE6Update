MooIE6Update
============
This class is a simple port to the JQuery plugin ie6-update (http://ie6update.com). This plugin will create an update notification similar to the IE notification bar, which will prompt IE6 users to update their browsers to a newer version.

![Screenshot](http://github.com/arieh/MooIE6Update/raw/master/screenshot.png)

How to use
-----------
To use this file, siply add these snippets:

	#HTML
	<!-- In The HEAD section /--> 

	<link rel='stylesheet' type='text/css' href='mooie6update.css' />
	
	<!-- With all you other js files /-->

	<script type='text/javascript' src='mooie6update.js'></script>
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
	
	<!--[if lte IE 6]><script type='text/javascript' src='mooie6update.js'></script><script type='text/javascript'>window.addEvent('domready',function(){createIE6UpdateBanner();});</script><![endif]-->