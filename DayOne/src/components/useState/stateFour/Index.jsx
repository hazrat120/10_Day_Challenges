import Info from "/src/data/writerInfo/index.js";

export default function Index() {
  let Data = Info;
  return (
    <div>
      <h1>Writer Info</h1>

      <div>
        {Data.map((item) => {
          let { id, title, writer, genres, publication } = item;

          return (
            <div key={id}>
              <p>Writer Id: {id}</p>
              <p>Title: {title}</p>
              <p>Writer: {writer}</p>
              <p>Genres: {genres}</p>
              <p>Publication: {publication}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
