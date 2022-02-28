import SubMenu from './SubMenu';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  loading: boolean;
  setLoading: (active: boolean) => void;
}

interface ResponsData {
  data: Node[];
}

export interface Node {
  name: string;
  children?: Node[];
}

const Menu: React.FC<Props> = ({ loading, setLoading }) => {
  const location = useLocation();
  const { pathname } = location;
  const activeLocation = pathname.split('/')[1];

  const [menu, setMenu] = React.useState<ResponsData>();
  const [error, setError] = React.useState<string>('');
  useEffect(() => {
    async function fetchData() {
      await fetch(
        'https://run.mocky.io/v3/a477762c-4a4f-4826-99ca-1f6d730533c4'
      )
        .then((res) => res.json())
        .then((json) => {
          setMenu(json)
          setError('')
          setLoading(false)
        })
        .catch((error) => {
            setLoading(false)
            setError('Kunde inte ladda menyn.')
        });
    }
    fetchData();
  }, []);

  return (
    <ul>
      {menu?.data?.map((items: Node, i: number) => {
        return <SubMenu key={i} path={activeLocation} items={items} />;
      })}

      { error && (
          <p style={{fontSize: '1rem'}}>{error}</p>
      )}
    </ul>
  );
};

export default Menu;
