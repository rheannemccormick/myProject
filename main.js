var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var win;
app.on('ready', function(){
  win = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.

  win.loadURL( 'file://' + __dirname + '/index.html' );

  // Open the DevTools.
  //win.webContents.openDevTools();

  // Emitted when the window is closed.
  //the thing . dot . the event ( on the event do this )

  win.on('closed', function(){
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  })
});

// Quit when all windows are closed.
app.on('window-all-closed', function(){
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  // make sure it isnt macOS before quitting app (on mac apps stay running when exited )
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on( 'activate', function(){
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
