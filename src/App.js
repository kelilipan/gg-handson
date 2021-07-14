import Image from "./components/image";
import SearchBox from "./components/search-box";

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
      <Image
        title={"GIF animation"}
        url={"https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"}
      />
    </div>
  );
}

export default App;
