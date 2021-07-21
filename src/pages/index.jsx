import Image from "../components/image";
import SearchBox from "../components/search-box";
import { useState } from "react";
const Index = () => {
  const [images, setImages] = useState([]);

  //function when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    getSearchImage(query).then((data) => {
      console.log(data);
      //render response to state/DOM
      setImages(data.data);
    });
  };

  // function to get data from API
  const getSearchImage = async (query) => {
    const API_KEY = process.env.REACT_APP_GIPHY_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=12`;
    const response = await fetch(url).then((data) => data.json());
    return response;
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <SearchBox handleSubmit={handleSubmit} />
      <div className="imageList">
        {images.map((image) => {
          return (
            image.rating === "g" && (
              <Image
                key={image.id}
                title={image.title}
                url={image.images.fixed_width.url}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Index;
