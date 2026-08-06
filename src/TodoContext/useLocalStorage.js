import { useState } from 'react';
import { useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
  // Estado inicial del componente que llame a este custom hook(useLocalStorage())
  // En el caso de los TODOs, va a comenzar con un array vacío
  const [item, setItem] = useState(initialValue);

  // Estado de carga
  const [loading, setLoading] = useState(true);
  // Estado de error
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);

      } catch (error) {
        setLoading(false);
        setError(true);
        console.log('Hubo un error cargando datos de localStorage: ' + error);
      }
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemName]);

  // Actualizar localStorage y guardar el estado
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage };