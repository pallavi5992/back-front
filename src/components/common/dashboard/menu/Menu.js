import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react';
import "./style.css"
import { NavLink, Outlet } from "react-router-dom"
import "@fortawesome/fontawesome-free/css/all.min.css"
import SubMenu from './SubMenu';


const menuAnimation = {
    hidden: {
        opacity: 0,
        height: 0,
        padding: 0,
        transition: { duration: 0.3, when: "afterChildren" },
    },
    show: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.3,
            when: "beforeChildren",
        },
    },
};

const menuItemAnimation = {
    hidden: (i) => ({
        padding: 0,
        x: "-100%",
        transition: {
            duration: (i + 1) * 0.1,
        },
    }),
    show: (i) => ({
        x: 0,
        transition: {
            duration: (i + 1) * 0.1,
        },
    }),
};

const Menu = ({ showAnimation, route, isOpen,setIsOpen }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isMenuItem,setIsMenuItem]=useState([{menuName:""}])
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsOpen(true)
        
    };
    useEffect(()=>{
       
        if(!isOpen){
            setIsMenuOpen(false)
        }
    },[isOpen])
  
    return (
        <>
            <div className="menu" onClick={toggleMenu}>
                <div className="menu_item">
                    <div className="icon">{route.icon}</div>  
                    <AnimatePresence>  
                        {isOpen && (
                            <motion.div
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                className="link_text"
                            >
                                {route.name} 
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                {isOpen &&(

                    <motion.div animate={isMenuOpen?{rotate:-90}:{rotate:0}} >
                    <i className='fa fa-angle-down'></i>
                </motion.div>
                )
                }
                </div>
               <AnimatePresence>
               {isMenuOpen && (<motion.div
                    variants={menuAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden" className="menu_container">
                    {
                        route.subRoutes.map((subRoute, i) => {
                            if(subRoute.subMenuRoute){
                                return (
                                    <SubMenu route={subRoute} isOpen={isOpen} setIsOpen={setIsOpen} key={subRoute.name}/>
                                )
                            }
                           return  (
                           <NavLink activeClassName="active" variants={menuItemAnimation} custom={i} to={subRoute.path} key={i} className="link">
                                <div className="icons">
                                    {subRoute.icon}
                                </div>
                                <AnimatePresence>

                                    {isOpen && <motion.div
                                        variants={showAnimation}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className="link_text"
                                    >
                                        {subRoute.name}
                                    </motion.div>}

                                </AnimatePresence>
                            </NavLink>
                            )
                        }
                        )
                    }
                </motion.div>)}
               </AnimatePresence>
            
        </>
    )
}

export default Menu