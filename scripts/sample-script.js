// Exigimos o Hardhat Runtime Environment explicitamente aqui. Isso é opcional
// mas útil para executar o script de forma independente através do `node <script>`.
//
// Ao executar o script com `npx hardhat run <script>` você encontrará o Hardhat
// Membros do Runtime Environment disponíveis no escopo global.const hre = require("hardhat");

async function main() {
// Hardhat sempre executa a tarefa de compilação ao executar scripts com seu comando
  //interface de linha.
  //
  // Se este script for executado diretamente usando `node` você pode querer chamar compile
  // manualmente para garantir que tudo esteja compilado
  // espera hre.run('compile');

  // Obtemos o contrato para implantar
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Olá, Hardhat!");

  await greeter.deployed();

  console.log("Receptor implantado para:", greeter.address);
}

// Recomendamos este padrão para poder usar async/await em todos os lugares
// e trata corretamente os erros.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
