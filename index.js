const veiculos = [];

const CriarHtmlVeiculo = (veiculo) => {
  const { Modelo, Versao, UltimaRevisao, Fabricacao } = veiculo;
  const formattedDate = UltimaRevisao ? UltimaRevisao.toLocaleString() : '';
  let botaoConfirmar = '';
  // Verifica se a revisão é nula e adiciona um botão de confirmação
  if (UltimaRevisao === null) {
    botaoConfirmar = `<button onclick="confirmarRevisao('${Modelo}')">Confirmar revisão</button>`;
  }
  return `<tr>
    <td>
      <strong>${Modelo}</strong>
      <br>
      <small>${Versao}</small>
    </td>
    <td>${Fabricacao}</td> <!-- Alteração feita aqui -->
    <td>${formattedDate}</td>
    <td>${botaoConfirmar}</td>
  </tr>`;
}

const AtualizarLista = (veiculos) => {
  const tabelaBody = document.querySelector("tbody");
  let output = "";
  for (let veiculo of veiculos) {
    output += CriarHtmlVeiculo(veiculo);
  }
  tabelaBody.innerHTML = output;
}

const CadastrarVeiculo = (event) => {
  event.preventDefault();
  const formulario = new FormData(event.target);
  const novoVeiculo = {
    Modelo: formulario.get("modelo"),
    Versao: formulario.get("versao"),
    Fabricacao: parseInt(formulario.get("fabricacao")), // Alteração feita aqui
    UltimaRevisao: null // Defina como null inicialmente
  };

  veiculos.unshift(novoVeiculo);
  AtualizarLista(veiculos);
  event.target.reset();
}

// Função chamada ao confirmar a revisão
const confirmarRevisao = (modelo) => {
  const veiculoIndex = veiculos.findIndex(veiculo => veiculo.Modelo === modelo);
  if (veiculoIndex !== -1) {
    // Aqui você pode implementar a lógica para confirmar a revisão, por exemplo:
    veiculos[veiculoIndex].UltimaRevisao = new Date();
    AtualizarLista(veiculos); // Atualiza a lista após a confirmação da revisão
  }
}

const formularioVeiculo = document.getElementById("formularioVeiculo");
formularioVeiculo.addEventListener("submit", CadastrarVeiculo);

window.addEventListener("load", () => {
  AtualizarLista(veiculos);
});
