import React, { useState } from 'react'

export default function RegisterForm() {
    // destructuring ES6
    const [payMode, setPayMode] = useState('cash')
    const [name, setName] = useState("")
    return (
        <>
            <form onSubmit={(eventForm) => {
                eventForm.preventDefault()
                let newStudent = {
                    userName: eventForm.target.studentName.value,
                    password: eventForm.target.password.value,
                    displayName: eventForm.target.displayName.value,
                    sex: eventForm.target.sex.value,
                    classType: eventForm.target.classType.value,
                    birthday: eventForm.target.birthday.value,
                    countDay: +eventForm.target.countDay.value,
                    payMode: payMode
                }
                console.log("newStudent", newStudent)
            }}>
                <h2>Register Form</h2>
                <div>
                    UserName: <input type="text" name='studentName' />
                </div>
                <div>
                    Password: <input type="password" name='password' />
                </div>
                <div>
                    Display Name: <input type="text" name='displayName' />
                </div>
                <div>
                    Sex:
                    <br></br>
                    Nam: <input type="radio" name='sex' value={"male"} />
                    <br></br>
                    Nu: <input type="radio" name='sex' value={"female"} />
                    <br></br>
                    Khac: <input type="radio" name='sex' value={"other"} defaultChecked />
                </div>
                <div>
                    Class Type: <select name='classType'>
                        <option value="ft">Full Time</option>
                        <option value="pt">Part Time</option>
                    </select>
                </div>
                <div>
                    Birthday <input type="date" name='birthday' />
                </div>
                <div>
                    Count <input type="number" min={2} max={3} defaultValue={2} name='countDay' />
                </div>
                <div>
                    PayMode:
                    Cash <input onChange={(e) => {
                        setPayMode(e.target.value)
                    }} type="radio" name='payMode' value={'cash'} defaultChecked={payMode == "cash" ? true : false} />
                    Zalo <input onChange={(e) => {
                        setPayMode(e.target.value)
                    }} type="radio" name='payMode' value={'zalo'} defaultChecked={payMode == "zalo" ? true : false} />
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
            <div>
                <span>{name}</span>
                <input onChange={(e) => {
                    setName(e.target.value)
                }} value={name} type="text" />
            </div>
        </>
    )
}
