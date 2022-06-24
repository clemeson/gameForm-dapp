import React, { useState } from "react";
import Header from "../components/headerComponents/Header";
import Selo from "../components/footer/Selo";
import Buy from "../services/BuyService";
import Footer from "../components/footer/Footer";


const Home = () => {



   





    return (
        <>

            <main className="content">
                <div className="container-bg-1 content ">

                    <Header></Header>

                    <div className="container row mx-auto">
                        <div className="col-md-6 mt-4">

                            <h4 className="h4 fs-1 fw-bolder mt-4">
                                Ei jogador!
                                Que tal transformar a sua paixão em games em algo lucrativo?
                            </h4>

                            <p className="text-white fs-5 mt-4">
                                Você vai aprender que existe um caminho muito melhor para crescer de verdade no mercado gamer! Com um passo a passo e ferramentas para ajudar no seu desenvolvimento.
                            </p>

                            <a className="btn btn-primary mt-4" href="#checkout">EU QUERO APRENDER</a>
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <div className="container-bg-2">
                    <div className="container d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-6 mt-4">
                                <iframe className="video" src="https://www.youtube.com/embed/DN9pj6JA1lM" title="Pare de depender das plataformas de streaming" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="container-bg-3 px-4">
                    <div className="container d-flex flex-column justify-content-center text-center">
                        <div className="row gap-4 d-flex justify-content-center mt-5">
                            <div className="col-md-3 border d-flex flex-column p-4">
                                <svg className="icon icon-xl" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>

                                <h4 className="h4 p-2 fs-6">

                                    PARE DE QUEBRAR A CABEÇA COM LIVES E CONTEÚDOS
                                </h4>
                                <p className="text-white ">
                                    Existem muitas outras maneiras de você fazer renda com seus conteúdos e a gente sabe muito bem como fazer isso!
                                </p>

                            </div>



                            <div className="col-md-3 border d-flex flex-column p-4 ">
                                <svg class="icon icon-xl" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <h4 className="h4 p-2 fs-6">
                                    GANHAR DINHEIRO
                                    COM GAMES
                                </h4>
                                <p className="text-white">
                                    Eu vou te mostrar como monetizar seus canais e perfis em redes sociais, pare agora mesmo de pedir doação e ficar dependendo das plataformas de stream.
                                </p>

                            </div>



                            <div className="col-md-3 border d-flex flex-column p-4 mx-2">
                                <svg class="icon icon-xl" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>

                                <h4 className="h4 p-2 fs-6">

                                    CRIAR UM NEGÓCIO
                                </h4>

                                <p className="text-white">
                                    Através dos games, eu vou te mostrar como você pode ser o dono do próprio negócio, comprar as coisas que gosta e principalmente saber quanto quer ganhar.
                                </p>
                            </div>

                        </div>



                        <div className="row d-flex justify-content-center mt-10 mb-5">
                            <div className="col-md-5">
                                <img className="img" src="./img/img-two-men.jpg"></img>
                            </div>

                            <div className="col-md-5 border-end bg-dark">
                                <h4 className="h4 p-2 mt-4">
                                    ME RESPONDA ESSAS PERGUNTAS.
                                </h4>
                                <p className="text-white">
                                    Você gosta de jogar, mas as pessoas em sua volta não te respeitam? Acham que você está perdendo tempo? Acham que você tem que gastar o seu tempo em algo que te dê dinheiro?
                                    É difícil né quando você tem uma paixão, mas as pessoas em volta não entendem, ou até tiram sarro dos seus sonhos…

                                    Quantas vezes você já foi motivo de piada por ter falado que gostaria de seguir uma carreira gamer, seja ela:

                                </p>

                                <div className="text-start">
                                    <p className="text-white">
                                        <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        Youtuber/Streamer/Influencer
                                    </p>

                                    <p className="text-white">
                                        <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        Youtuber/Streamer/Influencer
                                    </p>

                                    <p className="text-white">
                                        <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        Youtuber/Streamer/Influencer
                                    </p>

                                </div>

                                <div>
                                    <p className="text-white mt-3 text-start">
                                        O fato é que você se sente desmotivado para seguir em frente, e acaba absorvendo a frustração dessas pessoas, mas se me permitir, vou te dar um conselho…


                                    </p>
                                </div>

                                <div>
                                    <p className="text-white text-start">
                                        A sua paixão pode e será muito lucrativa na sua vida! E você vai ver todas essas pessoas que fizeram pouco caso da sua paixão, te admirando ao verem onde você chegou
                                    </p>
                                </div>

                                <div>
                                    <a className="btn btn-primary" href='#checkout'>
                                        Eu quero aprender
                                    </a>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>

                <div className="container-bg-4 content pb-5">
                    <div className="container">
                        <div className="row pt-5" id="checkout">
                            <div className="col-md-4 bg-dark text-white d-flex flex-column px-4">
                                <h4 className="fw-bolder text-center mt-4">ANUIDADE - COM BÔNUS</h4>
                                <h5 className="fw-bolder text-orange text-center mt-4 text-decoration-line-through">DE R$ 97,22 /MêS</h5>
                                <div>
                                    <p className="text-center">por apenas 12x de</p>
                                    <div className="d-flex align-items-center flex-column">
                                        <div className="d-flex">
                                            <p className="fw-bolder mt-4 me-2">R$</p>
                                            <p className="fs-1 fw-bolder">77,</p>
                                            <p className="fw-bolder mt-3 fs-4"> 75</p>
                                        </div>

                                        <p className="ms-2">/POR MÊS</p>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>Página de evolução empresarial</p>

                                </div>
                                <hr />
                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>Bônus - Monte sua empresa ou negócio digital com mentoria e acompanhamento</p>

                                </div>
                                <hr />
                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>Analise de mercado</p>

                                </div>
                                <hr />
                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>Analise de perfis em rede social</p>

                                </div>

                                <hr />
                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>
                                        Mentoria sobre comportamento em redes sociais</p>

                                </div>
                                <hr />
                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>Mentoria sobre facebook e instagram Ads (anúncios)</p>

                                </div>
                                <hr />
                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>Acesso a todas as aulas</p>

                                </div>
                                <hr />
                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>
                                        Acesso a todas as ferramentas (dashboard)</p>

                                </div>
                                <hr />
                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>Módulos dinâmicos
                                    </p>

                                </div>
                                <hr />
                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>Acesso a área de membros Hotmart</p>

                                </div>
                                <hr />
                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>Aulas legendadas</p>

                                </div>
                                <hr />
                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>Mentoria sobre comportamento em redes sociais</p>

                                </div>
                                <hr />
                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>E-books de apoio em todos os módulos</p>

                                </div>
                                <hr />
                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>Treinamento de liderança
                                    </p>

                                </div>
                                <hr />
                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>Treinamento de comunicação</p>

                                </div>
                                <hr />
                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>Treinamento em traçar objetivos (METAS)</p>

                                </div>
                                <hr />

                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>Treinamento em autoconfiança
                                    </p>

                                </div>
                                <hr />


                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>Treinamento de raciocínio rápido e lógico
                                    </p>

                                </div>
                                <hr />


                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>
                                        Treinamento de planejamento</p>

                                </div>
                                <hr />


                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>Aprenda a tomar decisões</p>

                                </div>
                                <hr />


                                <div className="d-flex">
                                    <svg class="icon icon-xs me-2" fill="none" stroke="#F15C46" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <p>Página de evolução pessoal</p>

                                </div>

                                <div className="d-flex align-items-center mt-4 justify-content-center">
                                <Buy price={'0.0008'} btn='btn-primary'></Buy>

                                </div>

                                <div className="col-md-12 mt-4">
                                    <img className="img-fluid" src="./img/compra-segura.png" >


                                    </img>
                                </div>

                               
                               
                            </div>

                           
                        </div>

                    </div>
                </div>

              
                <Footer></Footer>



             




            </main>

        </>
    )   


}

export default Home