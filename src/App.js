import logo from './logo.svg';
import './App.css';

function App() {

// const arr = [
//   {
//     id: 101,
//     name: 'Abacavir',
//     quantity: 25,
//     price: 150,
//     expiry: 2022,
//     status: true
//   },
//   {
//     id: 102,
//     name: 'Eltrombopag',
//     quantity: 90,
//     price: 550,
//     expiry: 2021,
//     status: true
//   },
//   {
//     id: 103,
//     name: 'Meloxicam',
//     quantity: 85,
//     price: 450,
//     expiry: 2025,
//     status: false
//   },
//   {
//     id: 104,
//     name: 'Allopurinol',
//     quantity: 50,
//     price: 600,
//     expiry: 2023,
//     status: true
//   },
//   {
//     id: 105,
//     name: 'Phenytoin',
//     quantity: 63,
//     price: 250,
//     expiry: 2021,
//     status: false
//   }
// ];




// let filterData = arr.filter((f) => f.expiry >= 2022);

// let ans = arr.filter((f) => f.expiry >=2022 )
// .reduce((acc, d, i) => acc + d.price, 0);

// console.log(ans);


// //array
// let arr1 = [10,20,30,40,50];

// //copy
// let arr2 = [...arr1];
// console.log(arr2);

// //merge
// let arr3 =[99,...arr1,100];
// console.log(arr3);

// //destructure
// let [maths,eng,guj,ss,sci] = arr1;
// console.log(ss);


// //object
// let obj ={
  //   id : 101,
  //   name : "amit"
  // };
  
  // //copy
  // let obj1 = {...obj};
  // console.log(obj1);
  
  // //merge
  // let obj2 ={
    //   ...obj,
    //   place : 'surat',
    //   name : "Sahil"
    // };
    // console.log(obj2);
    
    // //destructure
    // let {id, name} = obj;
    // console.log (id, name);
    
    const emp = [
      {
        name: "amit",
        age: 35,
        salary: 40000,
        bonus: 1000,
        status: true
      },
      {
        name: "ajay",
        age: 25,
        salary: 38000,
        bonus: 2000,
        status: false
      },
      {
        name: "mayur",
        age: 23,
        salary: 50000,
        bonus: 500,
        status: true
      },
      {
        name: "jay",
        age: 29,
        salary: 35000,
        bonus: 600,
        status: true
      },
      {
        name: "raj",
        age: 33,
        salary: 22000,
        bonus: 2000,
        status: true
      }
    ];

    let filterData = emp.filter((f) => f.status == true);

    let ans = emp.filter((f) => f.status == true)
    .reduce((acc, d, i) => acc + (d.salary + d.bonus), 0);
    console.log(ans);
    
    return (
    <>
    <table border="1">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
        <th>Bonus</th>
        <th>Total</th>
        <th>Final Total</th>
      </tr>
      <tbody>
      {
        filterData.map((d, i) => {
          return (
            <tr>
              <td>{d.name}</td>
              <td>{d.age}</td>
              <td>{d.salary}</td>
              <td>{d.bonus}</td>
              <td>{d.salary + d.bonus}</td>
              {i === 0 ? <td rowspan = {emp.length}>{ans}</td> :null}
            </tr>
          )

        })
      }
      </tbody>
    </table>
    </>
  );
}

export default App;
        
