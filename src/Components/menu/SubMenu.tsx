import React from 'react';
import Arrow from '../Arrow';
import { NavLink } from 'react-router-dom';
import { Node } from './Menu'

interface Props {
  items: Node;
  path: string;
}


const SubMenu: React.FC<Props> = ({ items, path }) => {
  const [Menus, setMenus] = React.useState<boolean>(false);
  const [isActive, setIsActive] = React.useState<boolean>(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    setMenus(true)
  };

  return (
    <>
      <li
        className="top mb-5"
        onClick={() => {
          setMenus(!Menus);
          setIsActive(!isActive);
        }}
      >
        <div
          className="w-20"
          onMouseEnter={handleMouseEnter}
        >
          {items.children && <Arrow active={Menus} />}
        </div>

        <NavLink
          className={`${
            items.name === decodeURIComponent(path) ? 'active' : ''
          }`}
          to={`/${items.name}`}
        >
          {items.name}
        </NavLink>
      </li>
      {items.children?.map((sub: Node, index: number) => {
        return (
          <ul key={index} className={`mb-5${Menus ? '' : ' collapsed'}`}>
            <SubMenu path={path} key={index} items={sub} />
          </ul>
        );
      })}
    </>
  );
};

export default SubMenu;
