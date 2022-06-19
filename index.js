const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")

const respostas = [
  "Tudo indica com certeza que você é corno(a) mesmo. Agora basta investigar pra provar ou contratar um detetive.",
  "Tudo indica com certeza que você é corno(a) mesmo.",
  "Parabéns! Você é corno(a)",
  "Parabéns! Você não é corno(a)",
  "Vish... Está sendo corno(a)",
  "Não precisa nem dizer, né?",
  "Corno(a) conformado!",
  "Já foi corno(a)",
  "Tudo indica que sim.",

  "Tudo indica que não.",
  "Tudo indica que você não é corno(a)",
  "Parabéns! Você não é corno(a)",
  "Parceiro(a) fiel",
  "Se não foi, será",
  "Ainda não foi corno(a)",
]

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite o nome do(a) namorado(a)")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aletorio
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 10000)
}