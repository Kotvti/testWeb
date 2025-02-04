import React, { useEffect, useState } from 'react';
import  { supabase }  from '../lib/supabase';

const DropdownMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const [menuText, setMenuText] = useState('');
    const [loading, setLoading] = useState(true);
  
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log('Supabase Key:', process.env.NEXT_PUBLIC_SUPABASE_KEY);
    console.log('Supabase URL2:', process.env.DB_SUPABASE_URL);
    console.log('Supabase Key2:', process.env.DB_SUPABASE_KEY);
    console.log('TTTTT!!!!!TTTT', '123');
    console.log('TTTTT!!!!!TTTT');

    useEffect(() => {
      const fetchMenuItems = async () => {
        try {
          const { data, error } = await supabase
            .from('menu')
            .select('*');
  
          if (error) throw error;
          setMenuItems(data);
        } catch (error) {
          console.error('Ошибка при загрузке данных:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchMenuItems();
    }, []);
  
    useEffect(() => {
      if (selectedItem) {
        const fetchMenuText = async () => {
          try {
            const { data, error } = await supabase
              .from('menutext')
              .select('text')
              .eq('menu_id', selectedItem)
              .single();
  
            if (error) throw error;
            setMenuText(data?.text || 'Текст не найден');
          } catch (error) {
            console.error('Ошибка при загрузке текста:', error);
          }
        };
  
        fetchMenuText();
      }
    }, [selectedItem]);
  
    const handleSelectChange = (event) => {
      setSelectedItem(event.target.value);
    };
  
    if (loading) return <div>Загрузка...</div>;
  
    return (
      <div>
        <h2>Выберите вариант:</h2>
        <select value={selectedItem} onChange={handleSelectChange}>
          <option value="">-- Выберите --</option>
          {menuItems.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
  
        {selectedItem && (
          <div>
            <p>Вы выбрали: {menuItems.find((item) => item.id === parseInt(selectedItem))?.name}</p>
            <p>Текст: {menuText}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default DropdownMenu;


// const DropdownMenu = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [selectedItem, setSelectedItem] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMenuItems = async () => {
//       try {
//         const { data, error } = await supabase
//           .from('menu')
//           .select('*');

//         if (error) throw error;
//         setMenuItems(data);
//       } catch (error) {
//         console.error('Ошибка при загрузке данных:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMenuItems();
//   }, []);

//   const handleSelectChange = (event) => {
//     setSelectedItem(event.target.value);
//   };

//   if (loading) return <div>Загрузка...</div>;

//   return (
//     <div>
//       <h2>Выберите вариант:</h2>
//       <select value={selectedItem} onChange={handleSelectChange}>
//         <option value="">-- Выберите --</option>
//         {menuItems.map((item) => (
//           <option key={item.id} value={item.id}>
//             {item.name}
//           </option>
//         ))}
//       </select>

//       {selectedItem && (
//         <p>Вы выбрали: {menuItems.find((item) => item.id === parseInt(selectedItem))?.name}</p>
//       )}
//     </div>
//   );
// };

// export default DropdownMenu;