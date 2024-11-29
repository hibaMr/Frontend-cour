import { Link } from "react-router-dom";

function Menu(){
    return(
        <>

        <header class="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
            <div class="flex-1 flex justify-between items-center">
                <a href="#" class="text-xl">GESTION DES PRODUITS</a>
            </div>

            <label for="menu-toggle" class="pointer-cursor md:hidden block">
            <svg class="fill-current text-gray-900"
                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
            </label>
            <input class="hidden" type="checkbox" id="menu-toggle" />

            <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                <nav>
                    <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <li><Link class="md:p-4 py-3 px-0 block" to="/listProduit">Produits</Link></li>
                        <li><Link class="md:p-4 py-3 px-0 block" to="/addProduit">Ajouter</Link></li>
                    </ul>
                </nav>
            </div>
        </header>


            
            
        </>
    )
}
export default Menu;