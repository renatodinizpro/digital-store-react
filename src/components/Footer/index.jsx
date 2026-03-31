import "./index.css";

export default function Footer() {
  const informations = [
    { text: "Sobre a Drip Store", link: "/about" },
    { text: "Segurança", link: "/security" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe conosco", link: "/jobs" },
    { text: "Meus pedidos", link: "/orders" },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo e descrição */}
        <div className="footer-brand">
          <img
            src={new URL("../../assets/logo-footer.svg", import.meta.url).href}
            alt="Drip Store"
            className="footer-logo"
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="footer-social">
            <img src="/icons/facebook.svg" alt="Facebook" />
            <img src="/icons/instagram.svg" alt="Instagram" />
            <img src="/icons/twitter.svg" alt="Twitter" />
          </div>
        </div>

        {/* Informações */}
        <div className="footer-info">
          <h4>Informações</h4>
          <ul>
            {informations.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copy">© {new Date().getFullYear()} Digital Store</p>
    </footer>
  );
}
