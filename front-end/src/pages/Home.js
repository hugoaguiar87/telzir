import React from "react";
import PlanInformation from "../components/PlansInformations";
import Simulation from "../components/Simulation";

import phone_fixed from '../media/phone_fixed.png';
import { Footer, Header } from "./styled";

const Home = () => {
    return(
        <div>
            <Header>
                <div className='header--'>
                    <img src={phone_fixed} alt='phone' />
                    <section className='header--firstname'>Telzir</section>
                    <section className='header--lastname'>Telefonia</section>
                </div>
            </Header>

            <PlanInformation/>

            <Simulation/>

            <Footer>
                <section>Copyright© Telzir Telefonia</section>
                <section>Todos os direitos reservados</section>
                <section>Feito com muito ❤️ por <a href='https://github.com/hugoaguiar87'>Hugo Aguiar</a></section>
            </Footer>
        </div>
    )
}

export default Home;