import React, {useEffect, useState} from 'react'


// const getLinks = () => {
//   let links = localStorage.getItem("links")

//   links ? localStorage.getItem("links", JSON.parse(links)) : []
// }

function Api() {

  const [text, setText] = useState("")
  const [links, setLinks] = useState([])
  const [btnText, setBtnText] = useState("Copy")

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(!text){
      alert("The input is empty!")
      
    } else{
      const shortenLink = async () =>{
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
        const data = await res.json()

        console.log(data.result)
        setText("")
        setLinks(data.result)
      }

      shortenLink()
    }
  }

  const handleCopy = () =>{
    navigator.clipboard.writeText(links.full_short_link)
    setBtnText("Copied!")
  }

  useEffect(() => {
    localStorage.setItem(links, JSON.stringify("links"))
  }, [links])

  return (
    <div className='mt-[5rem] px-[9rem] py-[3rem] bg-[#3B3054] w-[70%] max-[1024px]:w-[90%] max-[768px]:w-full ml-[14rem] max-[1024px]:ml-[3rem] max-[768px]:ml-[0.1rem] rounded-md'>
      <form className='bg-short-desktop' onSubmit={handleSubmit}>
      <input className='rounded-md w-[70%] h-[2.5rem] px-5' type="text" placeholder='Shorten a link here...'
      value={text}
      onChange={(e) => setText(e.target.value)}
      />
      <button className='text-white bg-[#2ACFCF] hover:bg-[#38A8A8] px-5 max-[768px]:px-1 py-2 rounded-md mx-5'
      onClick={handleSubmit}
      >Shorten It!</button>
      </form>
      <div className='flex items-center justify-between bg-[#3B3054] border-slate-500 border-[1.5px] p-3 text-center mt-[1.3rem]'>
       <article>
        <h6 className='text-white'>{links.original_link}</h6>
       </article>
       <article>
        <ul className='flex items-center'>
          <li>
            <button className='text-white my-3 hover:text-cyan-300'>{links.full_short_link}</button>
          </li>
          <li>
            <button onClick={handleCopy} className='text-white bg-[#2ACFCF] hover:bg-[#38A8A8] focus:bg-slate-800 px-5 py-2 mx-4 rounded-full'>{btnText}</button>
          </li>
        </ul>
       </article>
      </div>
    </div>
  )
}

export default Api