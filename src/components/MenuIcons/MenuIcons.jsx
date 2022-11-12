import shopee from "../../assets/img/shopee.png";
import tecnologia from "../../assets/img/tecnologia.png";
import games from "../../assets/img/game.png";
import cupom from "../../assets/img/cupom.png";
import frete from "../../assets/img/frete.png";
import beleza from "../../assets/img/beleza.png";
import moda from "../../assets/img/moda.png";
import moeda from "../../assets/img/moeda.png";


export default function MenuIcons(){
     return(
          <div>
               <ul className="grid gap-y-4 grid-cols-4 md:grid-cols-8 justify-center text-xs">
                    <li className="text-center space-y-3">
                         <div className="w-16 mx-auto">
                              <a href="#">
                                   <img className="w-full h-full" src={shopee} />
                              </a>
                         </div>
                         <p>Shopee Oficial</p>
                    </li>
                    <li className="text-center space-y-3">
                         <div className="w-16 mx-auto">
                              <a href="#">
                                   <img className="w-full h-full" src={games} />
                              </a>
                         </div>
                         <p>Games</p>
                    </li>
                    <li className="text-center space-y-3">
                         <div className="w-16 mx-auto">
                              <a href="#">
                                   <img className="w-full h-full" src={cupom} />

                              </a>
                         </div>
                         <p>Cupons</p>
                    </li>
                    <li className="text-center space-y-3">
                         <div className="w-16 mx-auto">
                              <a href="#">
                                   <img className="w-full h-full" src={frete} />

                              </a>
                         </div>
                         <p>Frete</p>
                    </li>
                    <li className="text-center space-y-3">
                         <div className="w-16 mx-auto">
                              <a href="#">
                                   <img className="w-full h-full" src={tecnologia} />

                              </a>
                         </div>
                         <p>Tecnologia</p>
                    </li>
                    <li className="text-center space-y-3">
                         <div className="w-16 mx-auto">
                              <a href="#">
                                   <img className="w-full h-full" src={beleza} />

                              </a>
                         </div>
                         <p>Beleza</p>
                    </li>
                    <li className="text-center space-y-3">
                         <div className="w-16 mx-auto">
                              <a href="#">
                                   <img className="w-full h-full" src={moda} />

                              </a>
                         </div>
                         <p>Moda</p>
                    </li>
                    <li className="text-center space-y-3">
                         <div className="w-16 mx-auto">
                              <a href="#">
                                   <img className="w-full h-full" src={moeda} />

                              </a>
                         </div>
                         <p>Moeda</p>
                    </li>
               </ul>
          </div>
     )
}