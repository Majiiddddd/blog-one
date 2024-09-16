import Card from 'react-bootstrap/Card';
import { MdAccessTime } from "react-icons/md";
import { TiArrowRightThick } from "react-icons/ti";
import './ArticleItem.css';
function ArticleItem() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://dl.next1code.ir/images/react/article1.webp"
      />
      <Card.Body>
        <Card.Title className='py-2'>Article No.1</Card.Title>
        
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <span className='read-more'>
            <span>Read More</span>
            <TiArrowRightThick  size='25px'/>
        </span>
      </Card.Body>
      <Card.Footer className='d-flex justify-content-between align-items-center py-3'>
        <span> Majid Abolfathi</span>
       
        <span><MdAccessTime /> 5 Min</span>
      </Card.Footer>
    </Card>
  );
}

export default ArticleItem;
