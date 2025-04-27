// components/ElixirsList.js

export class ElixirsList {
    constructor(onSelectElixir) {
      // Callback wywoływany, gdy użytkownik kliknie w dany eliksir
      this.onSelectElixir = onSelectElixir;
    }
  
    /**
     * Renderuje listę eliksirów we wskazanym kontenerze
     */
    render(elixirs, container) {
      // Wyczyść poprzednią zawartość
      container.innerHTML = '';
  
      // Tworzymy wrapper
      const wrapper = document.createElement('div');
      wrapper.classList.add('elixirs-list');
  
      // Dla każdego eliksiru tworzymy kartę
      elixirs.forEach((elixir) => {
        const card = document.createElement('div');
        card.classList.add('elixir-card');
        card.innerHTML = `
          <h3>${elixir.name}</h3>
          <p><strong>Trudność:</strong> ${
            elixir.difficulty ? elixir.difficulty : 'Brak danych'
          }</p>
        `;
  
        // Po kliknięciu w kartę wywołujemy callback
        card.addEventListener('click', () => {
          this.onSelectElixir(elixir.id);
        });
  
        wrapper.appendChild(card);
      });
  
      container.appendChild(wrapper);
    }
  }
  