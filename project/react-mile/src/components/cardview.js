import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './cardview.css'

export function Cardview(){
    const[products,setproducts]=useState([])
    useEffect(()=>{ 
        fetch('http://localhost:3000/istore.json')
        .then(response=>response.json())
        .then(json=>setproducts(json))
        console.log(products)
    })
    return(
        <>
        <div className="cardcontainer"> 
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h3>APPLE I STORE</h3>
                </div> 
                <div className="col-lg-12 ,mt-3">
                    {
                            products.map((value,index)=>(
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-title text-center">
                                            <h5>{value.id}</h5>
                                            <h2>{value.Modelname}</h2>
                                            <img className="img-fluid" src={value.image}/>
                                            <h2>{value.price}</h2>

                                        </div>

                                    </div>
                                </div>
                        ))
                            }

                </div>
                </div>
                </div>
        </>
    );
}