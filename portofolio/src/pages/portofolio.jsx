import { useSelector,useDispatch } from "react-redux";
import Card from "../components/card";



function Portofolio() {
  const data = useSelector((state)=>{
    return state.postReducer
  })
  
  return (
    <>
      <div className="grid-cols-3 grid mb " style={{marginTop:"5vw"}}>
      {data.map((el)=>{
        return <Card data={el} key={el.id} />
      })}
          </div> 
    </>
  );
}


export default Portofolio;
