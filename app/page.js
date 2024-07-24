

import styles from "./page.module.css";
import Component1 from "./_components/component1";
import Component2 from "./_components/component2";


export  default async function Home() {
  const result=await fetch('https://fakestoreapi.com/products/1');
 
  
  return (
    <div>
    <h1>Main page</h1>
      <Component1/>
      <Component2/>
    </div>
  );
}
