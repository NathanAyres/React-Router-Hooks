import React, {useState} from "react";
import hero from "../hero.svg";
import { Link, useHistory } from "react-router-dom";

const Main = () => {

    const [joined, setJoined] = useState("");
    const history = useHistory();


    const join = (e) =>{
        e.preventDefault();
        if(joined !== ""){
            let today = new Date();
            let date = today.getFullYear()+ '-' +(today.getMonth()+1) + '-' + today.getDate();
            history.push(`/thanks/${joined}`, date );
        }

    }



    return(
        <React.Fragment>
            <header>
                <img src={hero} alt=""/>
                <div>
                    <h1>Aprenda inglês online <br/> 100% digital.</h1>
                    <p>Aqui você irá encontrar as <b>poucas vagas para você</b> que <b>não conseguiu entrar</b> para a English School nos dias anteriores.</p>
                    <p>Com a English School, você é independente para desenvolver seu inglês onde quiser e na hora que puder.</p>
                    <Link to="/contact">Quero me inscrever já</Link>
                </div>
          
            </header>


            <main>
                <section className="services">
                     <h2>Por que devo me inscrever?</h2>

                     <div className="service-container">
                         <div className="services-card service-one"></div>
                         <div className="service-description">

                            <h3>Aplicativo de aprendizado.</h3>
                            <div><p>Atualmente, somos uma das 5 maiores escolas de ensino de linguagem, com um aplicativo ultra interativo.</p></div>

                         </div>
                    </div>



                    <div className="service-container">
                      
                      <div className="services-card service-two"></div>
                      <div className="service-description">
                          <h3>Clear &amp; Optimized Code.</h3>
                          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci bibendum pellentesque ut nec dolor. Quisque metus ipsum, pulvinar quis ipsum quis, consequat cursus leo. Suspendisse fermentum, nisl et ultricies blandit, mauris metus accumsan mauris, sit amet vulputate elit nunc id libero. Vivamus porta lacus libero, et ullamcorper est volutpat ac. Maecenas eros urna, interdum in lectus nec, tristique semper mauris. Duis finibus nunc sed nulla bibendum, ut ornare tellus finibus. Donec id magna risus.</div>
                      </div>
                    </div>



                    <div className="service-container">
                        <div className="services-card service-three"></div>
                        <div className="service-description">
                            <h3>Suporte 24 horas.</h3>
                            <div>Em nosso app, você terá sempre um suporte, tanto para dúvidas, quanto para discussões em grupo, é só dar um "save bro"</div>
                        </div>
                      
                    </div>
                </section>

                <section>
                    <h1>Junte-se ao nosso grupo e vamos aprender e aprimorar todos juntos!</h1>

                    <form className="newsletter" onSubmit={join}>
                        <input type="email" placeholder="Your email goes here" onChange={(e) => setJoined(e.target.value)} />
                        <input type="submit"  value="Join Now!"/>
                    </form>

                </section>
            </main>


        </React.Fragment>
    )
}


export default Main;