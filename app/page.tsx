export default function FabioHingstStore() {
  const books = [
    {
      title: "A Ameaça Esquecida",
      series: "Supremacia Boreal · Livro I",
      image: "/livro1.png",
      accentText: "text-sky-400",
      accentBorder: "border-sky-400/30",
      accentButton: "bg-sky-400 text-stone-950 hover:brightness-110",
      accentGlow: "shadow-sky-500/10",
      price: "A partir de R$ 9,99",
      description:
        "Fantasia épica com reinos em tensão, ameaças ancestrais e escolhas capazes de redesenhar o destino de Vhalos.",
      physicalLink:
        "https://bibliotecadacasinha.lojavirtualnuvem.com.br/produtos/a-ameaca-esquecida-supremacia-boreal-livro-1/",
      ebookLink:
        "https://www.amazon.com.br/Amea%C3%A7a-Esquecida-Supremacia-Boreal-Primevo-ebook/dp/B0DJV2QM51/ref=sr_1_1?crid=1G2U7RQTT2XJG&dib=eyJ2IjoiMSJ9.yXlS4VnEUkenLw2s7vI63BlX3O3vAgrhbgpQGeuA8qFFl-GqxQGFyegXAvC8QO1upGKdk4vCVam962p8M3_CtkiqNKaQXOaICis5M8V4KOf4uczjG6-sXHWz1c-sMnZPZwdvTTH2l_M__86LeFvPYs6zblQquoPJG6uvqKdBHgPn4nlnxds3gmIOudnpXaxaz_Ju0UKYTBIOMeMFfqeDkFyXdJFXqjbLhAIsE080FHjrHfHVu1vHV_NV6pXpRZ08UFZV54MkdkgFnsIzNKWJ_6MqevM2RauHoE7psto6MfY.jPTELFEdDwTsKnL7h7rGW2SUzpNWFuwjl4JJGQC1Nsk&dib_tag=se&keywords=a+amea%C3%A7a+esquecida&qid=1776023177&sprefix=amea%C3%A7a+esque%2Caps%2C212&sr=8-1",
      badge: "Azul",
    },
    {
      title: "As Brumas da Amargura",
      series: "Supremacia Boreal · Livro II",
      image: "/livro2.png",
      accentText: "text-red-500",
      accentBorder: "border-red-500/30",
      accentButton: "bg-red-500 text-white hover:brightness-110",
      accentGlow: "shadow-red-500/10",
      price: "A partir de R$ 9,99",
      description:
        "As sombras do passado retornam e tornam cada avanço mais custoso em uma jornada ainda mais sombria.",
      physicalLink:
        "https://bibliotecadacasinha.lojavirtualnuvem.com.br/produtos/as-brumas-da-amargura-supremacia-boreal-livro-2/",
      ebookLink:
        "https://www.amazon.com.br/AS-BRUMAS-AMARGURA-Supremacia-Primevo-ebook/dp/B0G117FK9Y?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.59u8vUqm_HLzAqMmqxsMLstBLPs4W30mWkjYmeOzue8.B7PWr6ov_oM64Ttvy4ELEpAsiHfMOLCqMqau7yN77W0&dib_tag=AUTHOR",
      badge: "Vermelho",
    },
    {
      title: "Homens Sórdidos",
      series: "Trilogia dos Indignos · Livro I",
      image: "/livro3.png",
      accentText: "text-amber-400",
      accentBorder: "border-amber-400/30",
      accentButton: "bg-amber-400 text-stone-950 hover:brightness-110",
      accentGlow: "shadow-amber-500/10",
      price: "A partir de R$ 9,99",
      description:
        "Fantasia sombria, brutal e moralmente ambígua para leitores que gostam de atmosferas densas e personagens intensos.",
      physicalLink: "https://editoraperensin.com.br/produto/homens-sordidos/",
      ebookLink:
        "https://www.amazon.com.br/Homens-S%C3%B3rdidos-trilogia-dos-indignos-ebook/dp/B09SQF4D3N/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3TOBQ3LYHBGVC&dib=eyJ2IjoiMSJ9.fq1N_sC5j8EEgt5x43cbTH2QGu2_Y5e6Fgbu-mhEkY65W6JPV58x7c8cyDCkY1AjEpNyBIA9ZHhQOhUWks5pvXaKs_UgJikqGXShxPRQ02damZjHXZ0KI-_S8UPwV4QncaLbKPXigPgPVVAEUuWyCXF4l0aumoRQzyIz4T21Gx4.G9nYXUdrPQgMWbycHAedSOoNtuXW0MVl9x8kvzKRnIc&dib_tag=se&keywords=homens+sordidos&qid=1776023595&s=digital-text&sprefix=homens+sordidos%2Cdigital-text",
      badge: "Dourado",
    },
    {
      title: "Combo Supremacia Boreal",
      series: "Livro I + Livro II · Combo com desconto",
      image: "/combo.png",
      accentText: "text-violet-400",
      accentBorder: "border-violet-400/30",
      accentButton: "bg-violet-400 text-black hover:brightness-110",
      accentGlow: "shadow-violet-500/10",
      price: "Oferta especial",
      description:
        "Leve os dois primeiros volumes da saga em uma compra só, com apelo promocional e ótimo ponto de entrada para novos leitores.",
      physicalLink:
        "https://bibliotecadacasinha.lojavirtualnuvem.com.br/produtos/combo-supremacia-boreal-livro-1-e-2/",
      ebookLink: "#livros",
      badge: "Combo",
      featured: true,
    },
  ]

  const benefits = [
    {
      title: "Compra simples",
      text: "Estrutura pronta para depois integrar checkout e pagamento com PegBank.",
    },
    {
      title: "Conta do leitor",
      text: "Área visual de login, cadastro e pedidos já pensada como e-commerce real.",
    },
    {
      title: "Vitrine premium",
      text: "Capas em destaque, botões claros e atmosfera literária mais elegante.",
    },
  ]

  const quickLinks = [
    "Home",
    "Livros",
    "Combos",
    "Minha Conta",
    "Carrinho",
    "Contato",
  ]

  return (
    <div className="min-h-screen bg-[#090909] text-stone-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-amber-400">
              F. H. Hingst
            </p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight md:text-2xl">
              Loja Oficial do Autor
            </h1>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-medium text-stone-300 lg:flex">
            <a href="#inicio" className="transition hover:text-white">
              Home
            </a>
            <a href="#livros" className="transition hover:text-white">
              Livros
            </a>
            <a href="#combo" className="transition hover:text-white">
              Combo
            </a>
            <a href="#autor" className="transition hover:text-white">
              Autor
            </a>
            <a href="#contato" className="transition hover:text-white">
              Contato
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#login"
              className="rounded-2xl border border-white/10 px-4 py-2 text-sm font-medium text-stone-200 transition hover:bg-white/5"
            >
              Entrar
            </a>
            <a
              href="#cadastro"
              className="rounded-2xl border border-white/10 px-4 py-2 text-sm font-medium text-stone-200 transition hover:bg-white/5"
            >
              Cadastrar
            </a>
            <a
              href="#carrinho"
              className="rounded-2xl bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Carrinho (0)
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(180,120,20,0.18),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
            <div>
              <p className="mb-5 text-sm uppercase tracking-[0.42em] text-amber-400">
                E-commerce literário
              </p>
              <h2 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
                Uma loja elegante para apresentar, vender e valorizar cada obra.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">
                Estrutura de loja com login, carrinho, vitrine de produtos e
                espaço preparado para futuras integrações de pagamento e gestão
                de pedidos.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#livros"
                  className="rounded-2xl bg-amber-400 px-7 py-4 font-semibold text-stone-950 shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5"
                >
                  Comprar livros
                </a>
                <a
                  href="#cadastro"
                  className="rounded-2xl border border-white/15 px-7 py-4 font-semibold transition hover:bg-white/5"
                >
                  Criar conta
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {benefits.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <p className="text-sm font-semibold text-stone-100">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-stone-400">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/30">
                <div className="grid gap-4 sm:grid-cols-2">
                  {quickLinks.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-sm font-medium text-stone-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-stone-900 to-black p-6 shadow-2xl shadow-black/30">
                <p className="text-xs uppercase tracking-[0.36em] text-amber-300">
                  Destaque da loja
                </p>
                <h3 className="mt-4 text-3xl font-semibold">
                  Combo Supremacia Boreal
                </h3>
                <p className="mt-4 leading-7 text-stone-300">
                  Um bloco hero já com cara de e-commerce: promoção em destaque,
                  CTA principal e foco imediato em conversão.
                </p>
                <a
                  href="https://bibliotecadacasinha.lojavirtualnuvem.com.br/produtos/combo-supremacia-boreal-livro-1-e-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-2xl bg-violet-400 px-5 py-3 font-semibold text-black transition hover:brightness-110"
                >
                  Comprar combo
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="livros"
          className="mx-auto max-w-7xl px-6 py-24"
        >
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.36em] text-amber-400">
                Catálogo
              </p>
              <h3 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Livros e ofertas em destaque
              </h3>
            </div>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Uma vitrine com cara de loja real: capas fortes, preço, botões de
              compra e estrutura pronta para expandir depois com carrinho e
              checkout integrado.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {books.map((book) => (
              <article
                key={book.title}
                id={book.title.includes("Combo") ? "combo" : undefined}
                className={`group overflow-hidden rounded-[2rem] border bg-white/[0.03] shadow-xl transition duration-300 hover:-translate-y-1 ${book.accentBorder} ${book.accentGlow} ${
                  book.featured ? "ring-1 ring-white/10" : "border-white/10"
                }`}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="aspect-[4/5] w-full border-b border-white/10 object-cover"
                />

                <div className="p-7">
                  <div className="flex items-start justify-between gap-3">
                    <p className={`text-xs uppercase tracking-[0.3em] ${book.accentText}`}>
                      {book.series}
                    </p>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-stone-300">
                      {book.badge}
                    </span>
                  </div>

                  <h4 className="mt-3 text-3xl font-semibold leading-tight">
                    {book.title}
                  </h4>

                  <p className="mt-3 text-sm font-medium text-stone-400">
                    {book.price}
                  </p>

                  <p className="mt-4 text-base leading-7 text-stone-300">
                    {book.description}
                  </p>

                  <div className="mt-7 flex flex-col gap-3">
                    <a
                      href={book.physicalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-2xl px-5 py-3 text-center text-sm font-semibold transition ${book.accentButton}`}
                    >
                      Comprar agora
                    </a>

                    <a
                      href={book.ebookLink}
                      target={book.ebookLink.startsWith("#") ? "_self" : "_blank"}
                      rel={book.ebookLink.startsWith("#") ? undefined : "noopener noreferrer"}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-stone-100 transition hover:bg-white/10"
                    >
                      Ver opção digital
                    </a>

                    <button className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-stone-300 transition hover:bg-white/5">
                      Adicionar ao carrinho
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-3">
            <div
              id="login"
              className="rounded-[2rem] border border-white/10 bg-black/25 p-7"
            >
              <p className="text-xs uppercase tracking-[0.34em] text-amber-300">
                Área do cliente
              </p>
              <h4 className="mt-4 text-2xl font-semibold">Entrar</h4>
              <p className="mt-4 leading-7 text-stone-300">
                Espaço visual reservado para login do leitor acompanhar compras,
                histórico e dados da conta.
              </p>
              <button className="mt-6 rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold transition hover:bg-white/15">
                Acessar conta
              </button>
            </div>

            <div
              id="cadastro"
              className="rounded-[2rem] border border-white/10 bg-black/25 p-7"
            >
              <p className="text-xs uppercase tracking-[0.34em] text-amber-300">
                Novo cliente
              </p>
              <h4 className="mt-4 text-2xl font-semibold">Criar cadastro</h4>
              <p className="mt-4 leading-7 text-stone-300">
                Área preparada para registrar nome, e-mail, senha e dados do
                comprador antes da integração completa do e-commerce.
              </p>
              <button className="mt-6 rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:brightness-105">
                Criar conta
              </button>
            </div>

            <div
              id="carrinho"
              className="rounded-[2rem] border border-white/10 bg-black/25 p-7"
            >
              <p className="text-xs uppercase tracking-[0.34em] text-amber-300">
                Checkout
              </p>
              <h4 className="mt-4 text-2xl font-semibold">Carrinho</h4>
              <p className="mt-4 leading-7 text-stone-300">
                Visual de carrinho pronto para futuramente receber produtos,
                subtotal, frete e integração com PegBank.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-stone-300">
                Seu carrinho está vazio.
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
              <p className="text-sm uppercase tracking-[0.36em] text-amber-400">
                Sobre o autor
              </p>
              <h3 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Uma presença mais forte, literária e profissional
              </h3>
              <p className="mt-6 text-lg leading-8 text-stone-300">
                A proposta une atmosfera de fantasia sombria com estrutura de
                loja digital, criando uma experiência mais convincente para
                leitores e compradores.
              </p>
              <p className="mt-5 text-base leading-7 text-stone-400">
                O site pode crescer depois para incluir área do cliente, pedidos,
                newsletters, promoções, cupons e integração completa de checkout.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-2xl font-bold">12 mil+</p>
                  <p className="mt-2 text-sm text-stone-400">
                    seguidores e comunidade engajada
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-2xl font-bold">Loja própria</p>
                  <p className="mt-2 text-sm text-stone-400">
                    estrutura pronta para escalar
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-2xl font-bold">Catálogo</p>
                  <p className="mt-2 text-sm text-stone-400">
                    livros, combos e futuras coleções
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" className="border-t border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-amber-400">
              F. H. Hingst
            </p>
            <h4 className="mt-3 text-2xl font-semibold">
              Loja oficial de fantasia épica e sombria
            </h4>
          </div>

          <div>
            <p className="text-sm font-semibold text-stone-100">Navegação</p>
            <ul className="mt-4 space-y-3 text-stone-400">
              <li>
                <a href="#livros" className="hover:text-amber-300">
                  Livros
                </a>
              </li>
              <li>
                <a href="#combo" className="hover:text-amber-300">
                  Combo
                </a>
              </li>
              <li>
                <a href="#cadastro" className="hover:text-amber-300">
                  Cadastro
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-stone-100">
              Contato e redes
            </p>
            <p className="mt-4 text-stone-400">
              Instagram, TikTok, e-mail profissional, suporte ao cliente e links
              institucionais podem entrar aqui.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}