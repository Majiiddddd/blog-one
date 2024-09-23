import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MyNavbar from "../../components/navbar/MyNavbar";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BiTimeFive, BiCategoryAlt } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { MdDelete, MdOutlineEditCalendar } from "react-icons/md";
import "./Article.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Article() {
  const articleId = useParams().articleId;

  const [articleData, setArticleData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5002/articles/${articleId}`)
      .then((response) => setArticleData(response.data));
  }, []);

  const deleteArticleHandler = (articleId) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5002/articles/${articleId}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        navigate("/");
      }
    });
  };

  

  return (
    <>
      <MyNavbar />
      <Container>
        <Row style={{ marginTop: "80px" }}>
          <Col lg={4}>
            <div className="articleCardContainer">
              <div className="cardHeader">
                <img src={articleData.image} />
                <h4>{articleData.title}</h4>
              </div>
              <div className="cardBody">
                <p>
                  <BsPencilSquare size="20px" />
                  Author: <b>{articleData.Author}</b>
                </p>
                <p>
                  <BiTimeFive size="20px" />
                  Duration: <b>{articleData.readingTime}min</b>
                </p>
                <p>
                  <BiCategoryAlt size="20px" />
                  Category: <b>{articleData.category}</b>
                </p>
              </div>
              <div className="cardFooter">
                <Button
                  onClick={() => deleteArticleHandler(articleId)}
                  variant="outline-danger"
                >
                  <MdDelete size="20px" />
                </Button>
                <Link to={`/edit-article/${articleId}`}>
                  <Button variant="outline-primary">
                    <MdOutlineEditCalendar size="20px" />
                  </Button>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={8} style={{ textAlign: "justify" }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu
              diam consequat, faucibus risus vel, accumsan est. Ut volutpat
              augue eget tristique sagittis. Quisque pharetra odio euismod
              gravida malesuada. Proin quis augue suscipit, condimentum ante
              bibendum, mollis sem. Pellentesque non turpis at turpis tempor
              fermentum. Mauris feugiat imperdiet auctor. Cras volutpat nulla
              tempus metus mattis, eget consequat dolor bibendum. Nunc lacinia
              enim sit amet neque lobortis dictum. Duis porttitor ullamcorper
              metus quis congue. Aliquam varius velit vel elit tristique, non
              condimentum velit scelerisque. Donec metus justo, ullamcorper a
              facilisis feugiat, consequat a sem. In tincidunt et urna et
              viverra. Aliquam nunc ligula, aliquam ac lacinia non, blandit
              vitae ante. Fusce tempus sapien vel purus faucibus accumsan.
              Aliquam sagittis pellentesque risus et ullamcorper. Suspendisse
              accumsan mauris eu iaculis interdum. Mauris pulvinar libero id
              lectus dapibus iaculis. Sed sit amet purus quis orci maximus
              egestas vel sed arcu. Sed hendrerit ante elit, quis tristique sem
              accumsan vitae. Fusce vel dapibus ante, a blandit arcu. Donec
              varius facilisis velit, eu sodales tellus cursus vel. Donec sem
              sem, fringilla ut rutrum ut, lobortis quis nisl. Fusce tristique
              diam scelerisque nisi elementum, id sagittis dui laoreet. Cras
              eget dignissim risus. Donec ut odio sed elit pulvinar scelerisque.
              Etiam suscipit egestas ipsum, ut varius lectus eleifend a. Sed
              eros nibh, sagittis vitae suscipit bibendum, tempor non magna.
              Suspendisse potenti. Duis finibus consequat mi, in sodales augue
              volutpat a. Nam a erat lacus. Proin non justo arcu. Vivamus at
              felis urna. Nulla fringilla, augue sit amet vehicula porta, quam
              mi hendrerit nisi, eget sodales odio eros laoreet tortor. Ut
              pharetra enim a arcu pharetra, vitae mattis lectus consequat.
              Donec ut sapien posuere, maximus urna quis, malesuada enim. Sed
              sodales ullamcorper ex, sit amet volutpat erat sagittis sed. Nulla
              pulvinar erat vel dignissim ullamcorper. Nulla eu cursus turpis.
              Vestibulum aliquam sed lorem ac gravida. Donec eget tincidunt
              metus, consectetur feugiat libero. Aenean vitae vestibulum augue.
              Quisque non nunc a lectus vestibulum sollicitudin at eget lorem.
              Curabitur tortor eros, pharetra eleifend hendrerit at, tempus sed
              massa. Suspendisse et facilisis nibh, eget sagittis elit. Donec
              sagittis ante nec ornare varius. Aenean viverra dui in neque
              finibus, eu congue dui placerat. Curabitur dignissim arcu vel
              bibendum feugiat. Proin convallis fringilla tempor. Donec pharetra
              orci tellus, quis pulvinar sem posuere molestie. Integer viverra
              ligula eu dapibus varius. Nunc ac sem sed eros vulputate lacinia
              quis nec sapien. Donec at tortor maximus, mollis libero id,
              hendrerit ante. Morbi euismod, ex nec ullamcorper suscipit, urna
              risus lobortis mauris, ut convallis enim quam id eros. Maecenas in
              scelerisque sem. Phasellus at ante velit. Donec in bibendum
              turpis. Donec nunc metus, egestas porta dictum tempor, pharetra et
              urna. Sed ut commodo erat, in interdum tortor. Sed eget ultrices
              purus. Phasellus faucibus eu erat scelerisque commodo. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Sed ultrices ullamcorper neque in consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu
              diam consequat, faucibus risus vel, accumsan est. Ut volutpat
              augue eget tristique sagittis. Quisque pharetra odio euismod
              gravida malesuada. Proin quis augue suscipit, condimentum ante
              bibendum, mollis sem. Pellentesque non turpis at turpis tempor
              fermentum. Mauris feugiat imperdiet auctor. Cras volutpat nulla
              tempus metus mattis, eget consequat dolor bibendum. Nunc lacinia
              enim sit amet neque lobortis dictum. Duis porttitor ullamcorper
              metus quis congue. Aliquam varius velit vel elit tristique, non
              condimentum velit scelerisque. Donec metus justo, ullamcorper a
              facilisis feugiat, consequat a sem. In tincidunt et urna et
              viverra. Aliquam nunc ligula, aliquam ac lacinia non, blandit
              vitae ante. Fusce tempus sapien vel purus faucibus accumsan.
              Aliquam sagittis pellentesque risus et ullamcorper. Suspendisse
              accumsan mauris eu iaculis interdum. Mauris pulvinar libero id
              lectus dapibus iaculis.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Article;
