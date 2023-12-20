import Slider from 'rc-slider';
import { useState } from 'react';
import 'rc-slider/assets/index.css';
import './FilterCards.css';

const FilterCards = ({ setFilter, filter, priceRange, setPriceRange }) => {
  const [minmax, setMinmax] = useState([priceRange[0], priceRange[1]]);
  const [inputValues, setInputValues] = useState([priceRange[0], priceRange[1]]);

  const handlePriceChange = (range) => {
    setPriceRange(range);
    setInputValues(range);
  };

  const handleClickCheck = (e) => {
    const updatedFilter = { ...filter };

    updatedFilter[e.target.name] = !filter[e.target.name];

    setFilter(updatedFilter);
    
  };

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
    setPriceRange([parseInt(newInputValues[0]), parseInt(newInputValues[1])]);
  };

  return (
    <div className='w-[300px]'>
      <h4>Product Categories</h4>
      <ul>
        {Object.keys(filter).map((key) => (
          <li key={key}>
            <label className='flex gap-2 capitalize cursor-pointer '>
              <input
                type="checkbox"
                name={key}
                onChange={(e) => handleClickCheck(e)}
                checked={filter[key]}
              />
              {key}
            </label>
          </li>
        ))}
      </ul>

      <div className='w-full'>
        <span>Цена</span>
        <div className='flex gap-2'>
          <input
            className='w-[100px] outline-none'
            type='text'
            value={inputValues[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}
          />
          -
          <input
            className='w-[100px] outline-none'
            type='text'
            value={inputValues[1]}
            onChange={(e) => handleInputChange(1, e.target.value)}
          />
        </div>
        <Slider
          range
          min={minmax[0]}
          max={minmax[1]}
          value={priceRange}
          onChange={handlePriceChange}
        />
      </div>
    </div>
  );
};

export default FilterCards;
