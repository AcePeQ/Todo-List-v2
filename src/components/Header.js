function Header() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return (
    <header className="header">
      <h1 className="header__title">
        <span className="header__highlight">To</span>do List
      </h1>

      <span className="date">
        Today's date: {day}-{month}-{year}
      </span>
    </header>
  );
}

export default Header;
