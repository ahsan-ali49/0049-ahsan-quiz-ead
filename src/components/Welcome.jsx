import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import cardPhoto from "./cardphoto.png";

function Welcome() {
  return (
    <>
      <div className="row pt-5 ps-5">
        <div className="col ps-5">
          <h1 className="w-50">
            Discover, collect, and charity in extraordinary NFT marketplace
          </h1>
          <p className="w-50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
            perspiciatis voluptates impedit eveniet placeat praesentium numquam.
          </p>

          <Button>Explore</Button>
          <Button className="ms-3" variant="outline-dark">
            Create
          </Button>
        </div>
        <div className="col ps-5">
          <Card
            style={{ width: "20rem" }}
            className="bg-transparent p-2 border-white"
          >
            <Card.Img variant="top" src={cardPhoto} />
            <Card.Body>
              <div>
                <img
                  className="w-25 rounded rounded-circle"
                  src={cardPhoto}
                  alt=""
                />
                <span className="ms-2 text-white">Laura</span>
                <span className="text-white ms-5">WE ARE HERE</span>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Welcome;
