import domain from "@/utils/config";
import axios from "axios";
import { useState } from "react";

export default function addpost() {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [detels, setDetels] = useState("");

  // const addPost = async (event) => {
  //   event.preventDefault();
  //   const respons = await fetch(`${domain}/api/post/addpost`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       title,
  //       imgUrl,
  //       detels,
  //     }),
  //   });
  //   const data = await respons.json();
  //   console.log(data);
  //   setTitle("");
  //   setImgUrl("");
  //   setDetels("");
  // };

  const addPost = async (event) => {
    event.preventDefault();
    const post = {
      title,imgUrl,detels
    }
    try {
      await axios.post(`${domain}/api/post/addpost`,post)
      alert('post add successfully')
      setTitle("");
     setImgUrl("");
     setDetels("");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
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
          <button onClick={addPost} className="btn btn-primary">
            Add
          </button>
        </fieldset>
      </form>
    </>
  );
}
