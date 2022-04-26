import {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import Input from './../Input'
import './heading.css'

const Index = () => {
    const [active, setActive] = useState(0)
    const headerRef = useRef(null)
    const headerNav = [ 
        { 
            name: 'Home',
            path: '/'
        },
        { 
            name: 'Movies',
            path: '/movies'
        },
        { 
            name: 'TV Series',
            path: '/tvseries'
        }
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                headerRef.current.classList.add('fixed')
            } else {
                headerRef.current.classList.remove('fixed')
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    return (
        <div ref={headerRef} className="header">
            <div className="logo">
                <img src="" alt=""/>
                <Link to="/">nMovie</Link>
            </div>
            <ul className="header__nav">
                {
                headerNav.map((item, index) =>(
                    <li key={index}>
                        <Link to={item.path}>
                            <span className={active === index ? 'active' : ''} onClick={()=>setActive(index)}
                            >
                                {item.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
            <Input />
        </div>
    );
};

export default Index;