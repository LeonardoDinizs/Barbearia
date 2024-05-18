document.addEventListener("DOMContentLoaded", function() {
    const nomeFilter = document.getElementById("nomeFilter");
    const contatoFilter = document.getElementById("contatoFilter"); // Novo campo de filtro para contato
    const profissionalFilter = document.getElementById("profissionalFilter");
    const cabeloFilter = document.getElementById("cabeloFilter");
    const barbaFilter = document.getElementById("barbaFilter");
    const pagamentoFilter = document.getElementById("pagamentoFilter");
    const valorPagoFilter = document.getElementById("valorPagoFilter"); // Novo campo de filtro para valor pago
    
    const filterTable = () => {
        const nomeValue = nomeFilter.value.toUpperCase();
        const contatoValue = contatoFilter.value.toUpperCase(); // Novo valor do filtro para contato
        const profissionalValue = profissionalFilter.value.toUpperCase();
        const cabeloValue = cabeloFilter.value.toUpperCase();
        const barbaValue = barbaFilter.value.toUpperCase();
        const pagamentoValue = pagamentoFilter.value.toUpperCase();
        const valorPagoValue = valorPagoFilter.value.toUpperCase(); // Novo valor do filtro para valor pago
        
        const rows = document.querySelectorAll("#table-body tr");
        
        rows.forEach(row => {
            const nomeCell = row.children[1];
            const contatoCell = row.children[2]; // Nova célula para contato
            const profissionalCell = row.children[3];
            const cabeloCell = row.children[4];
            const barbaCell = row.children[5];
            const pagamentoCell = row.children[6]; // Ajustando o índice da célula para pagamento
            const valorPagoCell = row.children[7]; // Nova célula para valor pago
            
            if (nomeCell.textContent.toUpperCase().includes(nomeValue) &&
                contatoCell.textContent.toUpperCase().includes(contatoValue) && // Verifica se o texto do contato inclui o valor de filtragem
                profissionalCell.textContent.toUpperCase().includes(profissionalValue) &&
                cabeloCell.textContent.toUpperCase().includes(cabeloValue) &&
                barbaCell.textContent.toUpperCase().includes(barbaValue) &&
                pagamentoCell.textContent.toUpperCase().includes(pagamentoValue) &&
                valorPagoCell.textContent.toUpperCase().includes(valorPagoValue)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
        });
    };
    
    nomeFilter.addEventListener("keyup", filterTable);
    contatoFilter.addEventListener("keyup", filterTable); // Adicionando o evento de filtro para o campo de contato
    profissionalFilter.addEventListener("keyup", filterTable);
    cabeloFilter.addEventListener("keyup", filterTable);
    barbaFilter.addEventListener("keyup", filterTable);
    pagamentoFilter.addEventListener("keyup", filterTable);
    valorPagoFilter.addEventListener("keyup", filterTable); // Adicionando o evento de filtro para o campo de valor pago
  });
  