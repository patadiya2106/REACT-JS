import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type StudentObject = {
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  studentGender: string;
  studentstd: string;
  studentHobby: string[];
};

function StudentsForm({ theme }: { theme: string }) {
  const [studentName, setStudentName] = useState<string>("");
  const [studentEmail, setStudentEmail] = useState<string>("");
  const [studentPhone, setStudentPhone] = useState<string>("");
  const [studentGender, setStudentGender] = useState<string>("");
  const [studentstd, setStudentstd] = useState<string>("");
  const [studentHobby, setStudentHobby] = useState<string[]>([]);
  const [students, setStudents] = useState<StudentObject[]>(
    JSON.parse(localStorage.getItem("studentsData") || "[]")
  );
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("studentsData", JSON.stringify(students));
  }, [students]);

  const stdOptions: string[] = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
  ];
  const activitieList: string[] = ["Gaming", "Singing", "Reading", "Sleeping"];

  const handleChange = (event: any) => {
    const { value, checked } = event.target;
    if (checked) {
      setStudentHobby((prev) => [...prev, value]);
    } else {
      setStudentHobby((prev) => prev.filter((item) => item !== value));
    }
  };

  const resetForm = () => {
    setStudentName("");
    setStudentEmail("");
    setStudentPhone("");
    setStudentGender("");
    setStudentstd("");
    setStudentHobby([]);
    setEditIndex(null);
  };

  const SubmitForm = (event: any) => {
    event.preventDefault();

    const newStudent: StudentObject = {
      studentName,
      studentEmail,
      studentPhone,
      studentGender,
      studentstd,
      studentHobby,
    };

    if (editIndex !== null) {
      const updated = [...students];
      updated[editIndex] = newStudent;
      setStudents(updated);
      toast.success("Student updated successfully!");
    } else {
      setStudents((prev) => [...prev, newStudent]);
      toast.success("Student added successfully!");
    }

    resetForm();
  };

  const editStudent = (index: number) => {
    const s = students[index];
    setStudentName(s.studentName);
    setStudentEmail(s.studentEmail);
    setStudentPhone(s.studentPhone);
    setStudentGender(s.studentGender);
    setStudentstd(s.studentstd);
    setStudentHobby(s.studentHobby);
    setEditIndex(index);
  };

  const deleteStudent = (index: number) => {
    setStudents((prev) => prev.filter((_, i) => i !== index));
    if (editIndex === index) resetForm(); // if deleting the student currently being edited
  };

  const bgMain =
    theme === "light"
      ? "bg-gray-100 text-gray-900"
      : "bg-gradient-to-br from-gray-900 to-gray-800 text-white";
  const bgCard =
    theme === "light"
      ? "bg-white border border-gray-300"
      : "bg-gray-900 border border-gray-700";
  const inputClass =
    theme === "light"
      ? "w-full px-4 py-2 bg-gray-50 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      : "w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className={`flex flex-col items-center min-h-screen p-6 ${bgMain}`}>
      <form
        onSubmit={SubmitForm}
        className={`w-full max-w-lg p-8 rounded-2xl shadow-2xl ${bgCard}`}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-500">
          {editIndex !== null ? "Update Student" : "Student Registration"}
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="studentName" className="block mb-1 text-sm">
            Full Name
          </label>
          <input
            id="studentName"
            type="text"
            placeholder="Enter Your Name"
            required
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Phone + Standard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="studentPhone" className="block mb-1 text-sm">
              Phone Number
            </label>
            <input
              id="studentPhone"
              type="tel"
              placeholder="1234567890"
              pattern="[0-9]{10}"
              required
              value={studentPhone}
              onChange={(e) => setStudentPhone(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="studentstd" className="block mb-1 text-sm">
              Standard
            </label>
            <select
              id="studentstd"
              required
              value={studentstd}
              onChange={(e) => setStudentstd(e.target.value)}
              className={inputClass}
            >
              <option value="">Select..</option>
              {stdOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="studentEmail" className="block mb-1 text-sm">
            Email
          </label>
          <input
            id="studentEmail"
            type="email"
            placeholder="Enter Your Email"
            required
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            className={inputClass}
          />
        </div>

        {/* Hobby */}
        <div className="mb-4">
          <label className="block mb-2 text-sm">Hobby</label>
          <div className="flex flex-wrap gap-4">
            {activitieList.map((act) => (
              <label key={act} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={act}
                  checked={studentHobby.includes(act)}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-500 focus:ring-blue-400"
                />{" "}
                {act}
              </label>
            ))}
          </div>
        </div>

        {/* Gender */}
        <div className="mb-6">
          <label className="block mb-2 text-sm">Gender</label>
          <div className="flex gap-6">
            {["Male", "Female", "Other"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value={type}
                  checked={studentGender === type}
                  onChange={(e) => setStudentGender(e.target.value)}
                  className="w-4 h-4 text-blue-500 focus:ring-blue-400"
                />{" "}
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="w-full py-3 font-semibold rounded-xl bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {editIndex !== null ? "Update" : "Register"}
          </button>

          {editIndex !== null && (
            <button
              type="button"
              onClick={resetForm}
              className="w-full py-3 font-semibold rounded-xl bg-gray-400 hover:bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Students Table */}
      {students.length > 0 && (
        <div
          className={`w-full max-w-4xl mt-10 rounded-xl shadow-xl overflow-x-auto ${bgCard}`}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white text-left text-sm uppercase">
                <th className="px-4 py-3">No</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Hobby</th>
                <th className="px-4 py-3">Gender</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
              {students.map((data, index) => (
                <tr
                  key={index}
                  className={
                    theme === "light"
                      ? "hover:bg-gray-100"
                      : "hover:bg-gray-800"
                  }
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{data.studentName}</td>
                  <td className="px-4 py-3">{data.studentPhone}</td>
                  <td className="px-4 py-3">{data.studentEmail}</td>
                  <td className="px-4 py-3">{data.studentHobby.join(", ")}</td>
                  <td className="px-4 py-3">{data.studentGender}</td>
                  <td className="px-4 py-3 flex gap-2 justify-center">
                    {/* Edit button */}
                    <button
                      className="px-3 py-1 rounded-md bg-green-500 text-white hover:bg-green-600 text-sm"
                      onClick={() => editStudent(index)}
                    >
                      Edit
                    </button>

                    {/* Delete button */}
                    <button
                      className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 text-sm"
                      onClick={() => deleteStudent(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default StudentsForm;
