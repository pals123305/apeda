import React, {useState} from "react";

function Update_user() {
  const [img, setImg] = useState(-1);

  const data = [
    { id: 1, name: "data1" },
    { id: 2, name: "data2" },
  ];

  return (
    <>
        {data.map((e, idx) => {
            console.log(idx);
        })}
    </>
  )
}
//   return (
//     <>
//       {data.map((e, idx) => {
//         return (
//           {img===idx ? (
//             <input placeholder={e.name} style={{display: idEdit == e.id ? 'block' : 'none'}}/> //<== Conditionaly to appear or not
//           ) : (
//             <div>
//               <p>{e.name}</p>
//               <button onClick={() => {
//                  setImg(idx)
//                 }
//                }>edit</button>
//             </div>
//           )}
//         )
//       }
//     </>
//   )
// }

export default Update_user;
