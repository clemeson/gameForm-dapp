
import React, {useState} from "react"
import './animation.css'

const Animation = (props) => {

    const [message, setMessage] = useState('Aguarde...')

    return (
        <>
        <div className="text-center animation">
        <div class="loadingio-spinner-cube-1iwifxk688i"><div class="ldio-ey1txdw4b76">
                <div></div><div></div><div></div><div></div>
            </div></div>
            <h4 className="h4">{message}</h4>
        </div>
          

        </>
    )



}

export default Animation


