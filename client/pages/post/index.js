import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import domain from "./../../utils/config";
import PostItem from "../../components/postItem";

export default function indexpost({ postDta }) {

  
  const [post, setpost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchpost() {
      try {
        const { data } = await axios.get(`${domain}/api/post/`);
        setpost(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchpost();
  }, []);

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <>
      <Container>
        {
          <div>
            {post.map((el, index) => {
              return (

                <PostItem post={el} />

              );
            })}
          </div>
        }
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get(`${domain}/api/post/`);
  return {
    props: {
      postDta: res.data,
    }
  };
}
