




var win1 = Ti.UI.createWindow({
	backgroundColor: 'white'
});

var win2 = Ti.UI.createWindow({
	backgroundColor: 'white'
	
});

var Cloud = require('ti.cloud');
Cloud.debug = true;


var win3 = Ti.UI.createWindow({
	backgroundColor: 'white'
	
});


var view1 = Ti.UI.createView();

var view2 = Ti.UI.createView();

var view3 = Ti.UI.createView();

var logo = Ti.UI.createImageView({
	image:'/Resources/logo.png',
	top: 450
});


//Username and password input fields
var usname = Ti.UI.createTextField({
	hintText: 'Username',
	height: 70,
	top : 180,
	width: 250,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL
});

var pwd = Ti.UI.createTextField({
	hintText: 'Password',
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

var button4 = Ti.UI.createButton({
	title: 'Create and Login',
	top: 450,
	width: 150,
	height: 60
});



//var rem = Ti.UI.createSwitch({
	//style:Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
    //title:"Remember Me",
    //value:false,
    //top: 450
//});
///_______________________****______________________________________________

button1.addEventListener('click',function(e){
Cloud.Users.login({
    login: usname.value,
    password: pwd.value,
}, function (e) {
    if (e.success) {
        var user = e.users[0];
        
        alert('Login Successfully!');
            win2.open();
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
	
});
///_____________________________*****___________


var button2 = Ti.UI.createButton({
	title: 'Check In',
	top: 150,
	width: 150,
	height :60
});

var button3 = Ti.UI.createButton({
	title: 'Check Out',
	top: 250,
	width: 150,
	height :60
});
var CaseID = Ti.UI.createTextField({
	hintText: 'Enter Case ID',
	height: 70,
	top : 50,
	width: 250,
	
});



///works
button2.addEventListener('click',function(e){
Cloud.Objects.create({
    classname: 'Checkin',
    fields: {
        ID: 'user1',
        CaseID: CaseID.value,
        time: ''
    }
}, function (e) {
    if (e.success) {
        alert("Checked In Sucessfully");
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
});

button3.addEventListener('click',function(e){
Cloud.Objects.create({
    classname: 'Checkout',
    fields: {
        ID: 'user1',
        CaseID: CaseID.value,
        time: ''
    }
}, function (e) {
    if (e.success) {
			alert('Checkout sucessfully You just made a difference in a Kids Life');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
});


  
/// end works





view1.add(button1);

view1.add(usname);

view1.add(pwd);

view1.add(logo);

view2.add(button2);

view2.add(button3);

//view1.add(button4);

//view1.add(rem);

view2.add(CaseID);

win1.add(view1);

win2.add(view2);



win1.open();





