export function isAuthenticated () {
  const token = localStorage.getItem('token') // Supongamos que almacenamos el token en el almacenamiento local

  // Aquí puedes realizar la lógica de verificación de autenticación
  // Por ejemplo, verificar si el token es válido y no ha expirado

  return !!token // Devuelve true si el usuario está autenticado, de lo contrario, devuelve false
}
