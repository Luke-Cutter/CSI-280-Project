import "./SuggestionForm.css"
import vhlogo from "/vhlogofinal.svg"
import {useState} from "react";

const SuggestionForm = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSend = () => {
        alert("Your message has been sent!");
        setEmail("");
        setMessage("");
    }

    return(
        <div className="box">
            <div className="email">
                <input type="email" value={email} placeholder="Email:"
                onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="message">
                <input className="messageBox" type="message" value={message} placeholder="Message:"
                onChange={(e) => setMessage(e.target.value)}></input>
            </div>
            <button onClick={handleSend}>Send</button>
            <img src={vhlogo} className="logo"/>
        </div>
    );
}

export default SuggestionForm;