import React from "react";
import styles from "./ParentContainer.module.css";
function ParentContainer({children}){
  return (
<center>
<div className={styles.heading}>

  {children};
</div>

</center>
  );
}
export default ParentContainer;

// import React from "react";
// import styles from "./ParentContainer.module.css";

// function ParentContainer({ children }) {
//   return (
//     <div className={styles.container}>
//       <div className={styles.heading}>
//         {children}
//       </div>
//     </div>
//   );
// }

// export default ParentContainer;
