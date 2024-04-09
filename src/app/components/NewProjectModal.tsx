import React, { FormEvent } from "react";

export default function NewProjectModal({
  isOpen,
  onClose,
  onSave,
}: {
  isOpen: Boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
}) {
  // Simplified form handling inside NewProjectModal
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 dark:bg-opacity-80 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 m-4 max-w-xl w-full space-y-4">
        <h2 className="font-semibold text-xl text-yellow-400 dark:text-blue-200">
          Create Open Shift
        </h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-blue-700 dark:text-gray-300"
            >
              Open Shift
            </label>
            <input
              id="projectName"
              name="projectName"
              type="text"
              required
              className="mt-1 block w-full border border-blue-700 dark:border-gray-600 rounded-md shadow-sm p-2 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-blue-700 dark:text-gray-300"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              className="mt-1 block w-full border border-blue-700 dark:border-blue-600 rounded-md shadow-sm p-2 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 dark:bg-red-700 dark:text-white"
            ></textarea>
          </div>
          {/* Include other fields as necessary */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-700 bg-yellow-400 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-blue-700 bg-yellow-400 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Save Shift
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    const newProject: Project = {
      projectid: String(Date.now()), // Simplified unique ID generation
      // @ts-ignore
      projectName: event?.target?.projectName.value,
      // @ts-ignore
      description: event?.target?.description.value,
      createdAt: new Date().toLocaleDateString(),
      createdBy: "1", // Simplify or adjust according to your user management
    };
    onSave(newProject);
  }
}