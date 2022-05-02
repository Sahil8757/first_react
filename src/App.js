import logo from './logo.svg';
import './App.css';

function App() {

const arr = [
  {
    id: 101,
    name: 'Abacavir',
    quantity: 25,
    price: 150,
    expiry: 2022,
    status: true
  },
  {
    id: 102,
    name: 'Eltrombopag',
    quantity: 90,
    price: 550,
    expiry: 2021,
    status: true
  },
  {
    id: 103,
    name: 'Meloxicam',
    quantity: 85,
    price: 450,
    expiry: 2025,
    status: false
  },
  {
    id: 104,
    name: 'Allopurinol',
    quantity: 50,
    price: 600,
    expiry: 2023,
    status: true
  },
  {
    id: 105,
    name: 'Phenytoin',
    quantity: 63,
    price: 250,
    expiry: 2021,
    status: false
  }
];

console.log(arr.map((i) => { return i }));

console.log(arr.filter((f) => { return f.expiry >= 2022 }));

console.log(arr.reduce((g) => { return g.price >= 251 }));

let ans =
arr.map((d, i) => i)
arr.map((d, i) => d.expiry >= 2022)

 return (
    <>
    <table>
      <th>
        <td>ID</td>
        <td>Name</td>
      </th>
      <tbody>
      {
        arr.map((d, i) => {
          return (
            <tr>
              <td>{d.id}</td>
              <td>{d.name}</td>
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
