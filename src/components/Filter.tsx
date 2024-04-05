import "./Filter.css";

function Filter() {
  return (
    <div className="filter">
      <h2 className="poppins-semibold">Filters</h2>
      <div className="row">
        <h4 className="poppins-semibold">Filters Applied</h4>
        <h4 className="poppins-semibold">Clear All</h4>
      </div>
      <div className="selectedFilters">
        <div
          className="filterChip poppins-regular"
          style={{ color: "black", fontSize: "13px" }}
        >
          Real Estate
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>

      <div className="filterSelection">
        <div className="content">
          <h2 className="poppins-regular" style={{ fontSize: "15px" }}>
            Stock
          </h2>
          <div className="searchbar-small">
            <div className="search-toggle">
              <input type="text" placeholder="$ Ticker" />
              <i className="fa fa-search"></i>
            </div>
          </div>
        </div>
        <h2 className="poppins-regular" style={{ fontSize: "15px" }}>
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
          Industry
        </h2>
        <div className="industrySelection">
          <span />
          <ul className="poppins-regular-small">
            <li>
              <i className="fa fa-search"></i>
              Health Care
            </li>
            <li>
              <i className="fa fa-search"></i>
              Materials
            </li>
            <li>
              {" "}
              <i className="fa fa-search"></i>
              Energy
            </li>
            <li>
              {" "}
              <i className="fa fa-search"></i>
              Consumer Discretionary
            </li>
            <li>
              {" "}
              <i className="fa fa-search"></i>
              Consumer Staples
            </li>
            <li>
              {" "}
              <i className="fa fa-search"></i>
              Real Estate
            </li>
          </ul>
          <span />
          <ul className="poppins-regular-small">
            <li>
              {" "}
              <i className="fa fa-search"></i>
              IT
            </li>
            <li>
              {" "}
              <i className="fa fa-search"></i>
              Communication
            </li>
            <li>
              {" "}
              <i className="fa fa-search"></i>
              Industrials
            </li>
            <li>
              {" "}
              <i className="fa fa-search"></i>
              Utilities
            </li>
            <li>
              {" "}
              <i className="fa fa-search"></i>
              Financials
            </li>
          </ul>
        </div>
        <div className="radioSelection">
          <div className="sectionLeft">
            <h2 className="poppins-regular" style={{ fontSize: "15px" }}>
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
              Market Cap
            </h2>
            <label>
              <input
                type="radio"
                name="reply"
                value="male"
                className="replyBtn"
              />
              Micro
            </label>
            <label>
              <input
                type="radio"
                name="reply"
                value="male"
                className="replyBtn"
              />
              Small
            </label>
            <label>
              <input
                type="radio"
                name="reply"
                value="male"
                className="replyBtn"
              />
              Large
            </label>
          </div>
          <div className="sectionRight">
            <h2 className="poppins-regular" style={{ fontSize: "15px" }}>
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
              Risk Level
            </h2>
            <label>
              <input
                type="radio"
                name="reply"
                value="male"
                className="replyBtn"
              />
              Micro
            </label>
            <label>
              <input
                type="radio"
                name="reply"
                value="male"
                className="replyBtn"
              />
              Small
            </label>
            <label>
              <input
                type="radio"
                name="reply"
                value="male"
                className="replyBtn"
              />
              Large
            </label>
          </div>
        </div>
        <div className="strategyAssetSection">
          <div className="sectionLeft">
            {" "}
            <h2 className="poppins-regular" style={{ fontSize: "15px" }}>
              Strategy
            </h2>
            <p>Big Option Buys</p>
            <p className="highlighted">Merger Arbitrage</p>
            <p>Short Reports</p>
          </div>
          <div className="sectionRight">
            <h2 className="poppins-regular" style={{ fontSize: "15px" }}>
              Asset
            </h2>
            <p>Stocks</p>
            <p className="highlighted">Options</p>
            <p>Futures</p>
          </div>
        </div>
      </div>
      <button>Apply</button>
    </div>
  );
}

export default Filter;
