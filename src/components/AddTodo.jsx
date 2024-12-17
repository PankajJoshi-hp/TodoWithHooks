const Addtask = () => {
  return (
    <div className="w-full  lg:w-[70%] bg-gray-100 shadow-lg rounded-sm p-6">
      <h1 className="text-center text-2xl font-bold mb-4">Todo List</h1>
      <form className="flex flex-col sm:flex-row gap-2" action="">
        <input
          className="flex-auto p-2"
          type="text"
          placeholder="Search Tasks"
        />
        <input className="flex-auto p-2" type="text" placeholder="your input" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Addtask;
