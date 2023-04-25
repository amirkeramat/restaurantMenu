import "./App.css";
import { useState, useEffect } from "react";
import supabase from "./config/supabaseClient";
import Menu from "./components/Menu";
import Category from "./components/Category";
// const sendData = async () => {
//   const { data, error } = await supabase.from("restaurant-menu").insert([
//     {
//       id: 1,
//       title: "buttermilk pancakes",
//       category: "breakfast",
//       price: 15.99,
//       img: "./images/item-1.jpeg",
//       desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
//     },
//     {
//       id: 2,
//       title: "diner double",
//       category: "lunch",
//       price: 13.99,
//       img: "./images/item-2.jpeg",
//       desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
//     },
//     {
//       id: 3,
//       title: "godzilla milkshake",
//       category: "shakes",
//       price: 6.99,
//       img: "./images/item-3.jpeg",
//       desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
//     },
//     {
//       id: 4,
//       title: "country delight",
//       category: "breakfast",
//       price: 20.99,
//       img: "./images/item-4.jpeg",
//       desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
//     },
//     {
//       id: 5,
//       title: "egg attack",
//       category: "lunch",
//       price: 22.99,
//       img: "./images/item-5.jpeg",
//       desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
//     },
//     {
//       id: 6,
//       title: "oreo dream",
//       category: "shakes",
//       price: 18.99,
//       img: "./images/item-6.jpeg",
//       desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
//     },
//     {
//       id: 7,
//       title: "bacon overflow",
//       category: "breakfast",
//       price: 8.99,
//       img: "./images/item-7.jpeg",
//       desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
//     },
//     {
//       id: 8,
//       title: "american classic",
//       category: "lunch",
//       price: 12.99,
//       img: "./images/item-8.jpeg",
//       desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
//     },
//     {
//       id: 9,
//       title: "quarantine buddy",
//       category: "shakes",
//       price: 16.99,
//       img: "./images/item-9.jpeg",
//       desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
//     },
//   ])
//   if(error){
//     console.log(error);
//   }
//   if(data){
//     console.log(data);
//   }
// };
function App() {
  const [menuItems, setMenuItems] = useState();
  const [categoryItems, SetCategoryItems] = useState();
  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("restaurant-menu").select("*");
      if (data) {
        setMenuItems(data);
        // const categoryData = data.map((item) => item.category);
        // const setData = new Set(categoryData);
        SetCategoryItems(['All',...new Set(data.map(item=>item.category))])
      }
    };
    getData();
  },[]);
  return (
    <div className='app flex justify-center items-center h-screen'>
      <div className='flex justify-center flex-col items-center w-full'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-7xl'>Our Menu</h1>
          <span className='w-[40%] h-[10px] rounded-xl bg-sky-500 mt-2'></span>
        </div>
        {categoryItems ? <Category items={categoryItems} /> : <div>Loading</div>}
        {menuItems ? <Menu {...menuItems} /> : <div>Loading</div>}
      </div>
    </div>
  );
}

export default App;
