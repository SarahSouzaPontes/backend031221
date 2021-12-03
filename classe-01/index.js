const comentario = "Esse COVID é muito perigoso!";
//Assim como o YouTube exclui vídeos que falem `pandemia` ou `covid`, uma rede social precisa bloquear qualquer comentário que também possua uma dessas duas palavras.
//Faça um sistema que verifique o texto de um comentário e caso exista qualquer uma das duas palavras citada anteriormente imprima: `Comentário bloqueado por conter palavras proibidas`, senão, imprima: `Comentário autorizado`.
const comentario1 = comentario.toLowerCase().includes("covid" || "pandemia")


if (comentario1 === true) {
    console.log(`Comentário bloqueado por conter palavras proibidas`)
} else {
    console.log(`Comentário autorizado`)
}