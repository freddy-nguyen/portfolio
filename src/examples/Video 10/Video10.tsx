import { useState } from "react";
import './Video10.css'
interface IProps {
    defaultName?: string,
    defaultAge?: number | string,
    defaultCities?: string[]
}
export interface IUser {
    name: string,
    age: number | string,
    selectedCity: string,
}
export type TUser = {
    name: string,
    age: number,
    city: string,
}

const Video10 = (props: IProps) => {
    let { defaultName = 'qacer', defaultAge = 21, defaultCities = ['ha noi', 'tphcm', 'da nang'] } = props
    // const [name, setName] = useState("");
    let [name, setName] = useState<string>(defaultName)
    // const [age, setAge] = useState(0);
    let [age, setAge] = useState<number | string>(defaultAge)
    // const [city, setCity] = useState(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);
    let [cities, setCities] = useState<string[]>(defaultCities);
    let [selectedCity, setSelectedCity] = useState<string>(defaultCities[0])



    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    // const onChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setAge(event.target.value)
    // }
    // const [users, setUsers] = useState([
    //     { name: "Eric", age: 25, city: "Hà Nội" },
    //     { name: "Eric1", age: 26, city: "Đà Nẵng" },
    //     { name: "Eric2", age: 27, city: "Hồ Chí Minh" },
    // ])
    const handleOnClick = (event: React.FormEvent<HTMLInputElement>) => {
        const user = {
            name: name,
            age: age,
            selectedCity: selectedCity
        }
        setUsers([...users, user])
        setName('')
        setAge('')
        setSelectedCity(defaultCities[0])
    }

    let [users, setUsers] = useState<IUser[]>([])



    let [isShowBtn, setIsBtn] = useState<boolean>(false)
    // const [isShowBtn, setIsShowBtn] = useState(false);



    return (
        <>
            <div>Example video 10:  hello world </div>
            <div className="form-user">
                <div>
                    <label >Name:</label><br />
                    {/* <input type="text" value={name} onChange={(event) => onChangeName(event)} /><br /> */}
                    <input type="text" value={name} onChange={onChangeName} /><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input type="text" value={age} onChange={(event) => setAge(event.target.value)} /><br />
                </div>
                <div>
                    <label >City:</label><br />
                    <select
                        onChange={(event) => { setSelectedCity(event.target.value) }}>
                        {cities.map(item => {
                            return (<option key={item}>{item}</option>)
                        })}
                    </select>
                </div>

                <input type="submit" value="Submit"
                    onClick={(event) => handleOnClick(event)} />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            < th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(item => {
                            return (<tr key={item.name}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.selectedCity}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video10;