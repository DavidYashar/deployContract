//if facing error, change the hardhat configure file to .cjs
import pkg from 'hardhat';
const { ethers } = pkg;

import {assert} from "chai";

describe("ModifyVariable", function () {
  it("should change x to 1337", async function () {
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable");
    const contract = await ModifyVariable.deploy(10);
    await contract.deployed();
    await contract.modifyToLeet();
    const newX = await contract.x();
    assert.equal(newX.toNumber(), 1337);
  });
});
