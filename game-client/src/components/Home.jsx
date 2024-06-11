import { Link } from "react-router-dom";
import "../assets/css/homepage.css";
const Home = () => {

    return ( 
        <>
            <div className="position-relative h-100">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="findfruitlogo row mb-5">
                        <div className="d-flex mx-5">
                            <p id="find" className="text-primary logotext1 slideInRight">Find</p>
                            <img src="/img/aa.png" alt="" className="mx-2 logoicon zoomIn" />
                            <p id="fruit" className="text-danger logotext2 slideInLeft">Fruit</p>
                        </div>
                    </div>
                    <div className="row mb-4 bounceIn1">
                       <Link to="/normal-mode" className="btn btn-info menu-btn1 shadow">Normal Mode</Link>
                    </div>
                    <div className="row mb-4 bounceIn2">
                        <button className="btn btn-warning menu-btn2 shadow">Free Mode</button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Home;