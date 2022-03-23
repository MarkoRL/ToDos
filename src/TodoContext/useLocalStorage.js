import React from "react";

function useLocalStorage(itemName,initialValue){
  
    const [error, setError ] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item,setItem] = React.useState(initialValue);
  
    React.useEffect(()=>{
      setTimeout(() => {
        try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem = '';
        
        if(localStorageItem){
          parsedItem = JSON.parse(localStorageItem);
        }else{
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        }
  
        setItem(parsedItem);
        setLoading(false);
      }catch(errorUseEffect){
        setError(errorUseEffect);
      }
      },1000);
    });
    
  
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName,stringifiedItem);
        setItem(newItem);
      }catch(errorSaveItem){
        setError(errorSaveItem);
      }
      
    }
    return {
      item,
      saveItem,
      loading,
      error
    }
  }


  export { useLocalStorage };
  