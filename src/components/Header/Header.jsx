import logo from "../../assets/img/aschadinhos-sn.svg"
import { GrMenu } from "react-icons/gr";
import { SlSocialInstagram } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";

export default function Header() {
     return (
          <header className="max-w-6xl mx-auto py-3">
               <div className="hidden md:block">
                    <ul className="flex gap-5 justify-center">
                         <li className="hover:underline underline-offset-8 decoration-2" ><a href="www.google.com.br"> Central do Vendedor</a></li>|
                         <li className="hover:underline underline-offset-8 decoration-2" ><a href="www.google.com.br">Venda na Shopee</a></li>|
                         <li className="flex gap-5">
                              Siga-nos no
                              <ul className="flex gap-2">
                                   <li><a href="https://www.instagram.com/as_achadinhos_/" target="_blank"><span><img src="https://img.icons8.com/ios/20/000000/instagram-new.png" alt="icon-instagram" /></span></a></li>
                                   <li><a href="www.google.com.br"><span><img src="https://img.icons8.com/ios/20/000000/facebook-new.png" alt="icon-facebook" /></span></a></li>
                              </ul>
                         </li>
                    </ul>
               </div>
               <div className="md:flex items-center">
                    <ul className="flex justify-end items-center gap-2 mx-2">
                         <li><a href="https://www.instagram.com/as_achadinhos_/" target="_blank"><span className="text-xl"><SlSocialInstagram /></span></a></li>
                         <li><a href="www.google.com.br"><span className="text-2xl"><CiFacebook /></span></a></li>
                    </ul>
                    
                    <div className="flex items-center gap-2 m-2 mt-2 mb-4">
                         <span className="text-2xl self-end"><GrMenu /></span>
                         <img className="" alt="logomarca" src={logo} />
                    </div>

                    <div className="w-full">
                         <form className="relative mx-2 md:mx-0">
                              <input className="rounded-full bg-gray-100 w-full px-10 py-2 outline outline-none placeholder:text-sm" id="" type="text" name="" placeholder="Procure na loja" />
                              <button className="absolute top-2 left-3">
                                   <span><svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></span>
                              </button>
                         </form>
                    </div>
                    
                    
               </div>
          </header>
     )
}