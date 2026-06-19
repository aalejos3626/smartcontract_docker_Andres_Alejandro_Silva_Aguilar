// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CertificacionCredenciales {
    address public owner;

    enum EstadoCertificado {
        Activo,
        Revocado
    }

    struct Certificado {
        bytes32 hashCertificado;
        bytes32 hashTitular;
        address emisor;
        uint256 fechaEmision;
        EstadoCertificado estado;
        bool existe;
    }

    mapping(address => bool) public emisoresAutorizados;
    mapping(string => Certificado) private certificados;

    event EmisorAutorizado(address emisor, bool autorizado);
    event CertificadoEmitido(string codigo, address emisor);
    event CertificadoRevocado(string codigo, address emisor);

    modifier soloOwner() {
        require(msg.sender == owner, "Solo el owner puede ejecutar esta accion");
        _;
    }

    modifier soloEmisorAutorizado() {
        require(emisoresAutorizados[msg.sender], "Emisor no autorizado");
        _;
    }

    constructor() {
        owner = msg.sender;
        emisoresAutorizados[msg.sender] = true;
    }

    function autorizarEmisor(address emisor, bool autorizado) public soloOwner {
        emisoresAutorizados[emisor] = autorizado;
        emit EmisorAutorizado(emisor, autorizado);
    }

    function emitirCertificado(
        string memory codigo,
        bytes32 hashCertificado,
        bytes32 hashTitular
    ) public soloEmisorAutorizado {
        require(!certificados[codigo].existe, "El certificado ya existe");

        certificados[codigo] = Certificado({
            hashCertificado: hashCertificado,
            hashTitular: hashTitular,
            emisor: msg.sender,
            fechaEmision: block.timestamp,
            estado: EstadoCertificado.Activo,
            existe: true
        });

        emit CertificadoEmitido(codigo, msg.sender);
    }

    function validarCertificado(
        string memory codigo,
        bytes32 hashCertificado,
        bytes32 hashTitular
    ) public view returns (bool) {
        Certificado memory certificado = certificados[codigo];

        if (!certificado.existe) {
            return false;
        }

        if (certificado.estado != EstadoCertificado.Activo) {
            return false;
        }

        return (
            certificado.hashCertificado == hashCertificado &&
            certificado.hashTitular == hashTitular
        );
    }

    function revocarCertificado(string memory codigo) public soloEmisorAutorizado {
        require(certificados[codigo].existe, "El certificado no existe");
        require(certificados[codigo].emisor == msg.sender, "Solo el emisor puede revocar");

        certificados[codigo].estado = EstadoCertificado.Revocado;

        emit CertificadoRevocado(codigo, msg.sender);
    }

    function consultarCertificado(string memory codigo)
        public
        view
        returns (
            bytes32 hashCertificado,
            bytes32 hashTitular,
            address emisor,
            uint256 fechaEmision,
            EstadoCertificado estado,
            bool existe
        )
    {
        Certificado memory certificado = certificados[codigo];

        return (
            certificado.hashCertificado,
            certificado.hashTitular,
            certificado.emisor,
            certificado.fechaEmision,
            certificado.estado,
            certificado.existe
        );
    }
}