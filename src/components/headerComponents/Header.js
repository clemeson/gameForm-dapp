import React from "react";
import{ ConnectMarketplace} from "../../services/WalletServices";

const Header = () => {

    return (
        <>
           <header className="container">
              
                    <div className="row d-flex justify-content-between pt-4 px-2">
                        <div className="col-md-2 col-4">

                      <a href="/"> <img className="img-fluid logo" src="./img/logo.png"></img></a> 
                       
                        </div>

                        <div className="col-md-2 col-4">
                            <ConnectMarketplace></ConnectMarketplace>
                        </div>
                    </div>
              
           </header>
        
        </>
    )



}

export default Header;