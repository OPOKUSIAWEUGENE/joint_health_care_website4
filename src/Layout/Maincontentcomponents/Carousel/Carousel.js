
import React, {useState, useEffect} from "react"
import "../Carousel/Carousel.css"


const Carousels =(props)=>{

    const [counter, setCounter]= useState(1);
    const [pause, setPause]=useState(false);
    const content =props.children;

    const handleNext=()=>{
        if (counter!==content.length)
        {
setCounter(counter+1)
        }
        else{
            setCounter(1);
        }
    }
    const handlePrev=()=>{
        if(counter!==1){
            setCounter(counter-1);
        }
        else{
setCounter(content.length)
        }
    }
    const handlePage= page=>{
        setCounter(page);
    }

    // const handleMouse=()=>{
    //     setPause(!pause);
    // }

    useEffect(()=>{
        let interval=setInterval(()=>{
            if(!pause){
                handleNext();
            }else{
                clearInterval(interval);
            }
            },10000);
            return ()=>clearInterval(interval);
    });
    // onMouseEnter={handleMouse}
    // onMouseLeave={handleMouse}
    return(
        <div>
            <div
            className="slide"  
            >
                {content.map((item, index)=>(
                    <div
                    className={counter-1 ===index?"show":"not-show"}
                    key={index}
                    >
                      
                        {item}
                        <div className="contentbuttons">
                      
                     <a href="tel:+233245959600"><button className="contactus" >
                        
                Contact us
                </button></a>
                <button className="inboxus" onClick={handleNext}>
                Inbox us
                </button>
                </div>
                         </div>
                        
                ))}
                
                <button className="prev" onClick={handlePrev}>
                &#10094;
                </button>
                <button className="next" onClick={handleNext}>
                &#10095;
                </button>
               

              
            </div>
            <div className="page">
        {content.map((item, index) => (
          <span
            key={index}
            className={counter - 1 === index ? "dot active" : "dot"}
            onClick={() => handlePage(index + 1)}
          />
        ))}
      </div>
        </div>
    )
}
export default Carousels