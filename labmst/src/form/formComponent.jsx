import { useState } from "react";
function FormComponent() {
  //Name, email, course show it in a table;
  const [dataTable, setDataTable] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  function addToTable() {
    setDataTable((prev) => [...prev, { name, email, course }]);
    setName("");
    setEmail("");
    setCourse("");
  }
  return (
    <div className="flex flex-col h-screen w-screen items-center mt-10">
      <div className="mt-2">
        <label className="mr-2">Name</label>
        <input
          type="text"
          placeholder="name"
          className="outline-1 rounded-xl px-2"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="mt-2">
        <label className="mr-2">Email</label>
        <input
          type=""
          placeholder="email"
          className="outline-1 rounded-xl px-2"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="mt-2">
        <label className="mr-2">Course</label>
        <input
          type="text"
          placeholder="course"
          className="outline-1 rounded-xl px-2"
          value={course}
          onChange={(e) => {
            setCourse(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          className="rounded-xl bg-gray-900 text-white p-2 mt-2"
          onClick={addToTable}
        >
          Submit
        </button>
      </div>
      <div>
        <table className="border border-black border-collapse w-full mt-4">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-black px-2 py-1 text-left">Name</th>
              <th className="border border-black px-2 py-1 text-left">Email</th>
              <th className="border border-black px-2 py-1 text-left">
                Course
              </th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((row, index) => (
              <tr key={index}>
                <td className="border border-black px-2 py-1">{row.name}</td>
                <td className="border border-black px-2 py-1">{row.email}</td>
                <td className="border border-black px-2 py-1">{row.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FormComponent;
