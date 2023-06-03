import axios from 'axios'
import { IEvento } from '../store/slices/sse/typesSse.models'
const URL = 'https://kds-example-sse.onrender.com'
const connections: EventSource[] = []

const axiosInstance = axios.create({
  baseURL: URL
})

export const apiService = {
  sendData: async (data: IEvento) => {
    try {
      const response = await axiosInstance.post('/data', data)
      return response.data
    } catch (error) {
      console.log('Error sending data:', error)
      throw error
    }
  }
}

export const connectSse = (nameUser: string): EventSource => {
  // Cerrar todas las conexiones guardadas
  if (connections.length > 0) {
    connections.forEach(connection => {
      if (connection instanceof EventSource) {
        connection.close()
      }
    })
  }

  const newEventSource = new EventSource(
    URL + `/api/events?kds=myKds&user=${nameUser}`
  )
  let reconnectCount = 0

  newEventSource.onerror = () => {
    reconnectCount++
    if (reconnectCount === 5) {
      newEventSource.close()
    }
  }

  connections.push(newEventSource)
  return newEventSource
}
