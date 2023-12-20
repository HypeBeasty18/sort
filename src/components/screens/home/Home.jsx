import ProductCard from "../../ui/productCard/ProductCard";

const Home = ({ products, viewType }) => {
  return (
    <>


    {viewType === 'list' ? 
      <div className="">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.name} product={product} />
          ))
        ) : (
          <p className="w-[600px] mx-auto text-center">No products available</p>
        )}
      </div>
      : 

      <div className="flex flex-wrap justify-around">
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard key={product.name} product={product} />
        ))
      ) : (
        <p className="w-[600px] mx-auto text-center">No products available</p>
      )}
    </div>

    }



    </>
  );

}

export default Home;
