const nomeDoUsuario = prompt('Digite o seu nome completo:');
document.body.innerHTML += `<p>Seu nome é <b>${nomeDoUsuario}</b></p>`;
document.body.innerHTML += `<p>Seu nome tem <b>${nomeDoUsuario.replaceAll(' ', '').length}</b> caracteres</p>`;
document.body.innerHTML += `<p>A segunda letra do seu nome é <b>${nomeDoUsuario[1]}</b></p>`;
document.body.innerHTML += `<p>Qual o primeiro índice da letra a no seu nome? <b>${nomeDoUsuario.indexOf('a')}</b></p>`;
document.body.innerHTML += `<p>Qual o último índice da letra a no seu nome? <b>${nomeDoUsuario.lastIndexOf('a')}</b></p>`;
document.body.innerHTML += `<p>As últimas três letras do seu nome são <b>${nomeDoUsuario.slice(-3)}</b></p>`;
document.body.innerHTML += `<p>As palavras do seu nome são <b>${nomeDoUsuario.split(' ')}</b></p>`;
document.body.innerHTML += `<p>Seu nome com letras maiúsculas <b>${nomeDoUsuario.toUpperCase()}</b></p>`;
document.body.innerHTML += `<p>Seu nome com letras minúsculas <b>${nomeDoUsuario.toLowerCase()}</b></p>`;


// referência com os métodos de string https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Strings