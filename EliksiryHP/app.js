// app.js

import { getElixirs, getElixirById } from './services/api.js';
import { ElixirsList } from './components/ElixirsList.js';
import { ElixirDetails } from './components/ElixirDetails.js';
import { SearchBar } from './components/SearchBar.js';
import { FilterBar } from './components/FilterBar.js';

// Referencje do div-ów w index.html
const searchBarContainer = document.getElementById('search-bar-container');
const filterBarContainer = document.getElementById('filter-bar-container');
const elixirsListContainer = document.getElementById('elixirs-list-container');
const elixirDetailsContainer = document.getElementById('elixir-details-container');

// Tworzymy instancje komponentów
const elixirsList = new ElixirsList(handleElixirSelect);
const elixirDetails = new ElixirDetails();
const searchBar = new SearchBar(handleSearch);
const filterBar = new FilterBar(handleFilter);

// Globalne zmienne stanu
let allElixirs = [];       // Wszystkie pobrane eliksiry
let filteredElixirs = [];  // Wynik filtrowania i wyszukiwania
let currentSearchTerm = '';
let currentFilter = '';

// Inicjalizacja aplikacji
(async function init() {
    try {
      showLoading(elixirsListContainer);
      // Pobieramy eliksiry
      allElixirs = await getElixirs(); // Funkcja z api.js
  
      // Kopiujemy je do tablicy filtrowanej (bo na początku pokazujemy wszystkie)
      filteredElixirs = allElixirs.slice();
  
      // Renderujemy search i filter
      searchBar.render(searchBarContainer);
      filterBar.render(filterBarContainer);
  
      // Czyścimy wiadomość "Ładowanie..."
      clearContainer(elixirsListContainer);
  
      // Render listy
      elixirsList.render(filteredElixirs, elixirsListContainer);
  
      // Jeżeli w liscie znajduje sie co najmniej jeden eliksir
      //if (filteredElixirs.length > 0) {
        //await handleElixirSelect(filteredElixirs[0].id);
      //} else {
        // Jeśli brak eliksirów
        //elixirDetails.render(null, elixirDetailsContainer);
      //}
  
    } catch (error) {
      showError(elixirsListContainer, 'Nie udało się pobrać eliksirów. Spróbuj ponownie.');
    }
  })();
  

/**
 * Obsługa wyboru eliksiru z listy
 */
async function handleElixirSelect(elixirId) {
  try {
    showLoading(elixirDetailsContainer);
    const selectedElixir = await getElixirById(elixirId);
    elixirDetails.render(selectedElixir, elixirDetailsContainer);
  } catch (error) {
    showError(
      elixirDetailsContainer,
      'Nie udało się pobrać szczegółów. Spróbuj ponownie.'
    );
  }
}

/**
 * Obsługa zmiany w polu wyszukiwania (SearchBar)
 */
function handleSearch(searchTerm) {
  currentSearchTerm = searchTerm;
  filterAndRender();
}

/**
 * Obsługa zmiany filtra trudności
 */
function handleFilter(difficulty) {
  currentFilter = difficulty;
  filterAndRender();
}

/**
 * Filtrowanie eliksirów na podstawie wyszukiwania i wybranego filtra
 */
function filterAndRender() {
  filteredElixirs = allElixirs.filter((elixir) => {
    // Wyszukiwanie po nazwie
    const matchesSearch = elixir.name.toLowerCase().includes(currentSearchTerm);

    // Filtrowanie po trudności
    const matchesDifficulty = currentFilter
      ? elixir.difficulty === currentFilter
      : true;

    return matchesSearch && matchesDifficulty;
  });

  renderList();
}

/**
 * Ponowne renderowanie listy po każdej zmianie
 */
function renderList() {
  clearContainer(elixirsListContainer);

  if (filteredElixirs.length === 0) {
    elixirsListContainer.innerHTML = '<p>Brak eliksirów spełniających kryteria.</p>';
    return;
  }

  elixirsList.render(filteredElixirs, elixirsListContainer);
}

/**
 * Wyświetl komunikat „Ładowanie...” w danym kontenerze
 */
function showLoading(container) {
  container.innerHTML = '<p class="loading">Ładowanie...</p>';
}

/**
 * Wyświetl błąd w danym kontenerze
 */
function showError(container, message) {
  container.innerHTML = `<p class="error">${message}</p>`;
}

/**
 * Wyczyść zawartość danego kontenera
 */
function clearContainer(container) {
  container.innerHTML = '';
}
