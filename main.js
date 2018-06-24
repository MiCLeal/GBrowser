const electron = require('electron')
// Módulo para controlar a aplicação.
const app = electron.app
// Módulo para criar uma janela de navegadir bativa.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

let mainWindow

function createWindow() {
  // Cria uma nova janela de navegador.
  mainWindow = new BrowserWindow({width: 800, height: 600, minWidth: 600, minHeight: 400})

  // e carrega o index.html na aplicação.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }))

  // Abre DevTools
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
})
