import { Payload } from './Payload'
import { Styles } from './Styles'
import { Methods } from './Methods'

export type Variants = 'light' | 'dark'

export interface Theme {
  variant: Variants
  styles: Styles
}

export interface Message extends Payload {
  data: any[]
}

export interface Props {
  logs: Message[]
  variant?: Variants
  styles?: Styles
  filter?: Methods[]
}

export interface NodeProps {
  log: Message
  classes: any
}
