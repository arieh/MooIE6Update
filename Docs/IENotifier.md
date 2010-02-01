Class: IENotifier {#IENotifier}
==========================================
The Tree-Acordion takes a tree structured HTML element and adds the effects needed to make it use an accordion effect on its branches.
the class also provides keybard accessible interface.

IENotifier Method: constructor {#IENotifier:constructor}
---------------------------------
### Syntax:

	var notifier = new IENotifier(options);

### Arguments:

1. options - (`object`: optional) See below:

### Options:

 * img_folder (`string`) : Where to find the sprite-set image. (default is `images/`)
 * text (`string`) : What message to put in the notifier.
 * url (`string`) : What url to point to on click.
 * show (`bool`) : Whethter or not to show the bar on creation. (default is `false`)

### Example:
	
#### JS
	var notifier = new IENotifier({
		text : 'some notfication about ie beeing a lame browser',
		url : 'http://getfirefox.com',
		img_folder : 'assets/images/'
	});

IENotifier Method: Show {#IENotifier:show}
---------------------
Shows the notification bar

### Syntax

	notifier.show();
	
IENotifier: Events {#IENotifier:events)
-----------------
 * open : Fires when bar is opened. Passes the bar's container as parameter.
 * close : Fires when bar is closed. Passes the bar's container as parameter.

IENotifier: createIE6UpdateBanner {#IENotifier:createIE6UpdateBanner}
-------------------------------
Creates an IE6-update notifier.

### Syntax

	createIE6UpdateBanner(options)
	
### Arguments:

1. options - (`object`: optional) Same as IENotidier constructor (_NOTE_: the function sets the default paramaters for a generic IE6-Update bar. You should only change `img_folder`)