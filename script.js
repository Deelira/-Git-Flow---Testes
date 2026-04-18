const form = document.querySelector(".formulario");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (nome === "") {
        alert("O nome é obrigatório.");
        return;
    }

    if (email === "") {
        alert("O email é obrigatório.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um email válido.");
        return;
    }

    if (login === "") {
        alert("O login é obrigatório.");
        return;
    }

    if (senha === "") {
        alert("A senha é obrigatória.");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    alert("Cadastro realizado com sucesso!");

    form.reset();
});