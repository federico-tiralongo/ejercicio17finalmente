function App() {
  const categoria = [
    "Noticias de deporte",
    "Noticias de ocio",
    "Noticias de cultura",
    "Noticias de fiestas",
    "Noticias de politica",
    "Noticias de arregloCommit",
  ];
  const otraCosa = [
    { id: 1, cosa: "Nosequé" },
    { id: 2, cosa: "Talycual" },
    { id: 3, cosa: "Nosecuánto" },
  ];
  const textoFooter = "Texto del footer";
  const copirights = true;
  const textoCuerpo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam, iusto omnis minima corrupti est officiis natus nam,adipisci commodi quo autem magnam sequi magni odio solutatemporibus velit qua";

  return (
    <>
      <div className="container">
        <header className="cabecera text-white row align-items-center">
          <h1 className="col m-0">Título</h1>
          <nav className="col text-right">
            <ul className="links-navegacion list-inline m-0">
              <li className="list-inline-item">Buenas a todos</li>
            </ul>
          </nav>
        </header>
        <div className="contenedor-principal row">
          <main className="principal col-12 col-sm-7 col-md-8 py-4">
            <h2>Titulo de la noticia</h2>
            <p>{textoCuerpo}</p>
            <p>{textoCuerpo}</p>
            <p>{textoCuerpo}</p>
          </main>
          <aside className="sidebar col-12 col-sm-5 col-md-4 py-4">
            <section className="listado">
              <h3>Categorías</h3>
              <ul className="list-unstyled">
                {categoria.map((categoria) => (
                  <li key={categoria.id}>{categoria.noticia}</li>
                ))}
              </ul>
            </section>
            <section className="listado">
              <h3>Otras cosas</h3>
              <ul className="list-unstyled">
                {otraCosa.map((cosa) => (
                  <li key={cosa.id}>{cosa.cosa}</li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
        <footer className="footer text-white row align-items-center">
          <p className="col text-center">
            {textoFooter} {copirights && "copias todo lo que te da la gana"}
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;