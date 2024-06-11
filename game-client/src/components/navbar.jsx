import { Link } from "react-router-dom";

const Navbar = ({ handleNext, handlePrev, current, allques,}) => {
    return ( 
        <div className="nav-bar">
            <div className="navContainer d-flex justify-content-center fw-bold fs-1 py-2">
                <div className="d-flex mx-4 me-auto">
                    <p id="find" className="text-primary">Find</p>
                    <img src="/img/aa.png" alt="" className="mx-2" width={60} height={60} />
                    <p id="fruit" className="text-danger">Fruit</p>
                </div>
                <div>
                    <Link to="/" className="btn btn-secondary mx-2">Home</Link>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={handlePrev}> &lt; Prev</button>
                </div>
                <div className="mx-3">
                    <p className="text-info">{current} of {allques}</p>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={handleNext}>Next &gt;</button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;