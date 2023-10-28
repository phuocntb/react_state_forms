import React, {useState} from 'react'
/*
    - useState.
    + Là 1 hook trong react hook (được thêm vào react 16.8) sau ngày 19 / 02 / 2019 mới có thể dùng được.
    + chỉ là 1 function bình thường nhưng vì nó được nhập (import) vào từ react và sử dụng bên trong FC (function component) nên
    được gọi là hook.
    + Hook (gắn)
    + nhận vào 1 giá trị khởi tạo
    + trả về 1 array => có phần tử thứ nhất: là 1 biến liên kết với giá trị khởi tạo
    // phần tử thứ 2: là 1 function nhận vào 1 đối số => thực hiện nhiệm vụ ghi đè lại giá trị cho biến ở trên bằng giá trị của số mình
    truyền vào
*/

export default function UseStateCom() {
    const data = useState(0);
    const [number, setNumber] = useState({
        abc: 0,
        number: 0
    });

    console.log("data", data)
  return (
    <>
        <div>UseStateCom {data[0]} {number.abc} {number.number}</div>
        <button onClick={() => {
            data[1](data[0] + 1)
            setNumber({
                ...number,
                abc: "abc"
            })
        }}>Tang</button>
    </>
  )
}
