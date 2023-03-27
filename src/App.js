import {useEffect, useState} from "react";
import './App.css';


function App() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [result, setResult] = useState("");
    const [china, setChina] = useState('');

    function handleChange(event) {
        setChina(event.target.value);
    }

    const handleCalculate = () => {

        const start = new Date(startDate);
        const end = new Date(endDate);
        if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            setResult(`Разница между датами: ${diffDays} дней`);
        } else {
            setResult('Введён неверный формат даты')
        }


    };
    const [currentDate, setCurrentDate] = useState(new Date());
    const [valueSumma1, setValueSumma1] = useState(null)
    const [valueSumma2, setValueSumma2] = useState(null)
    const [valueSummaResult, setValueSummaResult] = useState(null)


    const [valueProizved1, setValueProizved1] = useState(null)
    const [valueProizved2, setValueProizved2] = useState(null)
    const [valueProizvedResult, setValueProizvedResult] = useState(null)


    const [data1, setData1] = useState('')
    const [data2, setData2] = useState('')
    const [dataResult, setDataResult] = useState('')


    const [checked, setChecked] = useState(true)

    const [checked1, setChecked1] = useState(true)
    let message;
    if (checked1){
        message=<p>сообщение 1</p>
    }else{
        message=<p>сообщение 2</p>
    }


    const [checked2,setChecked2]=useState(true)

    let helloBye;
if (checked2){
    helloBye=<p>Привет братан!!!</p>
}else {
    helloBye=<p>Пока братан!!!</p>
}


    const [checked3,setChecked3]=useState(false)
    let zadanie2;
if (checked3){
    zadanie2=' CSS '
}else {
    zadanie2=''
}

const [checked4,setChecked4]=useState(false)
    let zadanie21;
if (checked4){
    zadanie21=' JS '
}else {
    zadanie21=''
}


const [checked5,setChecked5]=useState(false)
    let zadanie22;
if (checked5){
    zadanie22=' HTML '
}else{
    zadanie22=''
}

    return (
        <>
            <input value={valueSumma1} onChange={event => setValueSumma1(event.target.value)}/>
            <input value={valueSumma2} onChange={event => setValueSumma2(event.target.value)}/>
            <button onClick={() => setValueSummaResult(Number(valueSumma1) + Number(valueSumma2))}>Найдёт сумму чисел
            </button>
            <br/>
            <p>Сумма чисел: {valueSummaResult}</p>
            <input value={valueProizved1} onChange={event => setValueProizved1(event.target.value)}/>
            <input value={valueProizved2} onChange={event => setValueProizved2(event.target.value)}/>
            <button onClick={() => setValueProizvedResult(Number(valueProizved1) * Number(valueProizved2))}>Найдёт
                произведение чисел
            </button>
            <p>Произведение чисел:{valueProizvedResult} </p><br/>


            <input value={data1} onChange={event => setData1(event.target.value)}/>
            <input value={data2} onChange={event => setData2(event.target.value)}/>
            <button onClick={() => setDataResult(data1 - data2)}>Узнай разницу введённых дат</button>
            <p>Разница дат: {dataResult}</p><br/>


            <div>
                <p>Текущая дата: {currentDate.toLocaleDateString()}</p>
                <button onClick={() => setCurrentDate(new Date())}>
                    Обновить дату
                </button>
            </div>
            <br/>
            <div>
                <input value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                <br/>
                <input value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                <br/>
                <button onClick={handleCalculate}>Рассчитать разницу</button>
                <br/>
                <p>{result}</p>
            </div>
            <br/>


            <div>
                <textarea value={china} onChange={handleChange}/>
                <p>{china}</p>
            </div>
            <br/>

            <div>
                <input type="checkbox" checked={true}/> отмечен
                <input type="checkbox" checked={false}/> не отмечен
            </div>
            <br/>

            <div>
                <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)}/>
                <p>Состояние:{checked ? 'отмечен' : 'не отмечен'}</p>
            </div>
            <br/>

            <div>
                <input type='checkbox' checked={checked1} onChange={()=> setChecked1(!checked1)}/>
                <div>{message}</div>
            </div><br/>


<div>
            <input type='checkbox' checked={checked2} />
<button  onClick={()=>setChecked2(!checked2)}>Задание 1 чекбоксы</button>
    <p> {helloBye}</p>
</div><br/>

            <div>
                <h1>Выбери языки, которые ты знаешь</h1>
                <input type='checkbox' checked={checked3} onChange={()=>setChecked3(!checked3)}/> css<br/>
                <input type='checkbox' checked={checked4} onChange={()=>setChecked4(!checked4)} /> JS<br/>
                <input type='checkbox' checked={checked5} onChange={()=>setChecked5(!checked5)}/>HTML<br/>
<h3>Ты знаешь : {zadanie2}{zadanie21}{zadanie22}</h3>

            </div>

{/*начинаю с 223 слайда*/}

        </>
    );
}

export default App;
