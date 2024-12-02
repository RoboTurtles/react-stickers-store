//components

import './App.css';
import React from 'react';
import Navbar from './navbar';
import Itembox from './itembox';

//images
import Components from './media/components.svg';
import Hooks from './media/hooks.svg';
import Enjoy_the_views from './media/enjoy-the-views.svg';
import Full_snack from './media/full-snack-dev.svg';
import Functions from './media/functions.svg';
import jsx from './media/i-want-my-jsx.svg';
import props from './media/props.svg';
import Usestate from './media/useState.svg';
import will_it_render from './media/will-it-render.svg';

export default function App() {
  const [isActive, setIsActive] = React.useState('Store');

  const handleButtonClick = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  const items = [
    {
      item: 'Components Sticker',
      img: Components,
      description: 'Getting started with React? Show off your understanding of how React categorizes: Components!',
      price: '0.99'
    },
    {
      item: 'Hooks Sticker',
      img: Hooks,
      description: 'Are you a React pro? Show off your understanding of React Hooks with this sticker! Limited time only.',
      price: '2.99'
    },
    {
      item: 'Enjoy the Views Sticker',
      img: Enjoy_the_views,
      description: 'Enjoy the views of React, complete with runtime errors! You will have a great time here, believe me.',
      price: '1'
    },
    {
      item: 'Full Snack Dev Sticker',
      img: Full_snack,
      description: 'Become the full snack developer you were always meant to be with this sticker! Snacks sometimes included.',
      price: '3.99'
    },
    {
      item: 'Functions Sticker',
      img: Functions,
      description: 'Put the fun in Functions! Show the building blocks of React to the world with this anitiquated sticker.',
      price: '1.99'
    },
    {
      item: 'JSX Sticker',
      img: jsx,
      description: 'I want my JSX! JSX, the interesting brainchild of HTML and JavaScript, is now available in sticker form.',
      price: '0.99'
    },
    {
      item: 'Props Sticker',
      img: props,
      description: 'Props to you! Pass them down to your react components and show them the beauty of sharing, or just buy this sticker instead.',
      price: '2.50'
    },
    {
      item: 'UseState Sticker',
      img: Usestate,
      description: 'The best hook in React, that will save your life in more than one way: useState! Demonstrate your love with some ill-advised sticker purchases!',
      price: '1.50'
    },
    {
      item: 'Will it (re)-Render? Sticker',
      img: will_it_render,
      description: 'It might blend, but it will never render! Put this next to your programming setup to give you good luck in your future rendering.',
      price: '1.99'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar isActive={isActive} setIsActive={setIsActive}/>

      <main className="flex flex-col items-center justify-top min-h-screen pt-20 space-y-4">
        <h1 className="text-4xl text-white font-bold">{isActive} Page</h1>
        <p className="text-gray-300 text-2xl">The best stickers in the world (Guaranteed)</p>
        <button onClick={handleButtonClick} className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-teal-600">
          Press for Black Friday discounts!
        </button>
        <div className="flex flex-wrap justify-center gap-10">
          {items.map((product, index) => (
            <Itembox
              key={index}
              item={product.item}
              img={product.img}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
