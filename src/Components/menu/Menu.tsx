import SubMenu from "./SubMenu";
import React from 'react';
import { useLocation } from "react-router-dom";

interface Props {
    loading: boolean;
    setLoading: (active: boolean) => void
}
const Menu: React.FC<Props> = ({loading, setLoading}) => {

    const location = useLocation();
    const { pathname } = location;
    const activeLocation = pathname.split('/')[1];

    const [menu, setMenu] = React.useState<any>([]);
    React.useState(async () => {
        await fetch("https://run.mocky.io/v3/a477762c-4a4f-4826-99ca-1f6d730533c4")
        .then((res) => res.json())
        .then((json) => {
            setMenu(json)
            setLoading(false)
        }).catch(error => console.log(error))
    });

    return (
        <ul>
            {menu.data?.map((items: object, i: number) => {
                return (
                    <SubMenu key={i} path={activeLocation} items={items} />
                )
            })}
        </ul>
    )
}

export default Menu