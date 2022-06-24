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
            <div className="container mt-4">
                <div className="row">
                    {
                        mocks.nft.map(i => 
                            <a className="col-md-2 d-flex flex-wrap " onClick={() => setPrice(i.price)}>
                                <img src={i.img} className='img-fluid' ></img>
                                
                                
                                  
                                  <div className="d-flex align-items-center gap-2 ">
                                    <p className="text-white">{i.name}</p>
                                    <p className="text-success">{i.price}</p>
                                   
                                    <svg class="icon icon-xs mb-3" fill="none" stroke="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <Buy price={i.price} btn='btn-secondary'></Buy>
                                  </div>
                                 
                                    
                                </a>
                                )
                    }
                </div>
                <div className="container-bg-5 content ">
                    <div className="container d-flex justify-content-around row mx-auto">
                    <Selo></Selo>
                    </div>
                </div>
            </div>
        </main>


        </>
    )




}


export default Marketplace