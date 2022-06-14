import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", function () {
  it("Deve retornar a nova saudação assim que for alterada", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Olá, Mundo!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Olá, Mundo!");

    const setGreetingTx = await greeter.setGreeting("Olá, mundo!");

   // espera até que a transação seja minerada
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Olá, mundo!");
  });
});
