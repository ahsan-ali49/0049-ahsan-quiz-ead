import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import cardPhoto from "./cardphoto.png";
import card1 from "./card1.png";
import card2 from "./card2.png";
import card3 from "./card3.png";
import card4 from "./card4.png";

export const Auctions = () => {
  return (
    <div className="p-5">
      <h1>Hot Auctions</h1>
      <CardGroup className="mt-3">
        <Card className="border border-0 me-2 bg-transparent text-white">
          <Card.Img variant="top" className="w-75 m-auto" src={card1} />
          <Card.Body>
            <div className="d-flex justify-content-between ps-5 pe-5">
              <span>Card1</span>
              <span>1.2 Weth</span>
            </div>
            <hr></hr>
          </Card.Body>
        </Card>
        <Card className="border border-0 me-2 bg-transparent text-white">
          <Card.Img variant="top" className="w-75 m-auto" src={card2} />
          <Card.Body>
            <div className="d-flex justify-content-between ps-5 pe-5">
              <span>Card2</span>
              <span>1.2 Weth</span>
            </div>
            <hr></hr>
          </Card.Body>
        </Card>
        <Card className="border border-0 me-2 bg-transparent text-white">
          <Card.Img variant="top" className="w-75 m-auto" src={card3} />
          <Card.Body>
            <div className="d-flex justify-content-between ps-5 pe-5">
              <span>Card3</span>
              <span>1.2 Weth</span>
            </div>
            <hr></hr>
          </Card.Body>
        </Card>
        <Card className="border border-0 bg-transparent text-white">
          <Card.Img variant="top" className="w-75 m-auto" src={card4} />
          <Card.Body>
            <div className="d-flex justify-content-between ps-5 pe-5">
              <span>Card4</span>
              <span>1.2 Weth</span>
            </div>
            <hr></hr>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};
