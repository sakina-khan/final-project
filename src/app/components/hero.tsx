import React from "react";

const ProductCard = ({ image, name, price }) => (
  <div className="product-card bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition">
    <img
      src={image}
      alt={`Product: ${name}`}
      className="w-full h-40 object-cover mb-4 rounded-md" // Fixed height with object-cover
    />
    <h3 className="text-lg font-medium">{name}</h3>
    <p className="text-gray-500 mt-1">{price}</p>
  </div>
);

const CategoryCard = ({ image, name, productsCount }) => (
  <div className="category-card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
    <img
      src={image}
      alt={`Category: ${name}`}
      className="w-full h-48 object-cover rounded-md" // Fixed height with object-cover
    />
    <div className="p-4 text-center">
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-gray-500">{productsCount}</p>
    </div>
  </div>
);

const Hero = () => {
  const products = [
    { id: 1, image: "/Image (15).png", name: "Library Stool Chair", price: "$20" },
    { id: 2, image: "/Image (16).png", name: "Wing Chair", price: "$35" },
    { id: 3, image: "/Image (17).png", name: "Desk Chair", price: "$50" },
    { id: 4, image: "/Image (18).png", name: "Wooden Chair", price: "$25" },
    { id: 5, image: "/Image (19).png", name: "Comfort Chair", price: "$45" },
  ];

  const categories = [
    { id: 1, image: "/Image (22).png", name: "Wing Chair", productsCount: "214 Products" },
    { id: 2, image: "/Image (20).png", name: "Wooden Chair", productsCount: "187 Products" },
    { id: 3, image: "/Image (21).png", name: "Desk Chair", productsCount: "164 Products" },
  ];

  const sponsors = ["/Logo (1).png", "/Logo (2).png", "/Logo (3).png", "/Logo.png"];

  return (
    <section className="hero-section bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-snug">
            Best Furniture Collection <br /> For Your Interior.
          </h1>
          <button className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-md shadow hover:bg-blue-700 transition">
            Shop Now →
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/Product Image (1).png"
            alt="Comfortable Chair for Your Interior"
            className="max-w-lg"
          />
        </div>
      </div>

      {/* Sponsor Logos */}
      <div className="sponsors mt-10 flex justify-center flex-wrap gap-8">
        {sponsors.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Sponsor Logo ${index + 1}`}
            className="h-8"
          />
        ))}
      </div>

      {/* Featured Products */}
      <div className="featured-products mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="top-categories mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Top Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              image={category.image}
              name={category.name}
              productsCount={category.productsCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
