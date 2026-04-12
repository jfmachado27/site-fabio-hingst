export default function FabioHingstSite() {
  const featuredBooks = [
    {
      title: "A Ameaça Esquecida",
      series: "Supremacia Boreal · Livro I",
      description:
        "Uma fantasia épica marcada por reinos em tensão, ameaças ancestrais e o peso de escolhas que podem redesenhar o destino de Vhalos.",
      cta: "Comprar livro",
    },
    {
      title: "As Brumas da Amargura",
      series: "Supremacia Boreal · Livro II",
      description:
        "Enquanto o mundo se fragmenta, as sombras do passado retornam e tornam cada vitória mais amarga do que parecia possível.",
      cta: "Ver detalhes",
    },
    {
      title: "Homens Sórdidos",
      series: "Trilogia dos Indignos · Livro I",
      description:
        "Uma fantasia sombria, brutal e moralmente ambígua, feita para leitores que gostam de personagens intensos e atmosferas densas.",
      cta: "Conhecer obra",
    },
  ]

  const universeItems = [
    {
      title: "Mundo e geografia",
      text: "Apresente regiões, fronteiras, impérios e ruínas antigas para tornar o universo mais vivo e memorável.",
    },
    {
      title: "Povos e facções",
      text: "Organize alianças, rivalidades, religiões, exércitos e casas para aumentar a imersão do leitor.",
    },
    {
      title: "Personagens centrais",
      text: "Dê espaço aos protagonistas, antagonistas e figuras lendárias sem entregar spoilers importantes.",
    },
  ]

  const socialProof = [
    "Comunidade engajada nas redes sociais",
    "Universos autorais com forte identidade",
    "Catálogo com potencial para combos e coleções",
  ]

  return (
    <div className="min-h-screen bg-[#090909] text-stone-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-amber-400">F. H. Hingst</p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight md:text-2xl">
              Site Oficial do Autor
            </h1>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-200 md:flex">
            <a href="#inicio" className="transition hover:text-amber-300">Início</a>
            <a href="#livros" className="transition hover:text-amber-300">Livros</a>
            <a href="#autor" className="transition hover:text-amber-300">Autor</a>
            <a href="#universo" className="transition hover:text-amber-300">Universo</a>
            <a href="#newsletter" className="transition hover:text-amber-300">Novidades</a>
            <a href="#contato" className="transition hover:text-amber-300">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(180,120,20,0.18),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]"
        >
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
            <div>
              <p className="mb-5 text-sm uppercase tracking-[0.42em] text-amber-400">Fantasia épica e sombria</p>
              <h2 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
                Mundos em ruína, poder em disputa e histórias que permanecem com o leitor.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">
                Uma presença digital mais forte para apresentar a obra de Fábio Hingst com identidade autoral, atmosfera literária e foco real em descoberta, conexão e venda.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#livros"
                  className="rounded-2xl bg-amber-400 px-7 py-4 font-semibold text-stone-950 shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5"
                >
                  Explorar livros
                </a>
                <a
                  href="#autor"
                  className="rounded-2xl border border-white/15 px-7 py-4 font-semibold transition hover:bg-white/5"
                >
                  Conhecer o autor
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {socialProof.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-stone-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-stone-800 to-stone-950 p-4 shadow-2xl shadow-black/40">
                <div className="aspect-[4/5] rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,220,140,0.15),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(0,0,0,0.35))] p-6">
                  <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/10 bg-black/25 p-8">
                    <div>
                      <p className="text-xs uppercase tracking-[0.38em] text-amber-300">Destaque da saga</p>
                      <h3 className="mt-4 text-4xl font-bold leading-tight">Supremacia Boreal</h3>
                    </div>
                    <div>
                      <p className="max-w-sm text-base leading-7 text-stone-300">
                        Hero section com capa real, chamada principal, botões de compra e apresentação imediata do universo da obra.
                      </p>
                      <button className="mt-6 rounded-2xl border border-amber-300/30 px-5 py-3 text-sm font-semibold text-amber-200 transition hover:bg-amber-300/10">
                        Comprar agora
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm font-semibold text-stone-100">Layout editorial</p>
                  <p className="mt-2 text-sm leading-6 text-stone-400">Mais sofisticação visual, melhor leitura e sensação de site oficial publicado.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm font-semibold text-stone-100">Loja orientada à conversão</p>
                  <p className="mt-2 text-sm leading-6 text-stone-400">Destaque para livros, combos, coleções e futuros produtos do autor.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="livros" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.36em] text-amber-400">Catálogo em destaque</p>
              <h3 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Livros com apresentação mais forte</h3>
            </div>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Uma vitrine elegante para valorizar a capa, reforçar o posicionamento de cada obra e facilitar o clique para compra.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredBooks.map((book) => (
              <article
                key={book.title}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]"
              >
                <div className="aspect-[4/5] border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,220,140,0.16),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(0,0,0,0.55))]" />
                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300">{book.series}</p>
                  <h4 className="mt-3 text-3xl font-semibold leading-tight">{book.title}</h4>
                  <p className="mt-4 text-base leading-7 text-stone-300">{book.description}</p>

                  <div className="mt-7 flex items-center justify-between gap-4">
                    <button className="rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10">
                      {book.cta}
                    </button>
                    <span className="text-sm text-stone-500">Loja / detalhes</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.36em] text-amber-400">Livro em evidência</p>
              <h3 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Uma página individual para vender melhor cada obra</h3>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                Cada título pode ter uma página própria com capa grande, sinopse completa, frase de impacto, informações técnicas, degustação e botões claros de compra.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/25 p-5 text-sm leading-6 text-stone-300">
                  Melhor leitura da sinopse e do universo da obra.
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/25 p-5 text-sm leading-6 text-stone-300">
                  Mais valor percebido antes do clique de compra.
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/25 p-6 shadow-2xl shadow-black/30">
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-stone-900 to-black p-7">
                <p className="text-xs uppercase tracking-[0.34em] text-amber-300">Página de obra</p>
                <h4 className="mt-4 text-3xl font-semibold">As Brumas da Amargura</h4>
                <p className="mt-4 leading-7 text-stone-300">
                  Um bloco dedicado à apresentação da obra, com identidade visual própria, chamada literária e destaque para compra imediata.
                </p>
                <div className="mt-8 flex gap-3">
                  <button className="rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-stone-950">
                    Comprar
                  </button>
                  <button className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold">
                    Ler sinopse
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="autor" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-stone-800 to-stone-950 p-4 shadow-2xl shadow-black/30">
              <div className="aspect-[4/5] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(0,0,0,0.35))]" />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.36em] text-amber-400">Sobre o autor</p>
              <h3 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Uma apresentação mais profissional e memorável</h3>
              <p className="mt-6 text-lg leading-8 text-stone-300">
                A seção do autor pode reunir biografia refinada, posicionamento literário, trajetória, presença nas redes e elementos que reforcem autoridade e identidade de marca.
              </p>
              <p className="mt-5 text-base leading-7 text-stone-400">
                Em vez de apenas informar, a proposta aqui é fazer o visitante sentir que está diante de um autor com universo sólido, catálogo próprio e visão criativa bem estabelecida.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-2xl font-bold">12 mil+</p>
                  <p className="mt-2 text-sm text-stone-400">seguidores para reforçar prova social</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-2xl font-bold">Saga própria</p>
                  <p className="mt-2 text-sm text-stone-400">universo expansível para fãs e leitores</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-2xl font-bold">Loja</p>
                  <p className="mt-2 text-sm text-stone-400">espaço pronto para produtos e combos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="universo" className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.36em] text-amber-400">Universo literário</p>
              <h3 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Um espaço que aprofunda a experiência do leitor</h3>
              <p className="mt-6 text-lg leading-8 text-stone-300">
                Para fantasia, uma área de lore ajuda muito a diferenciar o site. Ela aumenta a imersão, cria vínculo com a saga e valoriza o trabalho autoral.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {universeItems.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-white/10 bg-black/25 p-7">
                  <h4 className="text-2xl font-semibold">{item.title}</h4>
                  <p className="mt-4 leading-7 text-stone-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="newsletter" className="mx-auto max-w-7xl px-6 py-24">
          <div className="rounded-[2.2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,220,140,0.1),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.36em] text-amber-400">Novidades e bastidores</p>
                <h3 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Mantenha leitores por perto entre um lançamento e outro</h3>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                  Área para newsletter, novos capítulos, agenda de eventos, atualizações de obras e chamadas para seguir o autor nas redes.
                </p>
              </div>

              <div className="rounded-[1.8rem] border border-white/10 bg-black/25 p-6">
                <label className="text-sm font-medium text-stone-300">Seu e-mail</label>
                <input
                  type="email"
                  placeholder="nome@exemplo.com"
                  className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-stone-100 outline-none placeholder:text-stone-500"
                />
                <button className="mt-4 w-full rounded-2xl bg-amber-400 px-5 py-4 font-semibold text-stone-950 transition hover:brightness-105">
                  Receber novidades
                </button>
                <p className="mt-4 text-sm leading-6 text-stone-500">
                  Também pode virar uma área de destaque para Instagram, TikTok, agenda e futuros lançamentos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" className="border-t border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-amber-400">F. H. Hingst</p>
            <h4 className="mt-3 text-2xl font-semibold">Fantasia épica e sombria com identidade própria</h4>
          </div>

          <div>
            <p className="text-sm font-semibold text-stone-100">Navegação</p>
            <ul className="mt-4 space-y-3 text-stone-400">
              <li><a href="#livros" className="hover:text-amber-300">Livros</a></li>
              <li><a href="#autor" className="hover:text-amber-300">Sobre o autor</a></li>
              <li><a href="#universo" className="hover:text-amber-300">Universo</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-stone-100">Contato e redes</p>
            <p className="mt-4 text-stone-400">Instagram, TikTok, e-mail profissional e links de compra podem entrar aqui no rodapé final.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
