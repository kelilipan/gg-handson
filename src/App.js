import Image from "./components/image";
import SearchBox from "./components/search-box";
import images from "./data/images";
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
      <Image title={images.title} url={images.url} />
    </div>
  );
}

export default App;
