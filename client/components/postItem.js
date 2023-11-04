import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import domain from "../utils/config";
import { useRouter } from "next/router";


export default function PostItem({ post }) {
const router =  useRouter()

const delettPost = async () => {
  try {
    await axios.delete(`${domain}/api/post/${post._id}`);
    alert("delete successfully");
    router.push('/post/addpost')
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
          <Button variant="success pr-2" onClick={() => router.push(`post/${post._id}`)}>update</Button>
          <Button variant="danger pr-2" onClick={() => (delettPost(post._id))}>delete</Button>
        </Card.Body>
      </Card>
    </>
  );
}


