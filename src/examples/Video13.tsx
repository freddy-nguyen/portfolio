interface IProps {
    name?: string,
    age?: number,
    address?: string,
}

const Video13 = (props: IProps) => {
    //props là javascript object

    // const person = {
    //     name: 'Eric',
    //     age: 25,
    //     address: 'Hỏi Dân IT'
    // }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
    const { name = 'qacer', age = 21, address = 'here' } = props; //runtime, not compile => typescript dont check type



    return (
        <div>
            Example in video 13 - hello word {name} {age} {address}
        </div>
    )
}

export default Video13;