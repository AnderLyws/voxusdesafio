/**
 * Método responsável por criar um token único aleatório, a partir de números e letras aleatórios.
 * @param {int} size Quantidade de caracteres que o seu token final terá
 * @return {string} lucky Token aleatório após ter sido gerado 
 */
function generateToken(size)
{
    const cases = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var lucky = '';
    // Generate random token
    for(var index=0;index<size;index++) {
        lucky += cases[Math.floor(Math.random() * cases.length)];
    }

    lucky += $.now();

    return lucky;
}