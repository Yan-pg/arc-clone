import { ipcMain } from "electron";

ipcMain.on("fetch-documents", (event, args) => {
  console.log("entrou");
});
