import {useEffect, useState} from "react";

let CurrentTime = () =>{
    const[time, setTime]=useState(new Date());

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setTime(new Date());
        },1000);

        return()=>{
            clearInterval(intervalId);
        }
    }, []);

    return (
      <div className="time-card">
        <p className="worldtime">
          Current date and time:
          <span>{time.toLocaleDateString()} — {time.toLocaleTimeString()}</span>
        </p>
      </div>
    );
};

export default CurrentTime;