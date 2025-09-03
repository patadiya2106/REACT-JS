import { useState } from "react";

type StudentObject = {
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  studentGender: string;
  studentstd: string;
  studentHobby: string[];
};

function StudentsForm() {
  const [studentName, setStudentName] = useState<string>("");
  const [studentEmail, setStudentEmail] = useState<string>("");
  const [studentPhone, setStudentPhone] = useState<string>("");
  const [studentGender, setStudentGender] = useState<string>("");
  const [studentstd, setStudentstd] = useState<string>("");
  const [studentHobby, setStudentHobby] = useState<string[]>([]);
  const [students, setStudents] = useState<StudentObject[]>([]);

  const stdOptions: string[] = [
    "1st", "2nd", "3rd", "4th", "5th",
    "6th", "7th", "8th", "9th", "10th",
    "11th", "12th"
  ];
  const activitieList: string[] = ["Gaming", "Singing", "Reading", "Sleeping"];

  const handleActivityChange = (event: any) => {
    const { value, checked } = event.target;
    if (checked) {
      setStudentHobby(prev => [...prev, value]);
    } else {
      setStudentHobby(prev => prev.filter(item => item !== value));
    }
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();

    const newStudent: StudentObject = {
      studentName,
      studentEmail,
      studentPhone,
      studentGender,
      studentstd,
      studentHobby
    };

    setStudents(prev => [...prev, newStudent])

    setStudentName("");
    setStudentEmail("");
    setStudentPhone("");
    setStudentGender("");
    setStudentstd("");
    setStudentHobby([]);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-lg bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">Student Registration</h2>
        <div className="mb-4">
          <label htmlFor="studentName" className="block mb-1 text-sm text-gray-300">
            Full Name
          </label>
          <input
            id="studentName"
            type="text"
            placeholder="Enter Your Name"
            required
            value={studentName}
            onChange={e => setStudentName(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="studentPhone" className="block mb-1 text-sm text-gray-300">Phone Number</label>
            <input
              id="studentPhone"
              type="tel"
              placeholder="1234567890"
              pattern="[0-9]{10}"
              required
              value={studentPhone}
              onChange={e => setStudentPhone(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="studentstd" className="block mb-1 text-sm text-gray-300">Standrad</label>
            <select
              id="studentstd"
              required
              value={studentstd}
              onChange={e => setStudentstd(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select..</option>
              {stdOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>    
        <div className="mb-4">
          <label htmlFor="studentEmail" className="block mb-1 text-sm text-gray-300">Email</label>
          <input
            id="studentEmail"
            type="email"
            placeholder="Enter Your Email"
            required
            value={studentEmail}
            onChange={e => setStudentEmail(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm text-gray-300">Hobby</label>
          <div className="flex flex-wrap gap-4">
            {activitieList.map(act => (
              <label key={act} className="flex items-center gap-2 text-gray-200">
                <input
                  type="checkbox"
                  value={act}
                  checked={studentHobby.includes(act)}
                  onChange={handleActivityChange}
                  className="w-4 h-4 text-blue-500 focus:ring-blue-400 border-gray-600 bg-gray-700"
                /> {act}
              </label>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-300">Gender</label>
          <div className="flex gap-6">
            {["Male", "Female", "Other"].map(type => (
              <label key={type} className="flex items-center gap-2 text-gray-200">
                <input
                  type="radio"
                  name="gender"
                  value={type}
                  checked={studentGender === type}
                  onChange={e => setStudentGender(e.target.value)}
                  className="w-4 h-4 text-blue-500 focus:ring-blue-400 border-gray-600 bg-gray-700"
                /> {type}
              </label>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 font-semibold rounded-xl bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          Register
        </button>
      </form>
      
      {students.length > 0 && (
        <div className="w-full max-w-4xl mt-10 bg-gray-900 rounded-xl shadow-xl border border-gray-700 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white text-left text-sm uppercase">
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Hobby</th>
                <th className="px-4 py-3">Gender</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {students.map((data, index) => (
                <tr key={index} className="hover:bg-gray-800 transition duration-200">
                  <td className="px-4 py-3 text-gray-200">{index + 1}</td>
                  <td className="px-4 py-3 text-gray-200">{data.studentName}</td>
                  <td className="px-4 py-3 text-gray-200">{data.studentPhone}</td>
                  <td className="px-4 py-3 text-gray-200">{data.studentEmail}</td>
                  <td className="px-4 py-3 text-gray-200">{data.studentHobby.join(", ")}</td>
                  <td className="px-4 py-3 text-gray-200">{data.studentGender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default StudentsForm;
  