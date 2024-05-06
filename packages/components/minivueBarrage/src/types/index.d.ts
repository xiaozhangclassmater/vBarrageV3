export interface miniVueBarrageProps {
  barrages: Array<BarrageItem>,
  startIcon: boolean,
  iconUrlInShow: boolean
  fullScreen: boolean
  createFrequencyTime: number,
  createNum: number
  delay: number
  opacity: number

}
export type baseType = undefined | string | number | null | object | []
export type barrrageTypeGroup = 'user' | 'myuser' | 'testUser'
export interface BarrageItem {
  id?: number,
  delay?: number,
  iconUrl?: string,
  content: string,
  top?: number
  color?: string,
  type?: barrrageTypeGroup
}
export interface emitChageParams  {
  createCount: number
}
export interface emitTypes {
  (e: 'change', params: emitChageParams ): void
  (e: 'update:barrages', params: BarrageItem[] ): void
}

export type playState = 'running' | 'paused'

export interface barrageExpose extends miniVueBarrageProps {
  create: (instance: BarrageItem) => void;
  setBarrageOpacity: () => void
}
