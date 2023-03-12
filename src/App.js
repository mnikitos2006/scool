
import './App.css';
import {useState} from "react";

function App() {
    // let [name,setName]=useState('prod');
    // let [cost,setCost]=useState('1000');
    // let [inCart,setInCart]=useState(false);
    // let [count,setCount]=useState(0);
    // let [name1,setName1]=useState('Nikita');
    // let [surname,setSurname]=useState('Mashkovsky');
    // let [age,setAge]=useState('16');
    let [name2,setName2]=useState("Никита");
    let [surname1,setSurname1]=useState(false);
    let [age1,setAge1]=useState(false);
    let [ban,setBan]=useState(false);
    function baan(){
        if(name2 === false){
            setBan(ban = true)
        }
        else{
            setBan(ban = false)
        }
    }


    // function clickHandler1(){
    //     setName('xxxx');
    // }
    //
    // function clickHandler2(){
    //     setCost('2000');
    // }
  return <>
      {/*<span>{name}</span>*/}
      {/*<span>{cost}</span>*/}
      {/*<button onClick={()=>setName('xxxx')}>btn1</button>*/}
      {/*<button onClick={()=>setCost('20000')}>btn2</button>*/}
      {/*<span>{inCart ? 'в корзине':'не в корзине'}</span>*/}
      {/*<button onClick={()=>setInCart(!inCart)}>btn3</button><br/>*/}
      {/*<span>{count}</span>*/}
      {/*<button onClick={()=>setCount(count+1)}>+</button><br/>*/}
      {/*<span>{name1}</span>*/}
      {/*<button onClick={()=>setName1('Ilya')}>smenaName</button><br/>*/}
      {/*<span>{surname}</span>*/}
      {/*<button onClick={()=>setName1('Ilya')}>smenaSurname</button><br/>*/}
      {/*<span>{age}</span>*/}
      {/*<button onClick={()=>setName1('Ilya')}>smenaAge</button><br/>*/}

      <span>{name2 ? 'Никита':'Илья'}</span>
      <button onClick={()=>setName2(!name2)}>Смена Имени</button><br/>

      <span>{surname1 ? 'Машковский':'Фокин'}</span>
      <button onClick={()=>setSurname1(!surname1)}>Смена Фамилии</button><br/>

      <span>{age1 ? '16':'15'}</span>
      <button onClick={()=>setAge1(!age1)}>Смена Возраста</button><br/>
      <span>{ban ? 'ban' : 'unban'}</span>
      <button onClick={baan}>Смена Возраста</button><br/>
  </>

  }

export default App;
