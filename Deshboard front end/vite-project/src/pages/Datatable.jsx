import React from 'react'




import DataTable, { createTheme } from "react-data-table-component";
const App = () => {
const colums = [
  {
    name:"COURSE",
    selector:(row) =>row.course
  },
  {
    name:"DURATION",
    selector: (row)=> row.duration
  },
  {
    name:"CATEGORY",
    selector:(row) =>row.mode  
  },
  {
    name:"START FROM",
    selector:(row)=>row.newbatch
  },
  {
    name:"YOUR EDUCATOR",
    selector:(row)=>row.educator
  }
]

const data =[
  {
    id:1,
    course:"HTML & CSS",
    duration:"3 MONTH",
    mode:"ONLINE",
    newbatch:"JAN 1,2024",
    educator:"XYZ"
  },
  {
    id:1,
    course:"JAVA SCRIPT",
    duration:"4 MONTH",
    mode:"ONLINE",
    newbatch:"JAN 10,2024",
    educator:"ABC"
  }, 
  {
    id:1,
    course:"REACT",
    duration:"2MONTH",
    mode:"ONLINE",
    newbatch:"JAN 15,2024",
    educator:"XYZ"
  },
  {
    id:1,
    course:"EXPRESS JS",
    duration:"2 MONTH",
    mode:"ONLINE",
    newbatch:"JAN 20,2024",
    educator:"ABC"
  },
  {
    id:1,
    course:"MANGO DP",
    duration:"3 MONTH",
    mode:"ONLINE",
    newbatch:"JAN 22,2024",
    educator:"ABC"
  },
  {
    id:1,
    course:"REST API",
    duration:"4 MONTH",
    mode:"ONLINE",
    newbatch:"JAN 25,2024",
    educator:"XYZ"
  },

];
createTheme(
  "solarized",
  {
    background :{
      default:"purple"
    }
  },
  "dark"

)


  return (
    <>
    <section className='intro'>DATA TABLE COMPONENT</section>
    <section className="table">
      <DataTable columns={colums} data={data} pagination theme="solarized"/>


    </section>


      
    </>
  )
}

export default App