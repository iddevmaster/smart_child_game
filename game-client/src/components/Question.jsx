import {useState, useEffect, useRef} from 'react';
import Countdown from "react-countdown";
import "../assets/css/question.css";

const Question = ({ fruit, handleNext, totalFruit }) => {
    const initialTime = 10000; // 10 seconds
    const [gifUrl, setGifUrl] = useState('/img/assets/gif/cheerup2.gif');
    const countdownRef = useRef(null);
    const [remainingTime, setRemainingTime] = useState(initialTime);
    const [shifted, setShifted] = useState(false);

    const renderer = ({ hours, minutes, seconds, completed, total, stopped }) => {
        if (completed) {
            if (!shifted && fruit.id < totalFruit) {
                setTimeout(() => {
                    handleNext();
                    setShifted(true)
                }, 5000);
            }
            return (
                <div className="progress w-75 progress-container overflow-visible rounded-5" role="progressbar" aria-label="Example 20px high" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ height: "50px" }}>
                    <div className="progress-bar position-relative overflow-visible rounded-5" style={{ width: "100%" }}>
                        <span className='position-absolute top-0 start-100 translate-middle'>
                            <img id='Icontime' src='/img/assets/gif/red_nope.gif' width={'250px'} alt="" />
                        </span>
                    </div>
                </div>
            );
        } else {
            setShifted(false)
            setRemainingTime(total);
            return (
                <div className="progress w-75 progress-container overflow-visible rounded-5" role="progressbar" aria-label="Example 20px high" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ height: "50px" }}>
                    <div className="progress-bar position-relative overflow-visible rounded-5" style={{ width: Math.floor((initialTime - total) * (100 / initialTime)) + "%" }}>
                        <span className='position-absolute top-0 start-100 translate-middle'>
                            <img id='Icontime' src={gifUrl} width={'250px'} alt="" />
                        </span>
                    </div>
                </div>
            );
        }
    };

    const currectAnswer = () => {
        console.log("Answer: ");
        countdownRef.current?.pause();
        setGifUrl('/img/assets/gif/congrat(1).gif')
        if (!shifted && fruit.id < totalFruit) {
            setTimeout(() => {
                handleNext();
                setShifted(true)
            }, 5000);
        }
    };
    const incurrectAnswer = () => {
        console.log("Answer: ");
        countdownRef.current?.pause();
        setGifUrl('/img/assets/gif/red_nope.gif')
        setTimeout(() => {
            countdownRef.current?.start();
        }, 2000);
    }

    useEffect(() => {
        // This code runs when `fruit` changes
        setGifUrl('/img/assets/gif/cheerup2.gif')
        setRemainingTime(initialTime);
        setTimeout(() => {
            countdownRef.current?.start();
        }, 2000);
    }, [fruit]);

    return ( 
        <>
        <div className='row m-auto'>
            <div className='col-12 col-md-6 d-flex justify-content-center'>
                <div className='d-flex justify-content-center bg-white rounded-5' style={{ border: `15px solid rgb(0, 200, 0)`, boxShadow: 'inset gray 0px 0px 5px 1px' }}>
                    <img src={fruit.image} alt={fruit.name} width={"80%"} />
                </div>
            </div>
            <div className='col-12 col-md-6 d-flex flex-column justify-content-center text-center px-5'>
                <div className='bg-white px-4 rounded-5 my-3 ' style={{ border: `15px solid rgb(255, 113, 137)`, boxShadow: 'inset gray 0px 0px 5px 1px' }}>
                    <p className='fw-bold' style={{ fontSize: "80px" }}>{fruit.english.word}</p>
                </div>
                <div className='bg-white px-4 rounded-5 my-3 ' style={{ border: `15px solid rgb(0, 235, 235)`, boxShadow: 'inset gray 0px 0px 5px 1px' }}>
                    <p className='m-0 fw-bold' style={{ fontSize: "80px" }}>{fruit.china.word}</p>
                    <p style={{ fontSize: "50px" }}>{fruit.china.pinyin}</p>
                </div>
                <div className="d-flex gap-2 me-2">
                    <button className="btn btn-success" onClick={() => currectAnswer()}>Currect</button>
                    <button className="btn btn-danger" onClick={() => incurrectAnswer()}>Incurrect</button>
                </div>
            </div>
        </div>
        <footer>
            <div className='d-flex justify-content-center p-4 mb-3 fs-1'>
                <Countdown 
                    key={fruit.name}
                    ref={countdownRef} 
                    date={Date.now() + remainingTime} 
                    onStart={() => setGifUrl('/img/assets/gif/cheerup2.gif')}
                    renderer={renderer} 
                    autoStart={false}
                />
            </div>
        </footer>
        </>
     );
}
 
export default Question;