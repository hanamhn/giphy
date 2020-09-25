import React from "react";
import axios from "axios";
import Search from "./Search";

const Giphy = (props) => {
  const [data, setData] = React.useState([]);
  const [title, setTitle] = React.useState("Gif");
  const [loader, setLoader] = React.useState(true);
  const [showMore, setShowMore] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const fetchData = async (title) => {
    let URL = `http://api.giphy.com/v1/gifs/search?q=${title}&api_key=${process.env.REACT_APP_API_KEY}`;
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
  }, [title]);

  const numberOfItems = showMore ? data.length : 8;

  const content = () => {
    // eslint-disable-next-line default-case
    switch (true) {
      case loader:
        return <div>loading...</div>;
      case data.length > 0:
        return data.slice(0, numberOfItems).map((g) => {
          return (
            <div className="gif-card" key={data.id}>
              <img src={g.images.fixed_width.url} alt="gif" className="image" />
            </div>
          );
        });
    }
  };
  console.log(numberOfItems);
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
            setShowMore={setShowMore}
          />
        </div>
        <div className="gift-follow">
          <span>Follow by me</span>
        </div>
      </header>
      <strong>Search: </strong> {title}
      <div className="gif-add">
        <button
          onClick={() => {
            setShowMore(true);
          }}
        >
          Add
        </button>
      </div>
      <div className="gif-wrap">{content()}</div>
    </div>
  );
};

export default Giphy;
