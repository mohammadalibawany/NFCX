

var win = titanium.UI.createWindows({
    backgroundColor: 'white'
    
});
var view = Titanium.UI.createView();

var label = Titanium.UI.createLabel({
      text: 'NFCX',
      Heigth: 40,
      width: 150,
      top: 150,
      color: 'black' });
      
      
view.add(label);

win.add(view);



win.open();
