const { ethers } = require("hardhat");

async function main() {
  const Certificacion = await ethers.getContractFactory("CertificacionCredenciales");
  const contrato = await Certificacion.deploy();

  const codigo = "CERT-DEMO-001";
  const hashCertificado = ethers.keccak256(ethers.toUtf8Bytes("certificado demo"));
  const hashTitular = ethers.keccak256(ethers.toUtf8Bytes("titular demo"));

  await contrato.emitirCertificado(codigo, hashCertificado, hashTitular);

  const esValido = await contrato.validarCertificado(
    codigo,
    hashCertificado,
    hashTitular
  );

  console.log("Contrato desplegado correctamente");
  console.log("Certificado emitido:", codigo);
  console.log("Certificado valido:", esValido);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});