import "./style.css";

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className="footer">
      <p>
        Donatella &copy; derechos reservados {fullYear}
      </p>
    </footer>
  );
};

export default Footer;