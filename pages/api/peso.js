export default function handler(req, res) {
  const { user = "Jogador" } = req.query;

  // sorteia peso entre 35 e 400
  const peso = Math.floor(Math.random() * (200 - 35 + 1)) + 35;

  let mensagem = "";
  if (peso <= 55) {
    mensagem = "Você tem um peso de um coelho 🐇";
  } else if (peso <= 98) {
    mensagem = "Não tenho nada a dizer 🤐";
  } else {
    mensagem = "Eita p0urr# olha um planeta na minha frente 🌍";
  }

  const resultado = `⚖️ ${user} pesa ${peso} kg, ${mensagem}`;

  res.status(200).send(resultado);
}
