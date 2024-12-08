import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  const products = [
    { id: 1, name: 'Library Stool Chair', price: '$20', image: 'picture1.png' },
    { id: 2, name: 'Comfort Armchair', price: '$30', image: 'picture2.png' },
    { id: 3, name: 'Modern Chair', price: '$25', image: 'picture3.png' },
    { id: 4, name: 'Elegant Chair', price: '$40', image: 'picture4.png' },
    { id: 5, name: 'Library Stool Chair', price: '$20', image: 'picture5.png' },
    { id: 6, name: 'Comfort Armchair', price: '$30', image: 'picture.png' },
    { id: 7, name: 'Modern Chair', price: '$25', image: 'picture7.png' },
    { id: 8, name: 'Elegant Chair', price: '$40', image: 'picture8.png' },
    { id: 9, name: 'Library Stool Chair', price: '$20', image: 'picture9.png' },
    { id: 10, name: 'Comfort Armchair', price: '$30', image: 'picture10.png' },
    { id: 11, name: 'Modern Chair', price: '$25', image: 'picture11.png' },
    { id: 12, name: 'Elegant Chair', price: '$40', image: 'picture12.png' },
  ];
  

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          All Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="h-40 overflow-hidden">
                {/* Corrected Image Path */}
                <Image
  src={`/images/${product.image}`}  // This should work if the images are in the public/images folder
  alt={product.name}
  width={400}
  height={400}
  className="object-cover w-full h-full"
/>

              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {product.name}
                </h3>
                <div className="text-gray-500">{product.price}</div>
              </div>

              {/* Link for Product Details */}
              <Link href={`/product/${product.id}`} legacyBehavior>
                <a className="block mt-4 text-center text-blue-500 hover:underline">
                  View Details
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
