import MyNavbar from "./../../components/navbar/MyNavbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddArticle.css";
import axios from "axios";
import { useState } from "react";

function AddArticle() {
  const [formData, setFormData] = useState({});

  const addArticleHandler = () => {
    axios.post("http://localhost:5001/articles", formData);
  };
  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <MyNavbar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="Type here.."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Desc</Form.Label>
            <Form.Control
              name="desc"
              onChange={formHandler}
              type="text"
              placeholder="Type here.."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              name="Author"
              onChange={formHandler}
              type="text"
              placeholder="Type here.."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              name="category"
              onChange={formHandler}
              type="text"
              placeholder="Type here.."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              name="image"
              onChange={formHandler}
              type="text"
              placeholder="Type here.."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Reading Time</Form.Label>
            <Form.Control
              name="readingTime"
              onChange={formHandler}
              type="number"
              placeholder="Type here.."
            />
          </Form.Group>
          <Button onClick={addArticleHandler} variant="primary" type="button">
            Create Article
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddArticle;
