import logo from './logo.svg';
import './App.css';
import { db } from './firebase';
import { useEffect, useState } from 'react';
import { getDocs, addDoc, collection, doc, deleteDoc, updateDoc } from "firebase/firestore"

function App() {

  const tbl = collection(db, "users")
  const [record, setRecord] = useState([]);
  const [name, setName] = useState("");
  const [editid, setEditid] = useState("");

  const getuser = async () => {
    const data = await getDocs(tbl);
    let ans = data.docs.map((val) => {
      return ({ ...val.data(), id: val.id })
    })
    setRecord(ans);
  }

  const handlesubmit = async () => {
    let insert = await addDoc(tbl, { name: name });
    if (insert) {
      alert("Item Successfully Add..")
    } else {
      alert("Item Not Found..")
    }
    setName("");
    getuser();
  }
  const deleteData = async (id) => {
    const UserDoc = doc(db, "users", id);
    let res = await deleteDoc(UserDoc);
    alert("Item Successfully Delete..");
    setName("");
    getuser();
  }

  const editData = (id, name) => {
    setEditid(id);
    setName(name);
  }

  const handleUpdate = async () => {
    const UserDoc = doc(db, "users", editid);
    const newFields = { name: name };
    await updateDoc(UserDoc, newFields);
    alert("Item Successfully update..")
    setEditid("");
    getuser();
  }

  useEffect(() => {
    getuser();
  }, [])
  return (
    <center>
    <header>  <h1>To Do List</h1></header>
      <div className="box">
        <table>
          <tr>
            <td><input type="text" name='name' onChange={(e) => setName(e.target.value)} value={name} placeholder="Add your item" /></td>
            <td>{
              editid ?
                (<button onClick={() => handleUpdate()}>Ed</button>)
                : (<button onClick={() => handlesubmit()}>+</button>)
            }</td>
          </tr>
        </table>

        <table className="table1" style={{ display: 'block' }}>
          <tr>
            <th style={{ width: "100% ", fontSize: "26px", padding: "0px 20px" }}>Data</th>
            <th style={{ width: "100% ", fontSize: "26px", padding: "0px 20px" }}>Action</th>
          </tr>
          {
            record.map((val) => {
              return (
                <tr>
                  <td style={{ fontSize: "24px" }}>{val.name}</td>
                  <td style={{ display: "flex" }}>
                    <button style={{ marginLeft: "46px" }} onClick={() => deleteData(val.id)}>De</button>
                    <button style={{ marginLeft: "26px" }} onClick={() => editData(val.id, val.name)}>Ed</button>
                  </td>

                </tr>
              )
            })

          }

        </table>

      </div>
    </center>

  );
}

export default App;
