import { Hero } from "../../components/Hero/Hero";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import Coffe1 from "../../assets/coffee1.png";
import Coffe2 from "../../assets/coffee2.png";
import Coffe3 from "../../assets/coffee3.png";
import Coffe4 from "../../assets/coffee4.png";
import Coffe5 from "../../assets/coffee5.png";
import Coffe6 from "../../assets/coffee6.png";
import Coffe7 from "../../assets/coffee7.png";
import Coffe8 from "../../assets/coffee8.png";
import Coffe9 from "../../assets/coffee9.png";
import Coffe10 from "../../assets/coffee10.png";
import Coffe11 from "../../assets/coffee11.png";
import Coffe12 from "../../assets/coffee12.png";
import Coffe13 from "../../assets/coffee13.png";
import Coffe14 from "../../assets/coffee14.png";
import { useState } from "react";

const cardsData = [
  {
    id: 1,
    image: Coffe1,
    title: "Tradicional",
    subtitle: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    quantity: 1,
  },
  {
    id: 2,
    image: Coffe2,
    title: "Tradicional",
    subtitle: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    quantity: 1,
  },
  {
    id: 3,
    image: Coffe3,
    title: "Tradicional",
    subtitle: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    quantity: 1,
  },
  {
    id: 4,
    image: Coffe4,
    title: "Tradicional",
    title2: "com leite",
    subtitle: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    quantity: 1,
  },
  {
    id: 5,
    image: Coffe5,
    title: "Tradicional",
    title2: "com leite",
    subtitle: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    quantity: 1,
  },
  {
    id: 6,
    image: Coffe6,
    title: "Capuccino",
    title2: "com leite",
    subtitle: "Suave e Cremoso",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    quantity: 1,
  },
  {
    id: 7,
    image: Coffe7,
    title: "Tradicional",
    title2: "com leite",
    subtitle: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    quantity: 1,
  },
  {
    id: 8,
    image: Coffe8,
    title: "Especial",
    title2: "com leite",
    subtitle: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    quantity: 1,
  },
  {
    id: 9,
    image: Coffe9,
    title: "especial",
    title2: "alcoólico",
    title3: "gelado",
    subtitle: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    quantity: 1,
  },
  {
    id: 10,
    image: Coffe10,
    title: "especial",
    subtitle: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    quantity: 1,
  },
  {
    id: 11,
    image: Coffe11,
    title: "especial",
    title2: "alcoólico",
    subtitle: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    quantity: 1,
  },
  {
    id: 12,
    image: Coffe12,
    title: "tradicional",
    title2: "Gelado",
    subtitle: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    quantity: 1,
  },
  {
    id: 13,
    image: Coffe13,
    title: "tradicional",
    title2: "com leite",
    subtitle: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    quantity: 1,
  },
  {
    id: 14,
    image: Coffe14,
    title: "especial",
    subtitle: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    quantity: 1,
  },
];

export const Home = () => {
  const [products, setProducts] = useState(cardsData);

  const increaseQuantity = (productId: number) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      })
    );
  };

  const decreaseQuantity = (productId: number) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      })
    );
  };

  return (
    <div className="mb-10">
      <Hero />
      <div className="mx-auto max-w-7xl px-5">
        <h1
          className="text-4xl font-bold mb-12"
          style={{ fontFamily: "'Baloo 2', sans-serif" }}
        >
          Nossos cafés
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              title2={product.title2}
              title3={product.title3}
              subtitle={product.subtitle}
              description={product.description}
              price={product.price}
              quantity={product.quantity}
              onIncrease={() => increaseQuantity(product.id)}
              onDecrease={() => decreaseQuantity(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
