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
                <input className="emailBox" type="email" value={email} placeholder="Email:"
                onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="message">
                <input className="messageBox" type="message" value={message} placeholder="Message:"
                onChange={(e) => setMessage(e.target.value)}></input>
            </div>
            <button className="sendButton" onClick={handleSend}>Send</button>
            <img src={vhlogo} className="formLogo"/>
        </div>
    );
}

export default SuggestionForm;