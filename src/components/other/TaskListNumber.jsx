import React from "react";

function TaskListNumber({data}) {
  return (
    <div className="flex justify-between gap-4 screen mt-10">
      <div className="bg-red-500 w-[45%] py-6 px-9 rounded-xl">
        <h1 className="font-semibold  text-2xl ">{data.taskCounts.failed}</h1>
        <h3 className="font-medium  text-xl ">failed</h3>
      </div>
      <div className="bg-emerald-500 w-[45%] py-6 px-9 rounded-xl">
        <h1 className="font-semibold  text-2xl ">{data.taskCounts.completed}</h1>
        <h3 className="font-medium  text-xl ">completed</h3>
      </div>
      <div className="bg-blue-500 w-[45%] py-6 px-9 rounded-xl">
        <h1 className="font-semibold  text-2xl ">{data.taskCounts.newTask}</h1>
        <h3 className="font-medium  text-xl ">newTask</h3>
      </div>
      <div className="bg-yellow-500 w-[45%] py-6 px-9 rounded-xl">
        <h1 className="font-semibold  text-2xl ">{data.taskCounts.active}</h1>
        <h3 className="font-medium  text-xl ">activetask</h3>
      </div>
    </div>
  );
}

export default TaskListNumber;
