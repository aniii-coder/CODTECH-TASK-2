import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Thumbnail from "../mern-blog-assets/blog22.jpg";
// import { red } from "@mui/material/colors";

const PostDetail = () => {
  return (
    <section className="postDetail1">
      <div className="postDetailContainer">
        <div className="postDetailContainerHeader">
          <PostAuthor />
          <div className="postDetailContainerButtons">
            <Link to={`/posts/werwer/edit`} />
            <Button variant="contained" color="primary">
              Edit
            </Button>

            <Link to={`/posts/werwer/delete`} />
            <Button variant="contained" style={{ background: "#FE4042" }}>
              Delete
            </Button>
          </div>
        </div>
        
        <div className="postDetailThumbnail">
        <h1>This is post Title</h1>
          <img src={Thumbnail} alt="" />
        
        <div className="postDetailAlign">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          accusamus numquam corrupti quidem dolore, deleniti sunt voluptatum
          dicta, aliquam iure ipsum assumenda laboriosam, perspiciatis illo ipsa
          sint ex modi recusandae magni ut. Quos debitis rerum, nemo impedit
          illum quia assumenda sed earum, at suscipit libero! Beatae natus
          voluptatibus nam iure ducimus nulla quidem architecto, ab ut ratione
          expedita temporibus voluptas aliquam optio quod inventore repellat
          reprehenderit id doloribus corporis sapiente error incidunt! Eaque
          libero quo fugiat eveniet error facilis ipsa itaque quod, voluptate
          inventore magnam exercitationem explicabo laudantium mollitia ea
          quidem quae architecto aut! Illo, excepturi. Similique nulla quas
          earum? Iste necessitatibus neque ipsa exercitationem illo doloremque
          consequatur distinctio id vitae similique minima sapiente, aliquam
          quos corporis excepturi sequi quod quibusdam aut corrupti mollitia
          dolorem tempore dicta reprehenderit non. Necessitatibus, dolore culpa?
          Eum quo deserunt repudiandae placeat dolores hic blanditiis, odit, ad
          ipsa ullam a voluptates minus reiciendis rerum. Beatae consectetur
          nemo vero porro, nobis eaque expedita dolor sunt incidunt iure
          dignissimos, nihil accusamus dolores. Velit quam fugiat, saepe cumque
          impedit unde incidunt repellendus enim doloribus! Suscipit optio
          voluptates commodi inventore, vel quis deleniti odio iure dignissimos,
          voluptate unde quaerat quasi itaque obcaecati amet culpa recusandae
          minima officia nisi provident vero, eos omnis incidunt eveniet! Est,
          commodi earum enim aperiam a quam sed tempore maiores hic perspiciatis
          eius vero cum ducimus odio ipsum soluta. Et nam dolore ad minus unde,
          doloremque accusamus facere labore perferendis perspiciatis non
          aliquid quibusdam voluptates sequi deleniti, cumque cum temporibus ut!
          Ad vitae modi voluptatum nam maiores, saepe corrupti distinctio
          doloremque eius voluptas beatae reiciendis libero. In temporibus est
          illo recusandae saepe quod molestiae cupiditate, reprehenderit
          voluptatum laborum neque dignissimos vero animi atque officiis
          voluptate officia, impedit ratione reiciendis aliquam ab repudiandae.
          Aut dolor rerum eligendi quas eveniet? Pariatur aliquam repellat
          maiores! Molestias, a sapiente.
        </div>
      </div>
      </div>
    </section>
  );
};

export default PostDetail;
