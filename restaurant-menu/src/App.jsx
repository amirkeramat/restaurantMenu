import "./App.css";
import { useState, useEffect } from "react";
import supabase from "./config/supabaseClient";
import Menu from "./components/Menu";
import Category from "./components/Category";

function App() {
  const [menuItems, setMenuItems] = useState();
  const [datas, setDatas] = useState();
  const [categoryItems, SetCategoryItems] = useState();
  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("restaurant-menu").select("*");
      if (data) {
        setDatas(data);
        setMenuItems(data);
        SetCategoryItems([
          "All",
          ...new Set(data.map((item) => item.category)),
        ]);
      }
    };
    getData();
  }, []);
  const filterMenus = (categoryItem) => {
    if (categoryItem === "All") {
      setMenuItems(datas);
      console.log(menuItems);
      return;
    }

    let filteredMenus = datas.filter(
      (items) => items.category === categoryItem
    );
    console.log(filteredMenus);
    setMenuItems(filteredMenus);
  };
  return (
    <div className='app flex justify-center items-center'>
      <div className='flex justify-center flex-col items-center w-full'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-7xl'>Our Menu</h1>
          <span className='w-[40%] h-[10px] rounded-xl bg-sky-500 mt-2'></span>
        </div>
        {categoryItems &&(
          <Category items={categoryItems} filterMenu={filterMenus} />
        )}

        {datas ? <Menu items={menuItems} /> : <div>Loading</div>}
      </div>
    </div>
  );
}

export default App;
