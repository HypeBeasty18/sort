import { useSelector } from 'react-redux';
import Home from '../screens/home/Home';
import { useState } from 'react';
import SortCard from '../../services/sortCard/SortCard';
import FilterCards from '../../services/filterCards/FilterCards';


const Layout = () => {

  const products = useSelector(state => state.products);

  const minPrice = Math.min(...products.map(product => parseInt(product.price, 10)));

  const maxPrice = Math.max(...products.map(product => parseInt(product.price, 10))); 


  const [sortType, setSortType] = useState('default')
  const [viewType, setviewType] = useState('list')

  const [priceRange, setPriceRange] = useState([minPrice, maxPrice])

  const [filter, setFilter] = useState(
    {
      yellow: false,
      green: false,
      orange: false,
      red: false,
      white: false,
      fruit: false,
      vegetable: false,
      favorite: false,
    }
  )
  const activeFilters = Object.keys(filter).filter(key => filter[key]);
  

const filteredProducts = products.filter(product => {

  const productPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

  const allMatch = activeFilters.every(aFilter => aFilter === product.color || aFilter === product.type || aFilter === product.class);

  if (allMatch && productPrice) {
    return true; 
  } else {
    return false; 
  }
})
.sort((a, b) => {
  if (sortType === 'default') {
    // Если выбран тип сортировки по умолчанию, возвращаем оригинальный порядок
    return 0;
  } else if (sortType === 'name') {
    return a.name.localeCompare(b.name); // Сортировка по имени в алфавитном порядке
  } else if (sortType === 'price') {
    return parseInt(a.price, 10) - parseInt(b.price, 10); // Сортировка по цене в порядке возрастания
  } 
  return 0;
});

  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="mx-auto w-[1440px] ">
        <nav>
          <div>
            <h3>Fresh Organic Products</h3>
            <p>KOL-VO PRODUCTS {products.length}</p>
          </div>
          <div>

            <SortCard setSortType={setSortType} setviewType={setviewType}  />
            
          </div>
        </nav>
        <div>
          <FilterCards setFilter={setFilter} filter={filter} priceRange={priceRange} setPriceRange={setPriceRange} />
          <Home products={filteredProducts} viewType={viewType}/>
        </div>

      </div>
    </div>
  );
}

export default Layout;


