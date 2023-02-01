const { expect } = require("chai");

describe("Favourite Number", function () {
  let favNumber;
  let address;

  before(async () => {
    const accounts = await ethers.getSigners();
    address = await accounts[0].getAddress();
    const FavNumber = await ethers.getContractFactory("favNumber");
    favNumber = await FavNumber.deploy();
    await favNumber.deployed();
  });

  it("set the number", async function () {
    const tx = await favNumber.setNumber(42);
    await tx.wait();
    const number = await favNumber.getNumber(address);
    expect(number).to.equal(42);
  });
});
