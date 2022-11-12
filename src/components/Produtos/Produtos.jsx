import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import React from "react";

const firebaseConfig = {
      apiKey: "AIzaSyD_3GBVKvv4k9D7PHTIpSDTQtpDo4iavqE",
      authDomain: "aschadinhosfirebase.firebaseapp.com",
      projectId: "aschadinhosfirebase"
};


const app = initializeApp(firebaseConfig);

export default function Produtos() {
      const [produtos, setProduto] = React.useState([]);

      const shein = "bg-slate-300 px-1 block absolute right-0 capitalize"
      const shopee = "bg-orange-300 px-1 block absolute right-0 capitalize"

      const db = getFirestore(app);
      const productsCollectionRef = collection(db, "roupa feminina");

      React.useEffect(() => {
            const getProducts = async () => {
                  const data = await getDocs(productsCollectionRef);
                  const getProdutos = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                  setProduto(getProdutos);
                  console.log(getProdutos[0].id);
            };
            getProducts();
      }, [])

      return (

            
            <section className="space-y-5 px-2">
                  <div>
                        <h2 className="py-5 font-semibold text-lg">Roupas Femininas</h2>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-5 drop-shadow-xl">
                              {produtos.map((item) => {
                                    return (
                                          <div key={item.id} className="space-y-5">
                                          <div className="relative">
                                                <span className={item.store == "shein" ? shein : shopee}>{item.store}</span>
                                                <span className="bg-black text-white  px-1 block absolute left-0">{item.discount * 100}%</span>
                                                <img className="w-full h-full rounded" src={item.image.src} alt={item.image.alt} />
                                          </div>
                                          <div className="space-y-1">
                                                <h3 className="text-sm bg-black px-1 text-white">{item.name}</h3>
                                                <p className="text-red-500 text-base">R${(+item.value - (+item.value * item.discount) ).toFixed(2).replace(".", ",") } </p>
                                                <span className="line-through text-xs">R$ {(+item.value).toFixed(2).replace(".", ",")} </span>
                                                <a href="#" className="font-medium text-gray-700 border bg-slate-50 py-1 block text-center rounded hover:bg-black hover:text-white hover:transition duration-300">Ir para Loja</a>
                                          </div>
                                    </div>
                                    )
                              })

                              }
                        </div>
                  </div>
            </section>
      )
}