//DESAFIO DO HEROI

// Definindo o nome e a quantidade de experiência (XP) do herói
let nomeDoHeroi = "Hulck";
let experienciaDoHeroi = 4500;
let nivel;

if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000) {
    nivel = "Bronze";
} else if (experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000) {
    nivel = "Prata";
} else if (experienciaDoHeroi >= 6001 && experienciaDoHeroi <= 7000) {
    nivel = "Ouro";
} else if (experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000) {
    nivel = "Platina";
} else if (experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000) {
    nivel = "Ascendente";
} else if (experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibindo a mensagem com o nome e o nível do herói
console.log("O Herói de nome" + nomeDoHeroi  + "está no nível de" + nivel);
