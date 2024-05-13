document.addEventListener("DOMContentLoaded", function() {
  const nomeFilter = document.getElementById("nomeFilter");
  const profissionalFilter = document.getElementById("profissionalFilter");
  const cabeloFilter = document.getElementById("cabeloFilter");
  const barbaFilter = document.getElementById("barbaFilter");
  const pagamentoFilter = document.getElementById("pagamentoFilter");
  
  const filterTable = () => {
      const nomeValue = nomeFilter.value.toUpperCase();
      const profissionalValue = profissionalFilter.value.toUpperCase();
      const cabeloValue = cabeloFilter.value.toUpperCase();
      const barbaValue = barbaFilter.value.toUpperCase();
      const pagamentoValue = pagamentoFilter.value.toUpperCase();
      
      const rows = document.querySelectorAll("#table-body tr");
      
      rows.forEach(row => {
          const nomeCell = row.children[1];
          const profissionalCell = row.children[2];
          const cabeloCell = row.children[3];
          const barbaCell = row.children[4];
          const pagamentoCell = row.children[5];
          
          if (nomeCell.textContent.toUpperCase().includes(nomeValue) &&
              profissionalCell.textContent.toUpperCase().includes(profissionalValue) &&
              cabeloCell.textContent.toUpperCase().includes(cabeloValue) &&
              barbaCell.textContent.toUpperCase().includes(barbaValue) &&
              pagamentoCell.textContent.toUpperCase().includes(pagamentoValue)) {
                  row.style.display = "";
              } else {
                  row.style.display = "none";
              }
      });
  };
  
  nomeFilter.addEventListener("keyup", filterTable);
  profissionalFilter.addEventListener("keyup", filterTable);
  cabeloFilter.addEventListener("keyup", filterTable);
  barbaFilter.addEventListener("keyup", filterTable);
  pagamentoFilter.addEventListener("keyup", filterTable);
});
