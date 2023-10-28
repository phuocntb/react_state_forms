import React, {useState} from 'react'

/*
- Viết 1 ứng dụng đếm số
- Tăng, Giám, Reset
- Bắt đầu = 0
- Tăng 1 đơn vị, giảm 1 đơn vị, reset về 0
*/
/*
 Component Mount
 Component  => Load lai => Khi va chi khi: state thay doi hoac props thay doi
*/
export default function CountNumber() {
    const [number2, setNumber2] = useState(0);
    let number = 0;

    function handleIncrement() {
        number++;
        document.getElementById("numberValue").innerText = "Value: " + number;
        console.log("number value now", number)
    }


    function handleIncrement2() {
        setNumber2(number2 + 1)
    }

    console.log("da duoc render (mounting -> mounted)")
  return (
    <div>
        <h1>App Count Number</h1>
        <br></br>
        <span id='numberValue'>Value: {number}</span>
        <span>Value 2: {number2}</span>
        <br></br>
        <button onClick={() => {
            handleIncrement()
        }}>Increment</button>
        <br></br>
        <button onClick={() => {
            handleIncrement2()
        }}>Increment 2</button>
        <br></br>
        <button>Decrement</button>
        <br></br>
        <button>Reset Value</button>
    </div>
  )
}
