# HTML

*Hypertext*
*Markup*
*Language*

# CSS

# JavaScript
'''JavaScript
// variáveis
const mensagem = "opa!"
// tipos de dados

// função
alert(mensagem)

const veiculo = {
  Modelo: "Volkaswagen gol",
  Versao: "Rallye 1.6",
  UltimaRevisao: new Date(2024, 0, 18, 14,00),
  Fabricacao: "2008"
}

let veiculos = [
  {
Modelo: "Volkaswagen gol",
Versao: "Rallye 1.6",
UltimaRevisao: new Date(2024, 0, 18, 14,00),
Fabricacao: "2008"
},
]

for(let veiculo of veiculos) {
output = output + CriarNovoParticipante(veiculo)
  }



  <!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tabela de Revisão de Veículos</title>
</head>
<body>

<form id="formularioVeiculo">
  <fieldset>
    <legend>Cadastro</legend>

    <div>
      <input 
        type="text"
        placeholder="Modelo"
        name="modelo"
        required
      >
      
      <input 
        type="text"
        placeholder="Versão"
        name="versao"
        required
      >

      <input 
        type="text"
        placeholder="Ano"
        name="ano"
      >
      
      <button type="submit">Cadastrar Veículo</button>
    </div>
  </fieldset>
</form>

<table width="100%">
  <thead style="text-align: left">
    <tr>
      <th>Modelo</th>
      <th>Última revisão</th> <!-- Corrigido de "Ultima revisão" para "Última revisão" -->
      <th>Fabricação</th>
    </tr>
  </thead>

  <tbody>
    
  </tbody>
</table>

<script src="script.js"></script> <!-- Adicionado o script.js -->
</body>
</html>