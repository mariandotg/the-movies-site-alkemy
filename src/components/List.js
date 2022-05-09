import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const List = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/");
    }
  }, []);

  return <h2>Listado</h2>;
};

export default List;
