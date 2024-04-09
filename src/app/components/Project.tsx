import React from "react";
import Link from "next/link";
export default function Project({
  project,
  hideTasksButton,
}: {
  project: Project;
  hideTasksButton: boolean;
}) {
  return (
    <div className="text-yellow-300 border border-yellow-200 p-4 rounded-sm mx-12 mb-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">{project.projectname}</h1>
        <p>{project.createdat}</p>
      </div>
      <p className="text-blue-400 m-6">{project.description}</p>

      {hideTasksButton ? (
        ""
      ) : (
        <Link
          href={"project/" + project.projectid}
          className="border border-yellow-400 text-blue-400 px-12 py-1 hover:text-black-300 hover:bg-blue-700 rounded-md"
        >
          VIEW TASKS
        </Link>
      )}
    </div>
  );
}