import React, { useState } from "react";
import './SortCard.css';
import { CiGrid41, CiBoxList } from "react-icons/ci";

const SortCard = ({ setSortType, setviewType }) => {
  const [selectedSort, setSelectedSort] = useState('default');
  const [selectedView, setSelectedView] = useState('list');

  const handleSortChange = (sortType) => {
    setSelectedSort(sortType);
    setSortType(sortType);
  };

  const handleViewChange = (viewType) => {
    setSelectedView(viewType);
    setviewType(viewType);
  };

  return (
    <div className="flex gap-10">
      <div className="flex gap-5">
        <button
          onClick={() => handleSortChange('default')}
          className={selectedSort === 'default' ? 'active-btn' : 'default-btn'}
        >
          по умолчанию
        </button>
        <button
          onClick={() => handleSortChange('name')}
          className={selectedSort === 'name' ? 'active-btn' : 'default-btn'}
        >
          по имени
        </button>
        <button
          onClick={() => handleSortChange('price')}
          className={selectedSort === 'price' ? 'active-btn' : 'default-btn'}
        >
          по цене
        </button>
      </div>
      <div className="flex gap-2">
        <button onClick={() => handleViewChange('list')}>
          <CiBoxList className={selectedView === 'list' ? 'active-view' : 'default-view'} size={24}/>
        </button>
        <button onClick={() => handleViewChange('grid')}>
          <CiGrid41 className={selectedView === 'grid' ? 'active-view' : 'default-view'} size={24}/>
        </button>
      </div>
    </div>
  );
};

export default SortCard;
