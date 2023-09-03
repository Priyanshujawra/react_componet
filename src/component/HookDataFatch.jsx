import React, { useState, useEffect } from "react";
import axiox from "axios";
function HookDataFatch() {
  const [getdata, setdata] = useState({});
  const [id, setid] = useState(1);
  const [idclick, setidbyclick] = useState(1);

  const handleclick = () => {
    setidbyclick(id);
  };
  useEffect(() => {
    axiox
      .get(`https://jsonplaceholder.typicode.com/posts/${idclick}`)
      .then((response) => {
        // console.log(response)
        setdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idclick]);

  return (
    <div className=" flex flex-col justify-center items-center">
      <div>
      <input
        className=" border border-indigo-400 p-2"
        type="text"
        value={id}
        onChange={(e) => setid(e.target.value)}
      />
      <button className=" border border-blue-400 bg-blue-500 text-white rounded p-2 ml-2" type="button" onClick={handleclick}>
        fatch Data
      </button></div>
      <br />
      <div>{getdata.title}</div>
      {/* <ul>
            {
                getdata.map((e)=>{
                    return(<li key={e.id}>{e.title}</li>)
                })
            }
        </ul> */}
    </div>
  );
}

export default HookDataFatch;
