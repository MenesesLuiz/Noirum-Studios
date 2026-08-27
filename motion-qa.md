# QA final — passe de motion da Noirum Studios

## Escopo

Este passe preservou a direção visual, o conteúdo factual, a arquitetura e as ofertas da V3. As alterações foram limitadas a ritmo, presença e estados de movimento; não foram adicionados conceitos, clientes, depoimentos, métricas, preços ou resultados comerciais.

## Implementado

A hero recebeu headline em duas linhas escalonadas, com estado inicial visível, easing controlada e redução segura em `prefers-reduced-motion`. Os reveals da home e das páginas de serviço foram distribuídos entre lift, clip, side e entrada de projetos, evitando uma única animação repetida. Os projetos receberam parallax vertical leve em wrappers de mídia, limitado a Motion values e sem cursor effect.

As ofertas ganharam entrada moderada dos dois blocos; o processo e a lista de engenharia entram progressivamente para reforçar a leitura sequencial. O scan de engenharia mantém a relação scroll-linked no modo normal e, no modo reduzido, deixa o preview final estável sem a linha ou o blueprint em movimento. O template de serviço recebeu stagger de etapas e deliverables, enquanto FAQ e formulário permaneceram contidos.

Os estados iniciais dos reveals de conteúdo permanecem visíveis; a animação acrescenta deslocamento ou clip-path sem depender de opacity zero para tornar a página utilizável. O seletor da headline foi corrigido para preservar a cor branca do título sobre o hero. O container raiz recebeu posição relativa para que `useScroll` calcule offsets sem warning.

## Validação

| Verificação | Resultado |
|---|---|
| TypeScript (`tsc --noEmit`) | Passou após a última alteração |
| Build de produção (`next build`) | Passou; 8 páginas estáticas geradas |
| Rotas HTTP | 200 em `/`, `/servicos/site-institucional`, `/servicos/landing-pages`, `/privacidade`, `/termos` e `/seguranca` |
| Diff check | `git diff --check` passou |
| Detector estático | `[]` |
| Detector live | Avisos restantes são majoritariamente paleta ciano sobre dark, tipografia/tacking aprovados e labels editoriais repetidos; nenhum defeito novo de motion foi identificado |
| Console após carregamento limpo | Sem hydration mismatch, sem warning de `useScroll` e sem erro de runtime; restou apenas a mensagem informativa do React DevTools |
| Desktop | Captura da home e serviço em 1280 × 900 |
| Tablet | Captura da home em 768 × 900, com navegação mobile e hero preservado |
| Mobile | Capturas da home e serviço em 390 × 844; headline, imagem e CTAs sem clipping |
| Legal mobile | Captura de `/privacidade` em 390 × 844, legível e sem motion intrusivo |
| Reduced motion | Media query confirmada com Chromium; captura reduzida preserva conteúdo, remove deslocamento espacial e estabiliza o scan |

## Estado do repositório

As evoluções V3, refinement e motion permanecem não commitadas conforme solicitado. Artefatos temporários do build (`tsconfig.tsbuildinfo`) foram removidos e `next-env.d.ts` foi restaurado; não houve commit ou push nesta fase.
