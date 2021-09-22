import { useState, useEffect } from 'react';
import './App.css';
import { gql, useQuery, useLazyQuery, useMutation, useSubscription } from '@apollo/client'
import useAddData from './hooks/useAddData';
import useDeleteData from './hooks/useDeleteData';
import useSubs from './hooks/useSubs';
import useGetData from './hooks/useGetData';

export default function App() {
  // const [userId, setUserId] = useState(0);
  // const [list, setList] = useState([]);
  const initialData = {
    nama: "",
    umur: 0,
    jkel: ""
   
}
const [user, setUser] = useState(initialData);
const {addData, loadingAdd} = useAddData()
const {deleteData, loadingDelete} = useDeleteData()

  
  // const onGetData = () => {
  //   getTodo({ variables: { id: userId } });
  //   setList(data?.Kampus_Merdeka_anggota);
  // };
  // const getByUserID = gql`
  // query MyQuery($id: Int!) {
  //   Kampus_Merdeka_anggota(where: {id: {_eq: $id}}) {
  //     nama
  //     umur
  //     jkelamin
  //   }
  // }
  
  
  // `
  // const { data, loading, error } = useQuery(showData); ====> Show data
  const {data, loading, error, SubscribeData} = useGetData()
  useEffect(() => {
    SubscribeData();
  }, []);
  
  if(loading ||  loadingAdd || loadingDelete){
    <>
    <h1 style={{ fontSize: "60px", textAlign: "center" }}>Sedang Memuat</h1>
    </>
  }
  
  if(error) {
    console.log(error)
    return null
  }


  
  const handleInput = (e) => {
      const name = e.target.name
      const value = e.target.value;
      setUser({
        ...user,
        [name]: value,
      });
  };
  const handleDelete =  (idx) => {

     deleteData({variables: {
      id: idx
    }})
  
  };
  const onSubmitData =  (e) => {
     
    
    e.preventDefault();
     addData({variables: {
      object: {
        nama: user.nama,
        umur: user.umur,
        jkelamin: user.jkel
      }
    }})
  
  setUser(initialData)
  };
  return (
    <div style={{marginLeft: "700px"}}>
      <h1>DATA ANAK KAMPUS</h1>
      <table border="1">
          <tr>
              <td>Nama</td>
              <td>Umur</td>
              <td>Jenis Kelamin</td>
              
             
          </tr>
          {data?.Kampus_Merdeka_anggota.map((show) => (
          <tr>
              
              <td>{show.nama} </td>
              <td>{show.umur}</td>
              <td>{show.jkelamin} <button onClick={() => handleDelete(show.id)}>Delete</button></td>
           
          </tr>
          
        ))}
      </table>
      <form onSubmit={onSubmitData}>
        <label>
          Nama :
          <input onChange={handleInput} value={user.nama} type="text" name="nama" />
        </label>
        <label>
          Umur :
          <input onChange={handleInput} value={user.umur} type="number" name="umur" />
        </label>
        <label>
          Jenis Kelamin :
          <input onChange={handleInput} value={user.jkel} type="text" name="jkel" />
        </label>   
        <label>
        <input type="submit" value="Create" />
        </label> 
      </form>
    </div>
  );
}

