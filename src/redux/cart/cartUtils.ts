


export const addQuantity = (state: number, action: string) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      if (state === 1) {
        return state;
      }
      return state - 1;

    default:
      return state; // Asegúrate de devolver el estado sin modificar en el caso por defecto
  }
};


