export async function api() {
  try {
    const response = await fetch(`http://localhost:4000/api/timers`);
    if (!response.ok) {
      throw new Error(`La solicitud falló con el código de estado ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al consultar la API:');
    throw error;
  }
}
