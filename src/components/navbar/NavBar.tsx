import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/icon_branco_bg_vermelho.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current && 
            !menuRef.current.contains(event.target as Node) &&
            buttonRef.current && 
            !buttonRef.current.contains(event.target as Node)
        ) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white shadow-md p-4 relative">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 w-10 rounded-full mr-2"
                    />
                    <span className="text-lg font-bold text-gray-800">YourFood</span>
                </div>

                {/* Hamburger Menu Button */}
                <button
                    ref={buttonRef}
                    className="text-red-500 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Dropdown Menu */}
            {menuOpen && (
                <nav
                    ref={menuRef}
                    className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-lg p-4"
                >
                    <ul className="flex flex-col space-y-2">
                        <li className="text-gray-800 hover:text-red-500"><Link to={'/'}>Home</Link></li>
                        <li className="text-gray-800 hover:text-red-500"><Link to={'/perfil'}>Perfil</Link></li>
                        <li className="text-gray-800 hover:text-red-500"><Link to={'/produtos'}>Produto</Link></li>
                        <li className="text-gray-800 hover:text-red-500"><Link to={'/categorias'}>Categoria</Link></li>
                        <li className="text-gray-800 hover:text-red-500"><Link to={'/sobre'}>Sobre</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
