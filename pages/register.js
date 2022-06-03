import React from 'react';
import {useState,useEffect,useContext} from 'react';
import Title from '../components/Title';
import axios from 'axios';
import { toast } from 'react-toastify';
const Register = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  

    const {
      state: { user },
    } = useContext(Context);


    useEffect(() => {
      if (user !== null) router.push("/");
    }, [user]);


    const handleSubmit = (e) => {
      e.preventDefault();
      console.table({ name, email, password });

// process.env.NEXT_PUBLIC_API}

      axios.post(`api/register`, { name, email, password }).then(res => {
        console.log(res);
        toast.success(`${res.data.message}`);
      }
      ).catch(err => {
        console.log(err);
        toast.error("Error");
      }
      )
    };


  





    return (
        <div>
            <Title>

Register page

</Title>

<div className="container col-md-4 mt-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />

          <input
            type="email"
            className="form-control mb-4 p-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />

          <input
            type="password"
            className="form-control mb-4 p-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />

          <button type="submit" className="btn btn-block btn-primary">
            Submit
          </button>

          
        </form>
      
<div>
 

{/* <img
className='  w-8 h-8'
src="https://cdn1.iconfinder.com/data/icons/devices-gaming-solid/24/loading-spinner-solid-256.png" alt="" /> */}

</div>


      </div>







        </div>
    );
}

export default Register;
