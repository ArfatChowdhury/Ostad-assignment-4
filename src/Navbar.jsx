import { useContext } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { ThemeContext } from "./Provider/ThemeProvider";

const Navbar = () => {

    const {theme , setTheme} = useContext(ThemeContext)

    return (
        <div className={` ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black' } flex justify-center`   }>
            <button onClick={()=> setTheme( theme === 'light' ? 'dark':'light')}><IoSunnyOutline className="text-5xl"></IoSunnyOutline></button>
        </div>
    );
};

export default Navbar;