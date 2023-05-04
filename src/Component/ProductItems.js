import React from 'react'

export default function ProductItems(props) {
  return (
    <div>
      <div className="card" style={{width: "18rem" ,height:"350px", backgroundColor:"grey" , boxShadow:"9px 9px 9px black" , borderRadius:"10%" , overflow:"hidden" }}>
  <img src={props.imageurl} style={{height:"200px",borderRadius:"5%"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.discription}</p>
    <a href={props.url} className="btn btn-secondary u">More</a>
  </div>
</div>
    </div>
  )
}
