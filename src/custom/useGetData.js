import { useState } from "react";

const useGetData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const resp = await fetchData("httpa://www/example.com");
      const data = await resp.json();
      if (data) {
        setUsers(data.users);
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return { users, loading };
};

export default useGetData;
