export async function api(url) {
  try {
    const response = await fetch(url);
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
