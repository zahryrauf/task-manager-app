// frontend/src/pages/TaskList.jsx
import React from 'react';
import jsPDF from 'jspdf';

const TaskList = ({ tasks }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Task List', 10, 10);

    doc.setFontSize(12);
    tasks.forEach((task, index) => {
      doc.text(`${index + 1}. ${task.title} - ${task.status}`, 10, 20 + index * 10);
    });

    doc.save('tasks.pdf');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">All Tasks</h1>

      <button
        onClick={generatePDF}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
      >
        Export as PDF
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title} - {task.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
