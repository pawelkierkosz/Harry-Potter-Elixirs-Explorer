// components/FilterBar.js

export class FilterBar {
    constructor(onFilter) {
      // Callback wywoływany przy zmianie filtra
      this.onFilter = onFilter;
    }
  
    /**
     * Renderuje dropdown z wyborem poziomu trudności
     */
    render(container) {
      container.innerHTML = '';
  
      const label = document.createElement('label');
      label.textContent = 'Filtruj po trudności: ';
  
      const select = document.createElement('select');
  
      // Opcja „wszystko”
      const allOption = document.createElement('option');
      allOption.value = '';
      allOption.textContent = 'Wszystkie';
      select.appendChild(allOption);
  
      // Lista trudności
      const difficulties = ['Unknown', 'Advanced', 'Moderate', 'Beginner', 'OrdinaryWizardingLevel', 'OneOfAKind'];
      difficulties.forEach((diff) => {
        const option = document.createElement('option');
        option.value = diff;
        option.textContent = diff;
        select.appendChild(option);
      });
  
      // Nasłuchiwanie na zmianę opcji w dropdownie
      select.addEventListener('change', (e) => {
        this.onFilter(e.target.value);
      });
  
      label.appendChild(select);
      container.appendChild(label);
    }
  }
  