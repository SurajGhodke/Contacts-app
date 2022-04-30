import axios from "axios";
import React, { useEffect, useState } from "react";
import { smsList } from "../api";

const Messages = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(smsList)
      .then((res) => {
        console.log(res.data.Results);
        setItems(res.data.Results);
        // alert(res.data.Message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Sent Date</th>
            <th scope="col">Message</th>
            <th scope="col">status</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.length > 0 &&
            items.map((value, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{value.from}</td>
                <td>{value.to}</td>
                <td>{value.dateSent}</td>
                <td>{value.body}</td>
                <td>{value.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Messages;
