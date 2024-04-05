import "./Card.css";
import { useState } from "react";

interface card {
  color: string;
  risk: string;
  name: string;
}

function Card(props: card) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = function () {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="cardContainer">
      <div
        className="card"
        onClick={handleClick}
        style={isExpanded ? { backgroundColor: "#53ACFF" } : {}}
      >
        <i className="fa fa-tag" aria-hidden="true"></i>
        <h2 className="poppins-regular">{props!.name}</h2>
        <span className="spanCard" />
        <i className="fa fa-file" aria-hidden="true"></i>
        <h2 className="poppins-regular">200</h2>
        <span className="spanCard" />
        <i className="fa fa-line-chart" aria-hidden="true"></i>
        <h2 className="poppins-regular" style={{ color: props!.color }}>
          -0.25
        </h2>
        <span className="spanCard" />
        <i className="fa fa-credit-card" aria-hidden="true"></i>
        <h2 className="poppins-regular">{props!.risk}</h2>
      </div>
      <div
        className="expandedSection"
        style={isExpanded ? {} : { display: "none" }}
      >
        <div className="expanded">
          <h4>$TSLA just announced an acquisition of $NFLX at $200B.</h4>
          <p>
            This is an arbitrage opportunity, with the ax gain being %X if the
            deal closes, but the possible risk is %Y if the deal fails, If the
            deal success is % and therefore the recommended play is long/short
            $ABC
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
