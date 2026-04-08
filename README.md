# Teste de Integração 🧪

Este é um projeto simples de estudo para demonstrar como funciona um teste de integração em JavaScript. 

O objetivo do código é validar se a comunicação entre dois módulos diferentes (Autenticação e Perfil) está funcionando corretamente em conjunto.

## 🚀 Como funciona

O projeto simula dois módulos:
- **`auth.js`**: Responsável por fazer o login do usuário (simula uma consulta ao banco de dados).
- **`profile.js`**: Responsável por exibir a mensagem de boas-vindas caso o usuário esteja autenticado.

O teste de integração executa o fluxo completo: tenta fazer o login com credenciais válidas, repassa os dados para o módulo de perfil e valida se a mensagem final é a esperada.

## 💻 Como executar

Para rodar o teste na sua máquina, você só precisa ter o [Node.js](https://nodejs.org/) instalado.

1. Clone este repositório:
   ```bash
   git clone https://github.com/isjoaovictor/testeIntegracao.git
   ```

2. Entre na pasta do projeto:
   ```bash
   cd testeIntegracao
   ```

3. Execute o arquivo do teste (substitua `index.js` pelo nome do seu arquivo, caso seja diferente):
   ```bash
   node index.js
   ```

## ✅ Resultado Esperado

Se tudo estiver correto, você verá a seguinte saída no terminal:

```
Iniciando teste...
✅ Teste passou!
```