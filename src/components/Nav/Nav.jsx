export default function Nav() {
     return (
          <nav className="hidden md:inline text-sm h-screen space-y-32">
               <div className="pr-20">
                    <h2 className="text-2xl font-bold mb-5">Catálogo</h2>
                    <ul className="space-y-8 font-medium">
                         <li className="hover:transition duration-500 hover:text-orange-500"><a className="flex gap-2 items-center" href="www.google.com.br">
                              <img src="https://img.icons8.com/fluency/20/000000/star.png" alt="icon-novidades"/>
                              Novidades</a></li>
                         <li className="hover:transition duration-500 hover:text-orange-500"><a className="flex gap-2 items-center" href="www.google.com.br">
                              <img src="https://img.icons8.com/office/20/000000/jeans.png" alt="icon-vestuario"/>
                              Vestuário</a></li>
                         <li className="hover:transition duration-500 hover:text-orange-500"><a className="flex gap-2 items-center" href="www.google.com.br">
                              <img src="https://img.icons8.com/emoji/20/000000/running-shoe.png" alt="icon-sapato"/>Sapato</a>
                         </li>
                         <li className="hover:transition duration-500 hover:text-orange-500"><a className="flex gap-2 items-center" href="www.google.com.br">
                              <img src="https://img.icons8.com/color/20/000000/necklace.png" alt="icon-acessorios"/>
                              Acessórios</a></li>
                         <li className="hover:transition duration-500 hover:text-orange-500"><a className="flex gap-2 items-center" href="www.google.com.br">
                              <img src="https://img.icons8.com/ultraviolet/20/000000/cooking-pot.png"
                                   alt="icon-utilidades"/>
                              Utilidades</a></li>
                         <li className="hover:transition duration-500 hover:text-orange-500"><a className="flex gap-2 items-center" href="www.google.com.br">
                              <img src="https://img.icons8.com/color/20/000000/gift.png" alt="icon-vida-e-presentes"/>
                              Presentes e Vida</a></li>
                         <li className="hover:transition duration-500 hover:text-orange-500"><a className="flex gap-2 items-center" href="www.google.com.br">
                              <img src="https://img.icons8.com/color/20/000000/innovation.png" alt="icon-inspiracao"/>
                              Inspiração</a></li>
                    </ul>
               </div>

               <div>
                    <a href="www.google.com.br" className="flex gap-2 items-center">
                         <span><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"/></svg></span>
                         Ajuda
                    </a>
               </div>
          </nav>
     )
}