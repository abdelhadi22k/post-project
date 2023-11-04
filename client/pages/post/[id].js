import Image from "next/image";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import domain from "./../../utils/config";

export default function idpost({ post }) {
  const router = useRouter();
  const [title, setTitle] = useState(post.title);
  const [imgUrl, setImgUrl] = useState(post.imgUrl);
  const [detels, setDetels] = useState(post.detels);

  const update = async (event) => {
    event.preventDefault();
    const posts = {
      title,
      imgUrl,
      detels,
    };
    try {
      await axios.put(`${domain}/api/post/${post._id}`, posts);
      alert("update successfully");
      router.push('/post/addpost')
    } catch (error) {
      console.log(error);
    }
  };
  const delettPost = async () => {
    try {
      await axios.delete(`${domain}/api/post/${post._id}`);
      alert("delete successfully");
  
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" alt={post.title} src={post.imgUrl} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.detels}</Card.Text>
          <Button variant="danger pr-2" onClick={() => (delettPost(post._id))}>delete</Button>
        </Card.Body>
      </Card>

      <form>
        <fieldset>
          <legend>Disabled fieldset example</legend>

          <div className="mb-3 row">
            <div className="col-8">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                className="form-control"
                placeholder="title"
              />
            </div>
          </div>
          <br />

          <div className="mb-3 row">
            <div className="col-8">
              <input
                type="text"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
                name="imgUrl"
                className="form-control"
                placeholder="imgUrl"
              />
            </div>
          </div>
          <br />

          <div className="mb-3 row">
            <div className="col-8">
              <textarea
                value={detels}
                onChange={(e) => setDetels(e.target.value)}
                name="detels"
                className="form-control"
                placeholder="detels"
              />
            </div>
          </div>
          <br />

          <div className="mb-3">
            <div className="form-check">
              <label className="form-check-label" for="disabledFieldsetCheck">
                Can't check this
              </label>
            </div>
          </div>
          <button onClick={update} className="btn btn-primary">
            update
          </button>
        </fieldset>
      </form>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await axios.get(`${domain}/api/post/${context.query.id}`);
  return {
    props: {
      post: res.data,
    },
  };
}
