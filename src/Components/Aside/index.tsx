import React,{useState} from 'react';
import Toggle from '../Toggle';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu,
    MdSdCard,
} from 'react-icons/md';

import LogoImg from '../../assets/logo.svg';

import {useAuth} from '../../hooks/auth';
import {useTheme} from '../../hooks/theme';
import {  
    Container,  
    Header,  
    LogImg, 
    Title, 
    MenuContainer,
     MenuItemLink,
     MenuItemButton,
     ToggleMenu,
     ThemeToggleFooter,
} from './styles';

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    const{toggleTheme, theme} = useTheme();

    const [toggleMenuIsOpened, setToggleMenuOpened] = useState(false);
    const[ darkTheme, setDarkTheme] = useState(()=> theme.title === 'dark' ? true : false);

   

    const handleToggleMenu = () =>{
        setToggleMenuOpened(!toggleMenuIsOpened);
    }

    const handleChangeTheme = () =>{
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    return(
        <Container menuIsOpen={true}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    {toggleMenuIsOpened ? <MdClose/> :<MdMenu/>}
                </ToggleMenu>
                <LogImg src={LogoImg} alt="Logo Minha Carteira"/>
                <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
                    <MenuItemLink href="/">
                        <MdDashboard/>
                        Dashboard
                    </MenuItemLink>
                    <MenuItemLink href="/Cadastrar">
                        <MdSdCard/>
                       Novo Registro
                    </MenuItemLink>
                    <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward/>
                        Entrada
                    </MenuItemLink>
                   <MenuItemLink href="/list/exit-balance">
                        <MdArrowDownward/>
                        Saidas
                    </MenuItemLink>
                    <MenuItemButton onClick={signOut}>
                        <MdExitToApp/>
                        Sair
                    </MenuItemButton>
            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                <Toggle
                    labelLeft='Light'
                    labelRight='Dark'
                    checked={darkTheme}
                    onChange={handleChangeTheme}
            />
            </ThemeToggleFooter>
        </Container>
    );
}

export default Aside;