import React from "react";

const OutputWindow = ({ outputDetails, additionalStyles }) => {

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    // Extract components from the Date object
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Format as YYYY-MM-DD HH:MM:SS
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };




  return (
    <div className={`!w-full flex-grow flex flex-col ${additionalStyles}`}>
      <h3 className="font-bold text-lg mb-2">Output</h3>

      {outputDetails ?
        (outputDetails.submitted ? (
          <div className="w-full flex flex-col flex-grow bg-dark-2 rounded-lg text-black p-2 font-mono text-sm overflow-y-auto">
            <p className="text-lg">
              Status:{" "}
              <span
                className={`${outputDetails.accepted ? "text-green-500" : "text-red-500"}`}
              >
                {outputDetails.accepted ? "ACCEPTED" : "REJECTED"}
              </span>
            </p>
            {!outputDetails.accepted && (
              <textarea
                value={outputDetails.output || ""}
                className="flex-grow bg-dark-2 resize-none text-xs"
                disabled
              ></textarea>
            )}
          </div>
        ) : (
          <div className="w-full flex flex-col flex-grow bg-dark-2 rounded-lg text-black p-2 font-mono text-sm overflow-y-auto">
            <p className="text-xs text-blue-500">
              Status: {outputDetails.status}
            </p>
            <p className="text-xs text-blue-500">
              Language: {outputDetails.language}
            </p>
            {/* // In your component's return statement */}
            <p className="text-xs text-blue-500 mb-2">
              TimeStamp: {formatDate(outputDetails.timeStamp)}
            </p>
            <textarea
              value={outputDetails.output || ""}
              className="flex-grow bg-dark-2 resize-none text-black"
              disabled
            ></textarea>
          </div>
        )) : (
          <div className="w-full flex flex-col flex-grow bg-dark-2 rounded-lg text-black p-2 font-mono text-sm overflow-y-auto" />
        )}
    </div>
  );
};

export default OutputWindow;



