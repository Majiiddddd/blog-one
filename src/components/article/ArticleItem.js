import Card from "react-bootstrap/Card";
import { MdAccessTime } from "react-icons/md";
import { TiArrowRightThick } from "react-icons/ti";
import "./ArticleItem.css";
import { Link } from "react-router-dom";
function ArticleItem(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="py-2">{props.title}</Card.Title>

        <Card.Text>{props.desc}</Card.Text>
        <Link to={`/article/${props.id}`}>
          <span className="read-more">
            <span>Read More</span>
            <TiArrowRightThick size="25px" />
          </span>
        </Link>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center py-3">
        <span> {props.Author}</span>

        <span>
          <MdAccessTime /> {props.readingTime} min
        </span>
      </Card.Footer>
    </Card>
  );
}

export default ArticleItem;
