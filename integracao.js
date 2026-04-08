// auth.js
function login(usuario, senha) {
    if (usuario === "admin" && senha === "1234") {
        return { id: 1, nome: "Administrador" };
    }
    
    return null;
}

// profile.js
function getPerfil(usuario) {
    if (!usuario) {
        return "Usuário não autenticado";
    }
    
    return `Bem-vindo, ${usuario.nome}`;
}

// Teste de integração
function testeIntegracao() {
    console.log("Iniciando teste...");
 
    const usuarioLogado = login("admin", "1234");
    const mensagemPerfil = getPerfil(usuarioLogado);

    if (mensagemPerfil === "Bem-vindo, Administrador") {
        console.log("Teste passou!");
    } else {
        console.log("Teste falhou!");
    }
}

testeIntegracao();