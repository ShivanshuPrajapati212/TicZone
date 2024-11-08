import React from 'react'

function BoardItem({value, onClickHandle}) {

  // const [value, setValue] = useState(null);

  // const handleClick = () => {
  //   setValue("X")
  // }
  
  return (
    <div className={`text-8xl max-md:text-6xl h-40 w-40 max-md:h-24 max-md:w-24 text-center font-bold justify-center items-center flex ${value==="X"?"text-red-500":"text-blue-700"}`} onClick={onClickHandle}>
      {value}
    </div>
  )
}

export default BoardItem
