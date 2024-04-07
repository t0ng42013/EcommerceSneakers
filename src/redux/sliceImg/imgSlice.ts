import { createSlice } from "@reduxjs/toolkit";

const INIT = {
  mostrar: false,
  currentImg: 1,
};

interface ImgState {
  readonly mostrar: boolean;
  readonly currentImg: number;
}

const cambiarImg = (state: number, action: string) => {
  switch (action) {
    case "next":
      if (state >= 4) {
        return 1;
      }
      return state + 1;

    case "previous":
      if (state <= 1) {
        return 4;
      }
      return state - 1;

    default:
      return state;
  }
};

const indexImg = (state: number, action: number) => {
    switch (action) {
        case 1:
           return 1; 
        case 2:
           return 2; 
        case 3:
           return 3; 
        case 4:
           return 4; 
    
        default:
            return state
    }
};

const imgSlice = createSlice({
  name: "img",
  initialState: INIT,
  reducers: {
    toogleImg: (state) => {
      console.log(state.mostrar)
      return {
        ...state,
        mostrar: !state.mostrar,
      };
    },
    carruselbtn: (state, action): ImgState => {
      return {
        ...state,
        currentImg: cambiarImg(state.currentImg, action.payload),
      };
    },
    miniImg:(state,action):ImgState =>{
        return{
            ...state,
            currentImg: indexImg(state.currentImg, action.payload)
        }
    },
    
    }
  },
);

export const { toogleImg, carruselbtn, miniImg } = imgSlice.actions;
export default imgSlice.reducer;
