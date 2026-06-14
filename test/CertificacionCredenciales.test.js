const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CertificacionCredenciales", function () {
  async function desplegarContrato() {
    const [owner, emisor, usuarioNoAutorizado] = await ethers.getSigners();

    const Certificacion = await ethers.getContractFactory("CertificacionCredenciales");
    const contrato = await Certificacion.deploy();

    return { contrato, owner, emisor, usuarioNoAutorizado };
  }

  it("debe desplegar el contrato correctamente", async function () {
    const { contrato, owner } = await desplegarContrato();

    expect(await contrato.owner()).to.equal(owner.address);
  });

  it("debe permitir emitir y validar un certificado", async function () {
    const { contrato } = await desplegarContrato();

    const codigo = "CERT-001";
    const hashCertificado = ethers.keccak256(ethers.toUtf8Bytes("certificado academico"));
    const hashTitular = ethers.keccak256(ethers.toUtf8Bytes("titular del certificado"));

    await contrato.emitirCertificado(codigo, hashCertificado, hashTitular);

    const esValido = await contrato.validarCertificado(
      codigo,
      hashCertificado,
      hashTitular
    );

    expect(esValido).to.equal(true);
  });

  it("debe rechazar un certificado con hash incorrecto", async function () {
    const { contrato } = await desplegarContrato();

    const codigo = "CERT-002";
    const hashCertificado = ethers.keccak256(ethers.toUtf8Bytes("certificado correcto"));
    const hashTitular = ethers.keccak256(ethers.toUtf8Bytes("titular correcto"));
    const hashIncorrecto = ethers.keccak256(ethers.toUtf8Bytes("certificado alterado"));

    await contrato.emitirCertificado(codigo, hashCertificado, hashTitular);

    const esValido = await contrato.validarCertificado(
      codigo,
      hashIncorrecto,
      hashTitular
    );

    expect(esValido).to.equal(false);
  });

  it("debe permitir revocar un certificado", async function () {
    const { contrato } = await desplegarContrato();

    const codigo = "CERT-003";
    const hashCertificado = ethers.keccak256(ethers.toUtf8Bytes("certificado"));
    const hashTitular = ethers.keccak256(ethers.toUtf8Bytes("titular"));

    await contrato.emitirCertificado(codigo, hashCertificado, hashTitular);
    await contrato.revocarCertificado(codigo);

    const esValido = await contrato.validarCertificado(
      codigo,
      hashCertificado,
      hashTitular
    );

    expect(esValido).to.equal(false);
  });

  it("no debe permitir emitir certificados a un usuario no autorizado", async function () {
    const { contrato, usuarioNoAutorizado } = await desplegarContrato();

    const codigo = "CERT-004";
    const hashCertificado = ethers.keccak256(ethers.toUtf8Bytes("certificado"));
    const hashTitular = ethers.keccak256(ethers.toUtf8Bytes("titular"));

    await expect(
      contrato.connect(usuarioNoAutorizado).emitirCertificado(
        codigo,
        hashCertificado,
        hashTitular
      )
    ).to.be.revertedWith("Emisor no autorizado");
  });
});