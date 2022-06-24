import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { GetWalletProvider } from '../services/WalletServices'


function Buy(props) {

    const [btn, setBtn] = useState('btn-primary')

    function classButton(btn) {
        if (props.btn === 'btn-primary') setBtn('btn-primary');
        else setBtn('btn-secondary')


    }

    useEffect(() => {
        classButton()
    }, [])

    //pega saldo da criptomoeda padrao da carteira.
    //função pode ser utulizada para uma verificação de saldo e continuar com o fluxo de compra ou não.
    async function getBalance(address) {
        const provider = await GetWalletProvider();
        const balance = await provider.getBalance(address);

        return ethers.utils.formatEther(balance.toString());


    }

    //função de compra retorna o json com informações sobre a transação
    //o hash do bloco gerado pode ser utilizado para uma consulta em outro codigo na bscscan ou etherscan para validar a compra em validateService.


    async function buy(price) {

        await window.ethereum.send('eth_requestAccounts')



        const provider = await GetWalletProvider()



        const signer = await provider.getSigner();

        const walletReceives = '0xb5a4AF96cA268aBaBa42ced37E00E45b13a26229'



        const transaction = await signer.sendTransaction({
            to: walletReceives,
            value: ethers.utils.parseEther(price)
        })

        return transaction

    }

    return (
        <>
            <button type="button" className={`btn ${btn}`} onClick={() => buy(props.price)}>Comprar</button>
        </>
    )


}


export default Buy

