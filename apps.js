///1 represent login page
///2 represent checkin page
///3 is checkout
/// color set for debugging purposes


var win1 = Ti.UI.createWindow({
	backgroundColor: 'blue'
});

var win2 = Ti.UI.createWindow({
	backgroundColor: 'yellow'
	
});

var win3 = Ti.UI.createWindow({
	backgroundColor: 'red'
	
});


var view1 = Ti.UI.createView();

var view2 = Ti.UI.createView();

var view3 = Ti.UI.createView();


//Username and password input fields
var usname = Ti.UI.createTextField({
	color: 'blue' ,
	hintText: 'Username',
	height: 70,
	top : 180,
	width: 250,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL
});

var pwd = Ti.UI.createTextField({
	color: 'yellow' ,
	hintText: 'password',
	height: 70,
	top : 270,
	width: 250,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL
});


var label1 = Titanium.UI.createLabel({
      text: 'Welcome To CrossRoads',
      font: { fontSize:25 },
      Heigth: 100,
      width: 300,
      top: 50,
      //left: 10 ,
      color: 'black' });
      
var label2 = Titanium.UI.createLabel({
      text: 'Enter Your Username and Password',
      font: { fontSize:20 },
      Heigth: 130,
      width: 300,
      top: 120,
      //left: 10 ,
      color: 'black' });

var button1 = Ti.UI.createButton({
	title: 'Login',
	top: 350,
	width: 150,
	height: 60
});

var rem = Ti.UI.createSwitch({
	style:Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
    title:"Remember Me",
    value:false,
    top: 450
});


button1.addEventListener('click',function(e){
	win2.open();
	alert(usname.getValue());
	
});

var button2 = Ti.UI.createButton({
	title: 'checkIN',
	top: 200,
	width: 150,
	height :60
});

var button3 = Ti.UI.createButton({
	title: 'checkout',
	top: 300,
	width: 150,
	height :60
});
var CaseID = Ti.UI.createTextField({
	color: 'yellow' ,
	hintText: 'Enter Case ID',
	height: 70,
	top : 50,
	width: 250,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL
});


button2.addEventListener('click',function(e){

	Titanium.Geolocation.getCurrentPosition;
});

button3.addEventListener('click',function(e){
	Titanium.Geolocation.getCurrentPosition;
	
});


view1.add(button1);

view1.add(usname);

view1.add(pwd);

view2.add(button2);

view1.add(label1);

view1.add(label2);

view2.add(button3);

view1.add(rem);

view2.add(CaseID);

win1.add(view1);

win2.add(view2);


win1.open();
