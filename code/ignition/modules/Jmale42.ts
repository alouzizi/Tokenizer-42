import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Jmale42", (m) => {

  const deployer =  m.getAccount(0);

  const jmale = m.contract("Jmale42", [], {
    from: deployer,
  });

  return { jmale };
});
