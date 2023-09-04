import ContactsBookPage from "components/pages/ContactsBookPage";


const App = () => {
 
  return (

    
      <ContactsBookPage />
   
    
  
  );
  
};
    
export default App;
  
  // Використовуємо useSelector для перевірки наявності контактів у стані Boolean trau false
  //const isContactsExist = useSelector((state) => Boolean(state.contacts.length)); 