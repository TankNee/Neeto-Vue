// import channels from 'app/share/channels'
// import i18n from 'boot/i18n'

const { ipcMain, app, dialog } = require('electron')
const fs = require('fs-extra')

/**
 * 在本地注册对应的事件句柄，用于解决对应的事件
 * @param {string} channel 频道名称
 * @param {Function} api 操作函数
 * @returns {Promise<void>}
 */
async function handleApi (channel, api) {
  ipcMain.handle(channel, async (event, ...args) => {
    try {
      const ret = await api(event, ...args)
      return ret
    } catch (err) {
      console.error(err)
      return {
        error: {
          code: err.code,
          message: err.message,
          externCode: err.externCode,
          sourceStack: err.stack,
          isNetworkError: err.isAxiosError,
          networkStatus: err.response?.status
        }
      }
    }
  })
}

export default {
  registerApiHandler () {
    console.log('Registering')
    handleApi('export-markdown-file', (event, content) => {
      console.log(content)
      dialog.showSaveDialog({
        title: 'Export',
        defaultPath: app.getPath('documents'),
        filters: [
          {
            name: 'Markdown File',
            extensions: ['md', 'markdown']
          }
        ]
      }).then((result) => {
        if (result.canceled) return
        fs.writeFile(result.filePath, content).catch(err => throw err)
      }).catch(err => throw err)
    })

    handleApi('export-markdown-files', (event, contents) => {
      // console.log(contents)
      dialog.showOpenDialog({
        title: 'Export',
        defaultPath: app.getPath('documents'),
        properties: [
          'openDirectory'
        ]
      }).then((result) => {
        if (result.canceled) return
        contents.forEach(({ content, title }) => {
          fs.writeFileSync(`${result.filePaths[0]}/${title}.md`, content)
        })
      }).catch(err => throw err)
    })
  }
}
