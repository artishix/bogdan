import { useLayoutEffect, useState } from "react";
import "./Header.scss";
import Container from "../Container/Container";
import stadium from "../../assets/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { IoMdClose } from "react-icons/io";
import Navigation from "../Navigation/Navigation";
import { navigation } from "../../data";
import NavItem from "../NavList/NavItem";
import { Link } from "react-router-dom";

const Header = () => {
    const screenWidth = useMediaQuery();
    const [menu, setMenu] = useState(false);

    useLayoutEffect(() => {
        if (menu) document.documentElement.style.overflowY = "hidden";
        else document.documentElement.style.overflowY = "auto";
    }, [menu]);

    return (
        <>
            <header className="header">
                <Container>
                    <div className="header__content">
                        <Link to="/" onClick={() => setMenu(false)}>
                            <img src={stadium} alt="Football Stadium" className="header__logo" />
                        </Link>
                        <nav className="header__navigation">
                            {screenWidth >= 768 ? (
                                <ul>
                                    {navigation.map((item, index) => (
                                        <NavItem {...item} key={index} />
                                    ))}
                                </ul>
                            ) : menu ? (
                                <IoMdClose fontSize={24} cursor="pointer" onClick={() => setMenu(false)} />
                            ) : (
                                <RxHamburgerMenu fontSize={24} cursor="pointer" onClick={() => setMenu(true)} />
                            )}
                        </nav>
                    </div>
                </Container>
            </header>
            <Navigation isVisible={menu} setMenu={setMenu} />
        </>
    );
};

export default Header;
