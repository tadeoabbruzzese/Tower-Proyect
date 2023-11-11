import styled from "styled-components";
import logo from "../assets/react.svg";
import {V} from "../styles/Variables";
import { AiOutlineLeft, AiFillHome } from "react-icons/ai";
import { GiAbstract050, GiArchiveResearch, Gi3DGlasses, GiCoffeeCup, GiCometSpark, GiContract, GiDatabase } from "react-icons/gi";
import { BsDiscord, BsDice3Fill } from "react-icons/bs"
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";

export function Sidebar({ sidebarOpen, setSidebarOpen }) {
    
    const ModSidebaropen = () =>{
        setSidebarOpen(!sidebarOpen);
    }
    const{setTheme, theme} = useContext(ThemeContext)
    const CambiarTheme = () =>{
        setTheme((theme)=>(theme ==="light" ?"dark" : "light"))
      }
    return(
    <Container isOpen={sidebarOpen} themeUse={theme}>
        <button className="Sidebarbutton"
        onClick={ModSidebaropen}>
            <AiOutlineLeft />
        </button>
        <div className="Logocontent">
            <div className="imgcontent">
            <img src="/background/gordomarron.jpg" alt="Logo Tower of GG" />
            </div>
            <h2>
                Tower Of GG
            </h2>
        </div>
        {linksArray.map(({icon, label, to}) =>(
            <div className="LinkContainer" key={label}>
                <NavLink to={to} className={({isActive}) =>`Links${isActive?` active`:``}` }>
                    <div className="Linkicon">
                       {icon}
                    </div>
                    {sidebarOpen && (
                         <span>{label}</span>
                        )
                    }

                </NavLink>
            </div>
        )) }
        <Divider />
        {secundarylinksArray.map(({icon, label, to}) =>(
            <div className="LinkContainer" key={label}>
                <NavLink to={to} className={({isActive}) =>`Links${isActive?` active`:``}` }>
                    <div className="Linkicon">
                       {icon}
                    </div>
                    {sidebarOpen && (
                         <span>{label}</span>
                        )
                    }

                </NavLink>
            </div>
        )) }
        <Divider />
        <div className="Themecontent">
            {sidebarOpen && <span className="titletheme">
                Dark Mode
            </span>}
            <div className="Togglecontent">
                <div className="grid theme-container">
                    <div className="content">
                        <div className="demo">
                            <label className="switch">
                                <input type="checkbox"  className="theme-switcher" onClick={CambiarTheme}/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </Container>
    );
}

//#region DATALINKS

const linksArray = [
    {
      label: "Simulacra",
      icon: <GiDatabase />,
      to: "/",
    },
    {
      label: "Matrices",
      icon: <GiContract />,
      to: "/matrices",
    },
    {
      label: "Tier List",
      icon: <GiCometSpark />,
      to: "/tierlist",
    },
    {
      label: "Relics",
      icon: <BsDice3Fill />,
      to: "/relics",
    },
    {
      label: "Guides",
      icon: <GiCoffeeCup />,
      to: "/guides",
    },
    {
        label: "Food",
        icon: <GiCoffeeCup />,
        to: "/food",
    }
  ];

const secundarylinksArray = [
    {
        label: "Discord",
        icon: <BsDiscord />,
        to: "https://discord.gg/vyn5DS9y"
    }
]
//#endregion



//#region STYLED COMPONENTS

const Container = styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: sticky;
  top: 0; 
  height: 100vh;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  .Logocontent {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.imgcontent {
    margin-bottom: 10px; /* Ajusta este margen según sea necesario */
}
    .Sidebarbutton{
        position: absolute;
        top: ${V.xxlSpacing};
        right: -18px;
        height: 32px;
        width: 32px;
        border-radius: 50%;
        background: ${(props)=>props.theme.bgtgderecha};
        box-shadow: 0 0 4px ${(props)=>props.theme.bg3},
        0 0 7px ${(props) =>props.theme.bg};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s;
        transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
        border: none;
        letter-spacing: inherit;
        font-size: inherit;
        text-align: inherit;
        color: inherit;
        padding: 0;
        font-family:inhertit;
        outline: none;
    }
    .Logocontent{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: ${V.lgSpacing};
        .imgcontent{
            display:flex;
            img{
                max-width: 80%;
                heigth: auto;
            }
            cursor: pointer;
            transition: all 0.3s;
            margin: 5px
            transform: ${({isOpen})=>(isOpen?`scale(1.2)` : `scale(0.7)`)}
        }
        h2{
            display: ${({isOpen}) =>(isOpen)?`block`:`none`};
            font-size: 25px;

        }
    }
    
    .LinkContainer{
        margin: 8px 0;
        padding: 0 15%;
        font-size: 17px;
        :hover{
            background: ${(props) =>props.theme.bg3};
        }
        .Links{
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: calc(${V.smSpacing} -2px) 0;
            color: ${(props)=> props.theme.text};
            .Linkicon{
                padding: ${V.smSpacing} ${V.mdSpacing};
                display: flex;
            }
            &.active{
                .Linkicon{
                    svg{
                        color: ${(props)=> props.theme.bg4};
                    }
                }
                span{
                    color: ${(props)=> props.theme.bg4};
                }
            }
        }}

        .Themecontent {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .titletheme{
              display: block;
              padding: 10px;
              font-weight: 700; 
              opacity: ${({isOpen}) =>(isOpen? `1`: `0`)};
              transition: all 0.3s;
              white-space: nowrap;
              overflow: hidden;
            }
            .Togglecontent{
                margin: ${({isOpen})=>(isOpen?`auto 40px`: `auto 15px`)};
                width: 36px;
                height: 20px;
                border-radius: 10px;
                transition: all 0.3s;
                position: relative;
                .theme-container{
                    background-blend-mode: multiply, multiply;
                    transition: 0.4s;
                    .grid{
                        display: grid;
                        justify-items: center;
                        align-content: center;
                        height: 100vh;
                        width: 100vw;
                        font-family: "Lato", sans-serif;
                    }
                    .demo{
                        font-size: 32px;
                        .switch{
                            position: relative;
                            display: inline-block;
                            width: 60px;
                            height: 34px;
                            .theme-switcher{
                                opacity: 0;
                                width: 0;
                                height: 0;
                                &:checked +.slider:before{
                                    left: 4px;
                                    content: "🌑";
                                    transform: translateX(26px);
                                }
                            }
                            .slider{
                                position: absolute;
                                cursor: pointer;
                                top: 0;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                background: ${({themeUse}) =>(themeUse ==="light"? V.lightcheckbox : V.checkbox)};
                                transition: 0.4s;
                                &::before{
                                    position: absolute;
                                    content: "☀️";
                                    width: 0px;
                                    left: -10px;
                                    top: 16px;
                                    line-height: 0px;
                                    transition: 0.4s;
                                }
                                &.round{
                                    border-radius: 34px;
                                    &::before{
                                        border-radius: 50%
                                    }
                                }
                            }
                        }
                    }
                }
            }
`
const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${(props) =>props.theme.bg3};
    margin: ${V.lgSpacing} 0;
`
//#endregion



