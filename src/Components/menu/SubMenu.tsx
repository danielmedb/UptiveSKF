import React from 'react'
import Arrow from '../Arrow';
import { Link } from "react-router-dom";

interface Props {
    items: {
        name?: string,
        children?: string[]
    }
    path: string,
}


const SubMenu: React.FC<Props> = ({items, path}) => {    
    const [Menus, setMenus] = React.useState(false);
    const [isActive, setIsActive] = React.useState(false);
    const [delayHandler, setDelayHandler] = React.useState<any>(null)


    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
        setDelayHandler(setTimeout(() => {
            setMenus(true)
        }, 200))
    }

    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
        clearTimeout(delayHandler)
    }
    return (
        <>
            <li className="top mb-5" onClick={() => {
                setMenus(!Menus) 
                setIsActive(!isActive) } 
                }>
                <div className="w-20" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {items.children && 
                        <Arrow active={Menus} />
                    }
                </div>
                    <Link className={`${items.name === decodeURIComponent(path) ? 'active'  : ''}`} to={`/${items.name}`}>{items.name}</Link>
            </li>
            {items.children?.map((sub: any, index: number) => {
               
                return (
                    <ul key={index} className={`mb-5${Menus ? '' : ' collapsed'}`}>
                        <SubMenu path={path} key={index} items={sub} />
                    </ul>
                )
            })}
        </>
    )
}

export default SubMenu