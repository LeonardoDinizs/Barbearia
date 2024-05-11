const tableBody = document.getElementById('table-body');
const filters = {
  nome: document.getElementById('nomeFilter'),
  profissional: document.getElementById('profissionalFilter'),
  cabelo: document.getElementById('cabeloFilter'),
  barba: document.getElementById('barbaFilter'),
  pagamento: document.getElementById('pagamentoFilter'),
};


function filterTable() {
  
  const nomeFilter = filters.nome.value.toLowerCase();
  const profissionalFilter = filters.profissional.value.toLowerCase();
  const cabeloFilter = filters.cabelo.value.toLowerCase();
  const barbaFilter = filters.barba.value.toLowerCase();
  const pagamentoFilter = filters.pagamento.value.toLowerCase();

  
  for (let i = 0; i < tableBody.rows.length; i++) {
    const row = tableBody.rows[i];

    
    let match = true;
    for (const filter in filters) {
      if (filters[filter].value !== '') {
        const cell = row.cells[filters[filter].index];
        if (cell.textContent.toLowerCase().indexOf(filters[filter].value) === -1) {
          match = false;
          break;
        }
      }
    }

    
    row.style.display = match ? '' : 'none';
  }
}


for (const filter in filters) {
  filters[filter].addEventListener('input', filterTable);
}


filterTable();