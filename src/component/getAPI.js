import React, { Component } from "react";
import axiox from "axios";
class getAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      err: "",
    };
  }
  componentDidMount() {
    axiox
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response)
        this.setState({
          post: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          err: "error the data is not found",
        });
      });
  }
  render() {
    const { post, err } = this.state;
    return (
      <div>
        {post.length
          ? post.map((item) => <li key={item.id}> {item.title}</li>)
          : null}
        {err ? <div>{err}</div> : null}
      </div>
    );
  }
}
export default getAPI;
