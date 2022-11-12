import Banner from "components/Banner/Banner";
import Produtos from "components/Produtos/Produtos";
import MenuIcons from "components/MenuIcons/MenuIcons";

export default function Main() {
     return (
          <main className="max-w-6xl mx-auto">
               <hr className="my-5" />
               <MenuIcons />
               <hr className="my-5" />
               <Banner />
               <Produtos />
          </main>
     )
}