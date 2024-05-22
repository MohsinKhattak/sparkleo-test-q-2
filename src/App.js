import "./App.css";
import TruckImage from "../src/assets/truck.png";
import ArrowLeft from "../src/assets/arrow-left.svg";
function App() {
  return (
    <div className="main">
      <div className="left-side">
        <div className="back-button">
          <img src={ArrowLeft} alt="arrow-png" className="arrow-image" />
          <p
            style={{
              fontWeight: "500",
              color: "#A3AED0",
              fontSize: "14px",
              marginLeft: "5px",
            }}
          >
            Back
          </p>
        </div>
        <div className="form-container">
          <h1 className="sign-in-text">Sign In</h1>
          <p className="sub-heading">
            Enter your email and password to sign in!
          </p>
          <div className="divider">
            <hr style={{ width: "45%", borderColor: "#E0E5F2" }} />
            <p>or</p>
            <hr style={{ width: "45%", borderColor: "#E0E5F2" }} />
          </div>
          <form>
            <div className="input-box-container">
              <label className="custom-label">
                Email<span style={{ color: "#E92928" }}>*</span>
              </label>
              <input
                className="custom-input-box"
                type="email"
                id="email"
                placeholder="mail@simple.com"
                required
              />
            </div>
            <div className="input-box-container">
              <label className="custom-label">
                Password<span style={{ color: "#E92928" }}>*</span>
              </label>
              <input
                className="custom-input-box"
                type="email"
                id="email"
                placeholder="Min. 8 characters"
                required
              />
            </div>
            <div className="row-container">
              <div style={{ display: "flex" }}>
                <input type="checkbox" style={{ backgroundColor: "red" }} />
                <p className="custom-label">Keep Me Logged in</p>
              </div>
              <p style={{ color: "#E92928", fontSize: "14px" }}>
                Forgot Password?
              </p>
            </div>
            <div>
              <button className="custom-submit-button">Sign In</button>
            </div>
          </form>
          <p className="already-member-text">
            Not Registered Yet?{" "}
            <span style={{ color: "#E92928" }}>Create An Account</span>
          </p>
        </div>
        <div>
          <p className="copyrigt-text">
            © 2023 Spark Drive. All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="right-side">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "15%",
          }}
        >
          <img src={TruckImage} alt="Truck-png" className="tuck-image" />
          <div className="spark-outer-container">
            <p style={{ fontSize: "40px", fontWeight: "400", color: "white" }}>
              Spark
            </p>
          </div>
        </div>
        <div className="outer-white-container">
          <p style={{ fontWeight: "400", fontSize: "16px", color: "white" }}>
            Learn more about Air Drive on
          </p>
          <h5 style={{ fontWeight: "600", fontSize: "25px", color: "white" }}>
            Spark.pl
          </h5>
        </div>

        <div>
          <ul className="custom-list">
            <li className="custom-list-item">License</li>
            <li className="custom-list-item">Term Of Use</li>
            <li className="custom-list-item">Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
