function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Limpar mensagens de erro anteriores
    errorMessage.textContent = '';

    // Validação simples
    if (name.length < 3) {
        errorMessage.textContent = 'O nome deve ter pelo menos 3 caracteres.';
        return false;
    }
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Email inválido.';
        return false;
    }
    if (password.length < 6) {
        errorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        return false;
    }

    // Segurança dos cookies
    document.cookie = "username=" + encodeURIComponent(name) + "; path=/; secure; SameSite=Strict";

    alert('Cadastro realizado com sucesso!');
    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
