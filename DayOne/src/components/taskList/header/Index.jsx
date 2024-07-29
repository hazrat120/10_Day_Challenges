import "./index.css";

export default function Index() {
  return (
    <header className="container">
      <div className="header">
        <div className="wapper">
          <div className="logo">
            <img src="/public/images/Ali.png" alt="not found" />
          </div>

          <div className="headermanu">
            <ul>
              <li>Home</li>
              <li>Our Service</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
