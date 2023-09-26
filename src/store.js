import  create  from 'zustand'
export const textStore = create((set) => ({
  text: [],
  data:[],
  mobile:"",
  // productstoshow:[],
  setMobile: (str)=> set({mobile:str}),
  setData: (str)=> set({data:str}),
  setText: (str) => set({text:str}),
  // setProductstoshow:(str)=>set({productstoshow:str}),
}))