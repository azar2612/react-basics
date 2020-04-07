import React from "react";
import "./Githubfetch.scss";
class Githubfetch extends React.Component {
  state = {
    id: "",
    avatar_url: "",
    html_url: "",
    repos_url: "",

    loading: true,
  };
  fetchdata = () => {
    fetch("https://api.github.com/users/azar2612")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          id: data.id,
          login: data.login,
          avatar_url: data.avatar_url,
          html_url: data.html_url,
          repos_url: data.repos_url,
          loading: false,
        })
      );
  };
  render() {
    const { id, login, avatar_url, loading } = this.state;
    return (
      <div className="fetch">
        <button type="button" onClick={this.fetchdata}>
          Fetch
        </button>

        {loading && <p>Loading......</p>}
        {id ? (
          <div className="fetch-data">
            {" "}
            <div>
              <h5 id="pic">Profile Picture</h5>
              <h5>Login</h5>
              <h5>Id</h5>
              <h5>User URL</h5>
              <h5>Repository Url</h5>
            </div>
            <div>
              <img src={avatar_url} alt="" />
              <p>{login}</p>
              <p>{id}</p>
            </div>
          </div>
        ) : (
          <p>No data,Click Fetch button </p>
        )}
      </div>
    );
  }
}

export default Githubfetch;
