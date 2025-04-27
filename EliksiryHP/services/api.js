// services/api.js

const BASE_URL = 'https://wizard-world-api.herokuapp.com';

/**
 * Pobierz wszystkie eliksiry
 */
export async function getElixirs() {
  try {
    const response = await fetch(`${BASE_URL}/Elixirs`);
    if (!response.ok) {
      throw new Error(`Błąd przy pobieraniu eliksirów. Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('getElixirs error:', error);
    throw error;
  }
}

/**
 * Pobierz pojedynczy eliksir na podstawie jego ID
 */
export async function getElixirById(id) {
  try {
    const response = await fetch(`${BASE_URL}/Elixirs/${id}`);
    if (!response.ok) {
      throw new Error(`Błąd przy pobieraniu konkretnego eliksiru. Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('getElixirById error:', error);
    throw error;
  }
}
