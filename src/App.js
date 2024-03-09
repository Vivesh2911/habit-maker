import HabitStructure from "./Components/HabitStructure";
import ParentContainer from "./Components/ParentContainer";
import Tasks from "./Components/Tasks";
function App() {
  return (
   <>
   <ParentContainer>
  <HabitStructure/>
   {/* </HabitStructure> */}
   <Tasks/>
   </ParentContainer>
   </>
  )
}

export default App;
