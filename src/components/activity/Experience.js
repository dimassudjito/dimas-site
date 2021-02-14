import React, {useState} from 'react';
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import './activity.css'


const Experience = ({items}) => {
    const [index, setIndex] = useState(0);
    const {title, img, pos, date, desc} = items[index]
    const [flipped, setFlipped] = useState(false);

    const check = (number) => {
        if (number > items.length-1){
          return 0
        }
        if (number < 0){
          return items.length-1
        }
        return number
    }

    const nextExperience = () => {
        setIndex((index)=>{
            return check(index+1);
        })
    }

    const prevExperience = () => {
        setIndex((index)=>{
            return check(index-1);
        })
    }

    return (
        <div>
            <div 
                className="card mx-auto" 
                style={{
                    maxWidth: "50rem", 
                    height:"20em",
                    backgroundImage: `url(${img}`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "50em",
                    filter: "grayscale(1)",
                }}
                onMouseEnter={()=>setFlipped(true)}
                onMouseLeave={()=>setFlipped(false)}
            >
                {!flipped && (
                <div className="card-body">
                <h2 className="card-title bg-white text-dark p-2 d-inline-flex">{title}</h2>
                </div>
                )}
                {flipped && (
                <div className="card-body bg-dark text-white">
                    <h4 className="card-title">{title} <small>({date})</small></h4>
                    <p>{pos}</p>
                    <p>{desc}</p>
                </div>
                )}
            </div>
            <div className="d-flex justify-content-center mb-5">
                <button className="btn" onClick={prevExperience}>
                    <FaChevronLeft/>
                </button>
                <button className="btn" onClick={nextExperience}>
                    <FaChevronRight/>
                </button>
            </div>
        </div>
    );
}

export default Experience;