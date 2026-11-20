# landingPageParla

Landing page do **Parla!**, o app para brasileiros que estão aprendendo italiano: <https://parla-italiano-three.vercel.app/>

A página é toda em português. Ela apresenta os recursos do app (lições, áudio de pronúncia, flashcards e conversas simuladas), deixa o visitante experimentar cada um ali mesmo e leva para o app pelo botão **Começar a aprender italiano**.

Página estática (HTML, CSS e JavaScript puros): não tem build nem dependências para instalar.

## O que tem na página

- **Início:** a frase de exemplo *"Un caffè, per favore."* com a tradução "Um café, por favor.", pronúncia, áudio e o botão **Começar a aprender italiano**, que abre o app.
- **Como funciona:** os quatro recursos, no mesmo formato de cartão da tela inicial do app.
- **Lições:** a trilha com os 5 módulos do app (XP de cada um), uma frase com áudio por módulo e as medalhas.
- **Áudio:** sons do italiano que confundem brasileiros (gli, gn, ci, chi, sci, consoantes dobradas), em velocidade normal ou devagar.
- **Flashcards:** cartões que viram ao toque, nas abas "Essenciais" e "Falsos amigos".
- **Conversa:** os 4 cenários do app e uma demonstração do café em Roma, com correção na hora e o botão "Continuar conversa".
- **Chamada final:** repete o botão **Começar a aprender italiano**.

No celular aparece uma barra de abas embaixo, igual à navegação do app.

## Como abrir a página

### Opção 1: abrir o arquivo direto

Dê dois cliques no `index.html` (ou arraste o arquivo para o navegador). Tudo funciona assim, inclusive o áudio.

### Opção 2: servidor local (recomendado para revisar)

Na pasta do projeto:

```bash
python -m http.server 5500
```

Depois abra <http://localhost:5500> no navegador. Para parar o servidor, use `Ctrl+C`.

Também funciona com a extensão **Live Server** do VS Code (botão direito no `index.html` → *Open with Live Server*) ou com `npx serve .`.

### Ver no celular

- **Simulando no computador:** abra a página no Chrome ou no Edge, aperte `F12` e depois `Ctrl+Shift+M`, e escolha um aparelho (iPhone, Pixel etc.) na barra de cima.
- **No celular de verdade** (na mesma rede Wi-Fi do computador):

  ```bash
  python -m http.server 5500 --bind 0.0.0.0
  ```

  Descubra o IP do computador com `ipconfig` (linha "Endereço IPv4") e abra `http://SEU-IP:5500` no celular. Se o Windows perguntar, permita o Python no firewall.

## Como testar o simulador de conversas

1. Abra a prévia local (veja acima).
2. Vá até a seção **Conversa**: no computador, clique em "Conversa" no menu do topo; no celular, toque em "Conversa" na barra de abas.
3. O barista começa com *"Buongiorno! Cosa desidera?"*. Toque no ícone de som do balão para ouvir a fala em italiano.
4. Escolha uma resposta:
   - **Resposta errada:** a opção fica vermelha, é desativada e aparece uma explicação. Por exemplo, *"Un burro, per favore."* pede manteiga, não um café.
   - **Resposta certa:** ela entra no chat com "Resposta correta!" e aparece o botão **Continuar conversa**.
5. São 4 turnos. O contador ("Turno 1 de 4") e a barra de progresso avançam a cada um.
6. No fim aparece "Conversa concluída!", com dois botões: **Recomeçar** volta ao primeiro turno e **Praticar mais no app** abre o app numa nova aba.

Para um teste rápido, as respostas certas são, em ordem: *Un caffè, per favore.* → *No, grazie. Quanto costa?* → *Ecco a lei.* → *Grazie, altrettanto!*

## Estrutura

```text
index.html          conteúdo da página e ícones (SVG)
css/styles.css      estilos (cores, fontes, cantos e sombras em variáveis no topo)
js/main.js          áudio, flashcards, conversa e navegação
assets/favicon.svg  ícone da aba
```

## Identidade visual

A página segue o visual do app Parla!. Ele foi usado só como referência; o repositório do app não foi alterado.

- **Fontes:** Baloo 2 nos títulos e Nunito no texto (Google Fonts).
- **Cores:** paleta verde do app (fundo `#F0F9F1`, verde principal `#2A6E37`, texto `#0C2112`), coral para conversa (`#E0513A`) e âmbar para dicas, XP e medalhas.
- **Componentes:** topo em degradê verde com cartões de vidro, botão principal em degradê verde com cantos de 16px, botão secundário branco com borda verde, flashcards e balões de conversa no mesmo formato do app.

Todas as cores ficam em variáveis no topo do `css/styles.css`. Se o app mudar de cor, é só atualizar ali.

## Onde mudar cada coisa

- **Endereço do app:** os links que abrem o app têm o atributo `data-app-link` no `index.html` (cabeçalho, início e chamada final). Troque `https://parla-italiano-three.vercel.app/` nesses links. O botão do fim da conversa usa o mesmo endereço automaticamente.
- **Textos dos módulos, sons e cenários:** direto no `index.html`.
- **Flashcards e conversa de demonstração:** listas `CARDS` e `CONVERSA` no `js/main.js`.

## Sobre o áudio

O áudio usa a voz em italiano do próprio navegador (Web Speech API). Chrome e Edge já trazem uma voz italiana. No celular, depende do aparelho:

- **Android:** usa o "Speech Services by Google", que normalmente já vem com italiano.
- **iPhone:** a voz italiana pode ser baixada em *Ajustes › Acessibilidade › Conteúdo Falado › Vozes › Italiano*.

Se não houver voz italiana, a página avisa e usa a voz padrão do aparelho.

## Fluxo de trabalho

1. O desenvolvimento acontece na branch `feature/bruno-landing-page`, criada a partir de `develop`.
2. Depois da revisão, abra um pull request para `develop`.
