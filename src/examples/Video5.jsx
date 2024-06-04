import { useEffect, useState } from "react"

const Video5 = (props) => {
    const { name } = props;
    const [age, setAge] = useState(0);
    useEffect(() => {
        setAge('tuoi sai khong nguyen')
    }, [])
    return (<div>
        Video 5: {name}{age}
    </div>)
}

export default Video5;