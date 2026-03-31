import "./index.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <span>Drip Store</span>
        </div>

        {/* Busca */}
        <div className="search">
          <input type="text" placeholder="Pesquisar produto..." />
        </div>

        {/* Navegação */}
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/products">Produtos</a>
          <a href="#">Categorias</a>
          <a href="#">Meus Pedidos</a>
        </nav>

        {/* Ações */}
        <div className="actions">
          <button className="login">Entrar</button>
          <button className="cart">🛒</button>
        </div>
      </div>
    </header>
  );
}
