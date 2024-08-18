import { useState } from "react";

export default function Section1() {
    const [Input, setInput] = useState({
        name: '',
        email: '',
        phone: '',
        CollegeName: '',
        YearOfCompletion: '',
        CompanyName: '',
        PositionTitle: '',
        ExperianceDuration: ''
    });

    const [Entries, setEntries] = useState([]);

    const HandleName = (event) => { setInput({ ...Input, name: event.target.value }); };
    
    const HandleEmail = (event) => { setInput({ ...Input, email: event.target.value }); };

    const HandlePhone = (event) => { setInput({ ...Input, phone: event.target.value }); };

    const HandleCollege = (event) => { setInput({ ...Input, CollegeName: event.target.value }); };

    const HandleYear = (event) => { setInput({ ...Input, YearOfCompletion: event.target.value }); };

    const HandleCompany = (event) => { setInput({ ...Input, CompanyName: event.target.value }); };

    const HandlePosition = (event) => { setInput({ ...Input, PositionTitle: event.target.value }); };

    const HandleExperiance = (event) => { setInput({ ...Input, ExperianceDuration: event.target.value }); };

    const HandleSubmit = (event) => {
        event.preventDefault();
        const NewEntries = {
            name: Input.name,
            email: Input.email,
            phone: Input.phone,
            college: Input.CollegeName,
            year: Input.YearOfCompletion,
            company: Input.CompanyName,
            position: Input.PositionTitle,
            experiance: Input.ExperianceDuration
        };
        setEntries([...Entries, NewEntries]);
        setInput({
            name: '',
            email: '',
            phone: '',
            CollegeName: '',
            YearOfCompletion: '',
            CompanyName: '',
            PositionTitle: '',
            ExperianceDuration: ''
        });
    };

    const HandleDelete = (index) => {
        const updatedEntries = Entries.filter((_, i) => i !== index);
        setEntries(updatedEntries);
    };

    return (
        <div className="flex flex-col p-3 bg-orange-400">
            {/* General Information */}
            <h1 className="text-3xl">General Information</h1>
            <form onSubmit={HandleSubmit} className="flex flex-col space-y-3 mt-3 ">
                <label className="flex items-center">
                    <span className="text-2xl w-32">Name:</span>
                    <input value={Input.name} type="text" className="lg:w-2/6 h-10 w-2/4 bg-orange-500 p-1 rounded-lg text-black" onChange={HandleName} />
                </label>
               
                <label className="flex items-center">
                    <span className="text-2xl w-32">Email:</span>
                    <input value={Input.email} type="text" className="lg:w-2/6 h-10 w-2/4 bg-orange-500 p-1 rounded-lg text-black" onChange={HandleEmail} />
                </label>

                <label className="flex items-center">
                    <span className="text-2xl w-32">Phone:</span>
                    <input value={Input.phone} type="text" className="lg:w-2/6 h-10 w-2/4 bg-orange-500 p-1 rounded-lg text-black" onChange={HandlePhone} />
                </label>
                
                {/* Educational Experience */}
                <h1 className="text-3xl">Educational Experience</h1>
                <label className="flex items-center">
                    <span className="text-2xl w-32">College Name:</span>
                    <input value={Input.CollegeName} type="text" className="lg:w-2/6 h-10 w-2/4 bg-orange-500 p-1 rounded-lg text-black" onChange={HandleCollege} />
                </label>

                <label className="flex items-center">
                    <span className="text-2xl w-32">Year:</span>
                    <input value={Input.YearOfCompletion} type="text" className="lg:w-2/6 h-10 w-2/4 bg-orange-500 p-1 rounded-lg text-black" onChange={HandleYear} />
                </label>

                {/* Company Experience */}
                <h1 className="text-3xl">Company Experience</h1>
                <label className="flex items-center">
                    <span className="text-2xl w-32">Company:</span>
                    <input value={Input.CompanyName} type="text" className="lg:w-2/6 h-10 w-2/4 bg-orange-500 p-1 rounded-lg text-black" onChange={HandleCompany} />
                </label>

                <label className="flex items-center">
                    <span className="text-2xl w-32">Position:</span>
                    <input value={Input.PositionTitle} type="text" className="lg:w-2/6 h-10 w-2/4 bg-orange-500 p-1 rounded-lg text-black" onChange={HandlePosition} />
                </label>

                <label className="flex items-center">
                    <span className="text-2xl w-32">Experience:</span>
                    <input value={Input.ExperianceDuration} type="text" className="lg:w-2/6 h-10 w-2/4 bg-orange-500 p-1 rounded-lg text-black" onChange={HandleExperiance} />
                </label>

                <button className="bg-black text-white p-2 w-3/6 ml-32 lg:w-32">Submit</button>
            </form>

            <ul className=" bg-orange-400 flex mt-5 ">
                {Entries.map((entry, index) => (
                    <li key={index} className="p-2 border-b-2 border-dotted flex-1">
                        Name: {entry.name}<br /> 
                        Email: {entry.email}<br /> 
                        Phone: {entry.phone}<br />
                        <h1>Educational Experience:</h1><br />
                        College Name: {entry.college}<br />
                        Year: {entry.year}<br />
                        <h1>Company Experience:</h1><br />
                        Company: {entry.company}<br />
                        Position: {entry.position}<br />
                        Experience: {entry.experiance}<br />
                        <button className="bg-red-600 px-2 py-0.5 rounded-sm" onClick={() => HandleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
