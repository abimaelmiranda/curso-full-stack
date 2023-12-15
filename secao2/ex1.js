 const nome = `Abimael `;
 const sobrenome = `Miranda`;
 const peso = 56.00;
 const idade = 19;
 const altura = 1.65;

 let imc = peso / (altura ** 2);
 const data = new Date; 
 const anoAtual = data.getFullYear();

 let anoNascimento = anoAtual - idade;

 console.log(`${nome + sobrenome} tem ${idade} anos, nasceu em ${anoNascimento}, pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${imc}`)
