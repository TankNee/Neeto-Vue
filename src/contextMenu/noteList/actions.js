import bus from 'src/components/bus'
import events from 'src/constants/events'

export const rename = (menuItem, browserWindow) => {
  bus.$emit(events.NOTE_ITEM_CONTEXT_MENU.rename)
}

export const copy = (menuItem, browserWindow) => {
  bus.$emit(events.NOTE_ITEM_CONTEXT_MENU.copy)
}

export const move = (menuItem, browserWindow) => {
  bus.$emit(events.NOTE_ITEM_CONTEXT_MENU.move)
}

export const exportAsMarkdown = (menuItem, browserWindow) => {
  bus.$emit(events.NOTE_SHORTCUT_CALL.exportNoteAsMarkdown)
}

export const exportAsPNG = (menuItem, browserWindow) => {
  bus.$emit(events.NOTE_SHORTCUT_CALL.exportNoteAsPNG)
}

export const deleteNote = (menuItem, browserWindow) => {
  bus.$emit(events.NOTE_ITEM_CONTEXT_MENU.delete)
}
