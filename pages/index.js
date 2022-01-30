import styles from '../styles/Home.module.css';
import { useEffect, useRef, useState } from 'react';

export default function Test() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(1);
  const [amount, setAmount] = useState('');
  const [tSItem, setTSItem] = useState(null);
  const iref = useRef(null);
  const i2ref = useRef(null);
  useEffect(() => {
    if (!iref.current) return;
    iref.current?.focus();
  });
  useEffect(() => {
    if (!i2ref.current) return;
    i2ref.current?.focus();
  });
  const [items, setItems] = useState([
    {
      id: '1',
      name: 'Name 1',
      amount: 20,
      price: 2,
    },
    {
      id: '2',
      name: 'Name 2',
      amount: 22,
      price: 3,
    },
    {
      id: '3',
      name: 'Name 3',
      amount: 23,
      price: 4,
    },
    {
      id: '4',
      name: 'Name 4',
      amount: 24,
      price: 5,
    },
    {
      id: '5',
      name: 'Name 5',
      amount: 10,
      price: 5,
    },
    {
      id: '6',
      name: 'Name 6',
      amount: 25,
      price: 7,
    },
    {
      id: '7',
      name: 'Name 7',
      amount: 40,
      price: 1,
    },
    {
      id: '8',
      name: 'Name 8',
      amount: 24,
      price: 6,
    },
    {
      id: '9',
      name: 'Name 9',
      amount: 26,
      price: 3,
    },
  ]);
  const [sItems, setSItems] = useState([]);
  return (
    <>
    <nav className={`flex bg-teal-100 ${a ? 'blur-sm' : ''}`}>
      <a className="px-3 py-2 mx-2 my-2 rounded-sm hover:bg-gray-700/20 md:cursor-pointer hover:shadow transition-all">Checkout</a>
      <a className="px-3 py-2 mx-2 my-2 rounded-sm hover:bg-gray-700/20 md:cursor-pointer hover:shadow transition-all">Restock</a>
      <a className="px-3 py-2 mx-2 my-2 rounded-sm hover:bg-gray-700/20 md:cursor-pointer hover:shadow transition-all">Inventory</a>
    </nav>
    <main>
      <div className={`${a ? 'blur-sm' : ''}`}>
        <button className="h-10 w-24 bg-teal-300/40 rounded-sm shadow-[inset_0_0_0_2px_rgba(147,197,253,0.4)] cursor-default md:cursor-pointer" onClick={() => {
          setA(true);
          setB(1);
          }}>New</button>
        {sItems.map(itm => <h1 key={itm.id}>{itm.name} - {itm.amount} - {itm.amount * itm.price} Taka</h1>)}
      </div>
      {a && <div className="fixed left-0 top-0 bg-gray-900/80 h-screen w-screen z-100 grid grid-cols-1 place-content-center place-items-center" onClick={() => setA(false)}>
        {b === 1  && <div onClick={e => e.stopPropagation()} className="bg-white w-2/5 rounded-lg shadow-black shadow-lg">
          <header className="flex p-4">
            <form className="h-14 items-center bg-teal-300/40 w-full rounded-sm flex relative shadow-[inset_0_0_0_2px_rgba(147,197,253,0.4)]"></form>
          </header>
          <div className={`${styles.search} h-screen md:h-96 py-0 px-4 overflow-y-auto`}>
            <ul>
              {items.map((itm,  index) => (
              <li key={itm.id} className="pb-1">
                <button
                  ref={index === 0 ? i2ref : null}
                  className="block bg-slate-300 hover:bg-teal-100 focus:bg-teal-100 focus:outline-none rounded shadow-[0_1px_3px_0_rgba(255,255,255,0.05)] h-14 w-full text-left px-2"
                  onClick={() => {
                    setTSItem({ id: itm.id, name: itm.name, price: itm.price });
                    setB(2);
                  }}
                >
                  {itm.name} - {itm.amount}
                </button>
              </li>
              ))}
            </ul>
          </div>
        </div>}
        {b === 2 && <div onClick={e => e.stopPropagation()} className="bg-white w-2/5 rounded-lg shadow-black shadow-lg flex p-4">
        <form className="w-full  flex flex-col gap-4" onSubmit={e => {
            e.preventDefault();
            setSItems(stms => {
              const nstms = stms.filter(stm => stm.id !== tSItem.id);
              return [...nstms, { id: tSItem.id, name: tSItem.name, amount: amount, price: tSItem.price }];
            });
              setB(1);
              setA(false);
              setAmount('');
          }
        }>
        <input ref={iref} type="text" value={amount} onInput={e => setAmount(parseInt(e.target.value) || '')} className="h-12 rounded-sm bg-teal-300/40 shadow-[inset_0_0_0_2px_rgba(147,197,253,0.4)] w-full px-4 text-xl focus:outline-none"/>
        <button type="submit" className="h-10 w-full bg-teal-300/40 rounded-sm shadow-[inset_0_0_0_2px_rgba(147,197,253,0.4)] cursor-default md:cursor-pointer">Okay</button>
        </form>
        </div>}
      </div>}
    </main>
    </>
  );
}

// const Item = ({ name }) => <span className="py-2 w-25 bg-red-400 col-start-2 col-span-2">{name}</span>;

// const items = ['Napa', 'Seclo', 'Omidon', 'Basok', 'Ace'];

{/* <div className="w-50 bg-gray-700 grid grid-cols-4 gap-5 content-center">
{items.map(i => <Item key={i} name={i} />)}
</div> */}
