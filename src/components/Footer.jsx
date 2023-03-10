function Footer() {
  return (
    <footer className="page-footer green darken-1">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
        </div>
      </div>
    </footer>
  );
}

export { Footer };
