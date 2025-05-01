import { expect } from "chai";
import { ethers } from "hardhat";
import { Jmale42 } from "../typechain-types";

describe("Jmale42 Token", function () {
  let token: Jmale42;
  let owner: any;
  let addr1: any;

  // Run before each test
  beforeEach(async function () {
    // Get test accounts
    [owner, addr1] = await ethers.getSigners();

    // Deploy the ERC20 contract
    const Token = await ethers.getContractFactory("Jmale42");
    token = (await Token.deploy()) as Jmale42;

    // Wait for deployment to finish
    await token.waitForDeployment();
  });

  // Test 1: Check token name and symbol
  it("Should have correct name and symbol", async function () {
    expect(await token.name()).to.equal("Jmale42");
    expect(await token.symbol()).to.equal("42J");
  });

  // Test 2: Total supply assigned to owner
  it("Should assign total supply to the owner", async function () {
    const totalSupply = await token.totalSupply();
    const ownerBalance = await token.balanceOf(owner.address);
    expect(ownerBalance).to.equal(totalSupply);
  });

  // Test 3: Transfer tokens from owner to addr1
  it("Should transfer tokens between accounts", async function () {
    const amount = ethers.parseUnits("100", 18);

    // Transfer from owner to addr1
    await token.transfer(addr1.address, amount);

    // Check recipient balance
    const balance = await token.balanceOf(addr1.address);
    expect(balance).to.equal(amount);
  });
});
