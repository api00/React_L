import React,{useState,useEffect} from 'react';
const Counter = () => {

    const [count ,setCount]= useState(0)

const [avil ,setAvil]= useState(true)



const IncrEvnt = (e) =>{
    setCount(count + 1)
}
const DecrEvnt = (e) =>{
    setCount(count - 1)

}
const RestEvnt = (e) =>{
    setCount(0)

}






  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn"  onClick={IncrEvnt} disabled={count === 5} >+</button>
          <button className="btn card__btn"   onClick={DecrEvnt}  disabled={count === -5}>-</button>
          <button className="btn card__btn"   onClick={RestEvnt}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;