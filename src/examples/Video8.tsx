let name1: string | number = 'hoidanit'
name1 = 10
// let employee: object;
// let employee: {
//     firstName: string,
//     age: number,
//     jobTitle: string,
// };
// employee = {
//     firstName: 'd',
//     age: 453,
//     jobTitle: 'refese'

// } 

interface IEmployee {
    firstName: string,
    age: number,
    jobTitle: string,
}
type TEmployee = {
    firstName: string,
    age: number,
    jobTitle: string,
};

let employee: IEmployee = {
    firstName: 'erighvev',
    age: 456,
    jobTitle: 'j',
};

console.log(employee);
employee.age = 20;

export default TEmployee;
