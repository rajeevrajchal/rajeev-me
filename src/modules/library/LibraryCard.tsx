import Text from '@components/shared/Text';
import classNames from 'classnames';
import React from 'react';
import { GrFavorite } from 'react-icons/gr';

const LibraryCard = (props: any) => {
  const { item } = props;
  return (
    <div
      className={classNames(
        'card bg-base-100 shadow-xl min-h-94 relative',
        "bg-[url('/images/curve.svg')]",
        'bg-no-repeat',
        'bg-cover'
      )}
    >
      <div className="card-body flex flex-col items-center justify-center ">
        <div className="w-44 h-24">
          <img
            src={item.logo}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>
        <Text text={item.title} customClass="card-title text-center" />
        <Text text={item.metaDesc} />
      </div>
      <span className="absolute top-5 right-5 text-white">
        <GrFavorite size={30} className="text-white" />
      </span>
    </div>
  );
};

export default LibraryCard;
