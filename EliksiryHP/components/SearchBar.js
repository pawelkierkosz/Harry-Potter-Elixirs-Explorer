// components/SearchBar.js

export class SearchBar {
    constructor(onSearch) {
      // Callback wywoływany przy zmianie tekstu
      this.onSearch = onSearch;
    }
  
    /**
     * Renderuje pasek wyszukiwania
     */
    render(container) {
      container.innerHTML = '';
  
      const label = document.createElement('label');
      label.textContent = 'Wyszukaj po nazwie: ';
  
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = 'Wpisz nazwę eliksiru...';
  
      // Nasłuchiwanie na zmiany w polu input
      input.addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim().toLowerCase();
        this.onSearch(searchTerm);
      });
  
      label.appendChild(input);
      container.appendChild(label);
    }
  }
  