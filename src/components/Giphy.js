import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Search from "./Search";
import Add from "./Add";

const Giphy = (props) => {
  const [data, setData] = React.useState([]);
  const [title, setTitle] = React.useState("Gif");
  const [loader, setLoader] = React.useState(true);
  const [offset, setOffset] = React.useState(0);
  const [limit, setLimit] = React.useState(8);
  const [search, setSearch] = React.useState("");

  const fetchData = async (title) => {
    let URL = `http://api.giphy.com/v1/gifs/search?q=${title}&api_key=${process.env.REACT_APP_API_KEY}&limit=${limit}&offset=${offset}`;
    try {
      let fetchGif = await axios(URL);
      let fetchRes = await fetchGif;
      console.log(fetchRes);
      if (fetchRes.status === 200) {
        setData(fetchRes.data.data);
        setLoader(false);
      }
    } catch (error) {
      if (error) throw error;
    }
  };
  React.useEffect(() => {
    fetchData(title);
  }, [offset]);

  const content = () => {
    // eslint-disable-next-line default-case
    switch (true) {
      case loader:
        return <div>loading...</div>;
      case data.length > 0:
        return data.map((g) => {
          return (
            <div className="gif-card" key={data.id}>
              <img src={g.images.fixed_width.url} alt="gif" className="image" />
            </div>
          );
        });
    }
  };
  console.log(limit);
  return (
    <div>
      <header>
        <div className="gift-title">
          <div className="gift-title_logo"></div>
          <h3>Giphy</h3>
        </div>
        <div className="gift-search">
          <Search
            search={search}
            setSearch={setSearch}
            fetchData={fetchData}
            setTitle={setTitle}
          />
        </div>
        <div className="gift-follow">
          <span>Follow by me</span>
        </div>
      </header>
      <strong>Search: </strong> {title}
      <div className="gif-add">
        {/* <Add
          setOffset={setOffset}
          limit={limit}
          offset={offset}
          setLoader={setLoader}
          setLimit={setLimit}
        /> */}
        <button
          onClick={() => {
            // setLoader(true);
            // setOffset(offset + limit);
            // setLimit(22);
          }}
        >
          Add
        </button>
      </div>
      <div className="gif-wrap">{content()}</div>
    </div>
  );
};

Giphy.propTypes = {};

export default Giphy;
