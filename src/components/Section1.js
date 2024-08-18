import { useState } from "react"

export default function Section1(){
    const [Name,setName] = useState('');
    const [Email,setEmail] = useState('');
    const [Phone,setPhone] = useState('');
    const [Add,setAdd] = useState([]);
   

    const HandleName = (event) => {setName(event.target.value);}
    
    const HamdleEmail = (event) => {setEmail(event.target.value)}
    const HamdlePhone = (event) => {setPhone(event.target.value)}
    const HandleSubmit = (event) => {
        event.preventDefault();
        const New ={
            name:Name,
            email:Email,
            phone:Phone
        }
    setAdd([...Add,New])
    setName('');
    setEmail('');
    setPhone('');
    
    
       
    }

    return(
        <div className="flex flex-col p-3">
            <h1 className="text-3xl">General Information</h1>
            <form onSubmit={HandleSubmit} className="flex flex-col space-y-3 mt-3 ">
                <label className="flex items-center"><span className="text-2xl w-32" >Name:</span> <input type="text" className="lg:w-2/6 h-10 w-2/4 bg-orange-500 p-1 rounded-lg  text-black" onChange={HandleName}/></label>
               
                <label className="flex items-center "><span className="text-2xl w-32" >Email:</span> <input type="text" className="lg:w-2/6 h-10 w-2/4 bg-orange-500 p-1 rounded-lg  text-black" onChange={HamdleEmail} /></label>

                <label className="flex items-center "><span className="text-2xl w-32" >Phone:</span> <input type="text" className="lg:w-2/6 h-10 w-2/4 bg-orange-500 p-1 rounded-lg  text-black" onChange={HamdlePhone} /></label>
                <button className="bg-black text-white p-2 w-3/6 ml-32 lg:w-32 ">Submit</button>
               
            </form>
            <ul className="mt-3">
                {Add.map((entry, index) => (
                    <li key={index} className="p-2 border-b">
                        Name: {entry.name},<br /> Email: {entry.email},<br /> Phone: {entry.phone}
                    </li>
                ))}
            </ul>
        </div>
    )
}