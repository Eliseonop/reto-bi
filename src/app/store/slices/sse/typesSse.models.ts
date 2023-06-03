export interface SseState {
  evento: IEvento  | null
  connected: boolean
}


export interface IEvento {
  value: any
  kds: string
  userId: string
  crudId: string
  type: TypeData
}

export enum TypeData {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE'
}


