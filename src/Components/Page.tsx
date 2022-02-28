import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/main.css';
import Spinner from './Spinner';

interface Props {
  loading: boolean;
  setLoading: (active: boolean) => void;
}

const Page: React.FC<Props> = ({ loading, setLoading }) => {
  const { link } = useParams();
  return (
    <>
      {loading && (
        <div className="loading">
          <Spinner />
        </div>
      )}
      <p>{link ? link : 'Nothing selected'}</p>
    </>
  );
};

export default Page;
