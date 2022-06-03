import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import {toast} from 'react-toastify';

const UserRoute = ({ children }) => {
  // state
  const [ok, setOk] = useState(false);
  // router
  const router = useRouter();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/current-user");
      //   console.log(data);
      if (data) setOk(true);
      toast.success('Welcome back');
      
    } catch (err) {
      console.log(err);
      setOk(false);
      router.push("/login");
      toast.error('Please login');
    }
  };

  return (
    <>
      {!ok ? (

        <h1>...... Loading</h1>
      
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default UserRoute;
