import "./index.css";

export default function Index() {
  const styles = {
    width: "50px",
    height: "50px",
    border: "1px solid gray",
    padding: "3px",
    borderRadius: "50%",
  };

  return (
    <div>
      <div className="wrapper">
        <div className="logo">
          <img
            src="../../../../public/images/Ali.png"
            style={styles}
            alt="not found"
          />
        </div>

        <div className="manu">
          <ul>
            <li>Home</li>
            <li>Ours</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
