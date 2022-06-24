import React, { useState } from "react";
import { ethers } from "ethers";
import { useHistory } from "react-router-dom";



function installWallet() {

    setTimeout(() => {
        window.open('https://metamask.io/download/')
    }, 1000 )

}



export async function GetWalletProvider() {


    
    //verifica se o navedor tem alguma dex wallet instalada no navageador
    //se nao tem chama a funsao isntallWallet.
    if (!window.ethereum) await installWallet();
     
    
    //requisita confirmacao de conexao do nosso site com a wallet
    await window.ethereum.send('eth_requestAccounts');

    //instancia alib ether, especificamente o conector web3providor que faz a conexao com a blockchain
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');

    
    provider.on('network', (newNetwork, oldNetwork) => {
        if (oldNetwork) window.location.reload();
    })

  

    return provider;

}



   
export function ConnectMarketplace(){

    const history = useHistory();

    async function connection(){
     const provider = await GetWalletProvider()

     const currentAddres = await provider.getSigner().getAddress()
     localStorage.setItem('wallet', currentAddres)
    history.push('/marketplace');
     
        
    }

   return (
       <>
        <button type="button" className="btn btn-primary fs-5" onClick={() => connection()}>Market NFT</button>
       </>
   )
}











