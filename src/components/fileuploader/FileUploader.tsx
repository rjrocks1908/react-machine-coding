import { useState } from "react";
import Preview from "./Preview";

function FileUploader() {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleDragEnter = () => {
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newfiles = e.dataTransfer.files;
    setIsDragging(false);
    setFiles((prevfiles) => [...prevfiles, ...newfiles]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files;
    if (newFiles) setFiles((prevfiles) => [...prevfiles, ...newFiles]);
  };

  const handleRemove = (name: File) => {
    const copyFile = files.filter((file) => file !== name);
    setFiles(copyFile);
  };

  return (
    <div className="shadow-xl flex flex-col bg-gray-700 rounded-2xl p-5">
      {/* Upload Box */}
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleOnDrop}
        className={`flex flex-col items-center justify-center gap-3 h-60 w-[30rem] border-2 rounded-2xl border-dashed ${
          isDragging ? "bg-amber-800" : ""
        }`}
      >
        <h2>Drag and Drop Image here or</h2>
        <input
          type="file"
          id="file-input"
          multiple
          accept="image/*"
          className="hidden"
          onChange={(e) => handleChange(e)}
        />
        <label
          htmlFor="file-input"
          className="bg-black px-5 py-2 rounded-xl cursor-pointer hover:bg-gray-900"
        >
          Browse Files
        </label>
      </div>

      {/* Preview */}
      {files.map((file) => (
        <Preview fileData={file} handleRemove={handleRemove} />
      ))}
    </div>
  );
}
export default FileUploader;
