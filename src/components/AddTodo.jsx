const Addtask = ({ filterText, setFilterText, inputBox, setInputBox }) => {
  return (
    <div className="w-full lg:w-[70%] bg-gray-100 shadow-lg rounded-sm p-6">
      <h1 className="text-center text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex flex-row justify-between items-center gap-3">
        <input
          className="flex-auto p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Search Tasks"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <button
          onClick={() => setInputBox(true)}
          className="flex bg-green-500 text-white px-4 py-2 rounded"
          disabled={inputBox}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Addtask;
