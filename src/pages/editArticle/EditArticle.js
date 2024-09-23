import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyNavbar from "./../../components/navbar/MyNavbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

function EditArticle(){
    const [articleData , setArticleData] = useState({});
    const articleId = useParams().articleId;

   useEffect( ()=>{
    axios.get(`http://localhost:5002/articles/${articleId}`).then(response => setArticleData(response.data))
   } , [])

   const editArticleHandler = () =>{

   }
   const formHandler = (e)=>{
    setArticleData({...articleData,[e.target.name]:e.target.value});
   }
    return(
        <>
        <MyNavbar />
        <div className="formContainer">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={articleData.title}
                name="title"
                onChange={formHandler}
                type="text"
                placeholder="Type here.."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Desc</Form.Label>
              <Form.Control
                value={articleData.desc}
                name="desc"
                onChange={formHandler}
                type="text"
                placeholder="Type here.."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                value={articleData.Author}
                name="Author"
                onChange={formHandler}
                type="text"
                placeholder="Type here.."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                value={articleData.category}
                name="category"
                onChange={formHandler}
                type="text"
                placeholder="Type here.."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                value={articleData.image}
                name="image"
                onChange={formHandler}
                type="text"
                placeholder="Type here.."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Reading Time</Form.Label>
              <Form.Control
                value={articleData.readingTime}
                name="readingTime"
                onChange={formHandler}
                type="number"
                placeholder="Type here.."
              />
            </Form.Group>
            <Button onClick={editArticleHandler} variant="primary" type="button">
              Edit Article
            </Button>
          </Form>
        </div>
      </>
    );
}

export default EditArticle;