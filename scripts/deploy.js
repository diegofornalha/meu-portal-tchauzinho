const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
      
    console.log("Implantando contratos com conta: ", deployer.address);
    console.log("Saldo da conta: ", accountBalance.toString());
      
    const Token = await hre.ethers.getContractFactory("WavePortal");
    const portal = await Token.deploy();
    await portal.deployed();
      
    console.log("Endereço WavePortal: ", portal.address);
    };
      
    const runMain = async () => {
    try {
    await main();
    process.exit(0);
    } catch (error) {
    console.error(error);
    process.exit(1);
    }
    };
    runMain();