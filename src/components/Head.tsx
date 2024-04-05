import "./Head.css";
function Head() {
  return (
    <header>
      <span className="spanHead"></span>
      <h1 className="poppins-bold">ALERTS</h1>
      <div className="searchbar">
        <div className="search-toggle">
          <input type="text" placeholder="Search By..." />
          <i className="fa fa-search"></i>
        </div>
      </div>
      <div className="notification">
        <i className="fa fa-bell" aria-hidden="true"></i>
        <span className="notify-badge">10</span>
      </div>
    </header>
  );
}

export default Head;
