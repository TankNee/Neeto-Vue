import { isOsx } from '../../config'
import strongIcon from '../../assets/pngicon/format_strong/2.png'
import emphasisIcon from '../../assets/pngicon/format_emphasis/2.png'
import underlineIcon from '../../assets/pngicon/format_underline/2.png'
import codeIcon from '../../assets/pngicon/code/2.png'
import imageIcon from '../../assets/pngicon/format_image/2.png'
import linkIcon from '../../assets/pngicon/format_link/2.png'
import strikeIcon from '../../assets/pngicon/format_strike/2.png'
import mathIcon from '../../assets/pngicon/format_math/2.png'
import highlightIcon from '../../assets/pngicon/highlight/2.png'
import clearIcon from '../../assets/pngicon/format_clear/2.png'
import { i18n } from 'boot/i18n'

const COMMAND_KEY = isOsx ? '⌘' : 'Ctrl'

const icons = [
  {
    type: 'strong',
    tooltip: () => i18n.t('emphasize'),
    shortcut: `${COMMAND_KEY}+B`,
    icon: strongIcon
  }, {
    type: 'em',
    tooltip: () => i18n.t('italic'),
    shortcut: `${COMMAND_KEY}+I`,
    icon: emphasisIcon
  }, {
    type: 'u',
    tooltip: () => i18n.t('underline'),
    shortcut: `${COMMAND_KEY}+U`,
    icon: underlineIcon
  }, {
    type: 'del',
    tooltip: () => i18n.t('strikethrough'),
    shortcut: `${COMMAND_KEY}+D`,
    icon: strikeIcon
  }, {
    type: 'mark',
    tooltip: () => i18n.t('highlight'),
    shortcut: `⇧+${COMMAND_KEY}+H`,
    icon: highlightIcon
  }, {
    type: 'inline_code',
    tooltip: () => i18n.t('inlineCode'),
    shortcut: `${COMMAND_KEY}+\``,
    icon: codeIcon
  }, {
    type: 'inline_math',
    tooltip: () => i18n.t('inlineMath'),
    shortcut: `⇧+${COMMAND_KEY}+M`,
    icon: mathIcon
  }, {
    type: 'link',
    tooltip: () => i18n.t('link'),
    shortcut: `${COMMAND_KEY}+L`,
    icon: linkIcon
  }, {
    type: 'image',
    tooltip: () => i18n.t('image'),
    shortcut: `⇧+${COMMAND_KEY}+I`,
    icon: imageIcon
  }, {
    type: 'clear',
    tooltip: () => i18n.t('eliminate'),
    shortcut: `⇧+${COMMAND_KEY}+R`,
    icon: clearIcon
  }
]

export default icons
