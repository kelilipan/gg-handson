import Image from "./components/image";
import SearchBox from "./components/search-box";
import images from "./data/images";
import "./index.css";
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(e.target.query.value);
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
              <Image key={image.id} title={image.title} url={image.url} />
            )
          );
        })}
      </div>
    </div>
  );
}

export default App;
