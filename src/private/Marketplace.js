import React, { useEffect, useState } from "react";
import Header from "../components/headerComponents/Header";
import mocks from '../__mocks.json'
import Buy from "../services/BuyService";
import Footer from "../components/footer/Footer";
import Selo from "../components/footer/Selo";

const Marketplace = (props) => {

    const [price, setPrice] = useState('')

    return (
      
        <>
        <main className="content container-bg-4">
            <div className="container">
                <Header></Header>
            </div>
            <div className="container mt-4 ">
                <div className="row mb-5 gap-4">
                    {
                        mocks.nft.map(i => 
                            <a className="col-md-2 d-flex flex-wrap bg-dark px-4 pt-4" onClick={() => setPrice(i.price)}>
                                <img src={i.img} className='img-fluid '></img>
                                
                                
                                  
                                  <div className="d-flex align-items-center w-100 justify-content-between">
                                      <div className="d-flex align-items-center gap-1">
                                      <p className="text-success mt-4">{i.price}</p>
                                      <img className="img-fluid icon icon-xs mt-2" src='./img/bnb.png'/>
                                      </div>
                                   


                                    <Buy price={i.price} btn='btn-secondary'></Buy>
                                  </div>
                                 
                                    
                                </a>
                                )
                    }
                </div>
            
       
        </div>
        <div className=" content  container-bg-5">
            <div className="container row mx-auto">
            <Selo></Selo>
            </div>
                
            </div>
           
        </main>
        <Footer></Footer>

        </>
    )




}


export default Marketplace