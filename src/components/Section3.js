import { useState } from "react";

export default function Section3() {
    const [Input, setInput] = useState({
        name: '', email: '', phone: ''
    });

    const [Entries, setEntries] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const HandleName = (event) => {
        setInput({ ...Input, name: event.target.value });
    };

    const HandleEmail = (event) => {
        setInput({ ...Input, email: event.target.value });
    };

    const HandlePhone = (event) => {
        setInput({ ...Input, phone: event.target.value });
    };

    const HandleSubmit = (event) => {
        event.preventDefault();
        const NewEntry = {
            name: Input.name,
            email: Input.email,
            phone: Input.phone
        };

        if (isEditing) {
            const updatedEntries = Entries.map((entry, index) =>
                index === currentIndex ? NewEntry : entry
            );
            setEntries(updatedEntries);
            setIsEditing(false);
            setCurrentIndex(null);
        } else {
            setEntries([...Entries, NewEntry]);
        }

        setInput({ name: '', email: '', phone: '' });
    };

    const HandleDelete = (index) => {
        const updatedEntries = Entries.filter((_, i) => i !== index);
        setEntries(updatedEntries);
    };

    const HandleEdit = (index) => {
        const entryToEdit = Entries[index];
        setInput(entryToEdit);
        setIsEditing(true);
        setCurrentIndex(index);
    };

    return (
        <div className="flex flex-col p-3">
            <h1 className="text-3xl">General Information</h1>
            <form onSubmit={HandleSubmit} className="flex flex-col space-y-3 mt-3">
                <label className="flex items-center">
                    <span className="text-2xl w-32">Name:</span>
                    <input
                        type="text"
                        className="lg:w-2/6 h-10 w-2/4 bg-orange-500 p-1 rounded-lg text-black"
                        value={Input.name}
                        onChange={HandleName}
                    />
                </label>

                <label className="flex items-center">
                    <span className="text-2xl w-32">Email:</span>
                    <input
                        type="text"
                        className="lg:w-2/6 h-10 w-2/4 bg-orange-500 p-1 rounded-lg text-black"
                        value={Input.email}
                        onChange={HandleEmail}
                    />
                </label>

                <label className="flex items-center">
                    <span className="text-2xl w-32">Phone:</span>
                    <input
                        type="text"
                        className="lg:w-2/6 h-10 w-2/4 bg-orange-500 p-1 rounded-lg text-black"
                        value={Input.phone}
                        onChange={HandlePhone}
                    />
                </label>
                <button className="bg-black text-white p-2 w-3/6 ml-32 lg:w-32">
                    {isEditing ? "Update" : "Submit"}
                </button>
            </form>
            <ul className="mt-3">
                {Entries.map((entry, index) => (
                    <li key={index} className="p-2 border-b">
                        Name: {entry.name},<br /> Email: {entry.email},<br /> Phone: {entry.phone}
                        <div className="mt-2">
                            <button
                                className="bg-blue-500 text-white p-1 mr-2"
                                onClick={() => HandleEdit(index)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white p-1"
                                onClick={() => HandleDelete(index)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
