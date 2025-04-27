// components/ElixirDetails.js

export class ElixirDetails {
    /**
     * Renderuje szczegóły wybranego eliksiru
     */
    render(elixir, container) {
      container.innerHTML = '';
  
      if (!elixir) {
        container.innerHTML = '<p>Wybierz eliksir, aby zobaczyć szczegóły.</p>';
        return;
      }
  
      const detailDiv = document.createElement('div');
      detailDiv.classList.add('elixir-details');
  
      // Wyświetlamy dostępne informacje (czasem część może być pusta)
      detailDiv.innerHTML = `
        <h2>${elixir.name}</h2>
        <p><strong>Efekt:</strong> ${elixir.effect || 'Brak informacji'}</p>
        <p><strong>Skutki uboczne:</strong> ${
          elixir.sideEffects || 'Brak informacji'
        }</p>
        <p><strong>Charakterystyka:</strong> ${
          elixir.characteristics || 'Brak informacji'
        }</p>
        <p><strong>Trudność:</strong> ${
          elixir.difficulty || 'Brak danych'
        }</p>
        <p><strong>Autorzy:</strong> ${
          elixir.inventors && elixir.inventors.length > 0
            ? elixir.inventors.map((inv) => inv.firstName + ' ' + inv.lastName).join(', ')
            : 'Brak informacji'
        }</p>
        <p><strong>Składniki:</strong> ${
          elixir.ingredients && elixir.ingredients.length > 0
            ? elixir.ingredients.map((ing) => ing.name).join(', ')
            : 'Brak informacji'
        }</p>
      `;
  
      container.appendChild(detailDiv);
    }
  }
  