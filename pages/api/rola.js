export default function handler(req, res) {
  const { user = "Jogador", max = 20, morte, neutro, dano } = req.query;

  const limite = parseInt(max) || 20;
  const r = Math.floor(Math.random() * limite) + 1;

  const msgMorte = morte || "MORREU ❌";
  const msgNeutro = neutro || "não causou dano mas também não levou 🔄";
  const msgDano = dano || "causou DANO 💥";

  let resultado = "";
  if (r < 5) {
    resultado = `🎲 ${user} rolou ${r} e ${msgMorte}`;
  } else if (r <= 10) {
    resultado = `🎲 ${user} rolou ${r} e ${msgNeutro}`;
  } else {
    resultado = `🎲 ${user} rolou ${r} e ${msgDano}`;
  }

  res.status(200).send(resultado);
}