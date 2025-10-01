# Meu Bot 🎲

Este é um bot simples para rolagem de dados, pronto para ser deployado no **Vercel**.

## Uso

Suba este projeto no GitHub, conecte ao Vercel e ele criará uma API em:

```
https://seu-projeto.vercel.app/api/rola?user=Kaiser&max=20
```

## Parâmetros

- `user`: nome do jogador (padrão: Jogador)
- `max`: número máximo do dado (padrão: 20)
- `morte`: mensagem para quando morrer (padrão: "MORREU ❌")
- `neutro`: mensagem neutra (padrão: "não causou dano mas também não levou 🔄")
- `dano`: mensagem para dano (padrão: "causou DANO 💥")

---

Exemplo:
```
https://seu-projeto.vercel.app/api/rola?user=Joao&max=12&morte=perdeu&neutro=passou&dano=arrasou
```
