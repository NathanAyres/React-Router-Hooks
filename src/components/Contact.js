import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Contact = () => {

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    }

    const [title, setTitle] = useState("");
    const [content] = useState("");
    const [contactEmail, setContactEmail] = useState(""); 

    const sendEmail = async(e) =>{
        e.preventDefault();

        let email = {
            title,
            content,
            contactEmail
        }

        console.log("sending email", email);
    }


    return(
        <React.Fragment>
           <button className="back" onClick={goBack}> &larr; Voltar</button>

            <form className="contact" onSubmit={sendEmail}>
                <h2>preencha seus dados para iniciarmos o cadastro</h2>
                
                <label htmlFor="title">Nome completo: </label>
                <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
            
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" onChange={(e) => setContactEmail(e.target.value)} />

                <input type="submit" value="Enviar" />
            </form>

        </React.Fragment>
    )

}


export default Contact;