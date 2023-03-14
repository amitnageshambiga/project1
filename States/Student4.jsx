import React from 'react'

const Student4 = (props) => {
  
    let data=props.data
  return (
    <div>
<table border="2px" style={{textAlign:"center",fontWeight:"bolder"}}>
<tr>
<td >student name</td>
<td>student id</td>
<td>student course</td>
<td>student mobno</td>
<td>student photo</td>
</tr>
{data.map((x)=>{
return <tr>
<td>{x.studentname}</td>
<td>{x.studentid}</td>
<td>{x.studentcourse}</td>
<td>
  <ol>
  {x.studentmobno.map((x)=>{
    return <li>{x}</li>
  }
  )}
  </ol>
  </td>
<td>{<img src={x.studentphoto} alt="" height="80px" width="100px"/>}</td>
</tr>
}
)
}
</table>
    </div>
  )
}

export default Student4