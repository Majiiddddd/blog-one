import MyNavbar from "./../../components/navbar/MyNavbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddArticle.css";

function AddArticle() {
  return (
    <>
      <MyNavbar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Type here.." />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Desc</Form.Label>
            <Form.Control type="text" placeholder="Type here.." />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Type here.." />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" placeholder="Type here.." />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder="Type here.." />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Reading Time</Form.Label>
            <Form.Control type="number" placeholder="Type here.." />
          </Form.Group>
          <Button variant="primary" type="button">
            Create Article
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddArticle;
