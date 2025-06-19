interface Props {
  fileData: File;
  handleRemove: (name: File) => void;
}

function Preview({ fileData, handleRemove }: Props) {
  return (
    <div className="flex gap-1 items-center justify-between p-3 bg-gray-900 mt-3 rounded-2xl">
      <div className="flex items-center gap-5">
        <img
          className="size-10"
          src={URL.createObjectURL(fileData)}
          alt={fileData.name}
        />
        <h2>{fileData.name}</h2>
      </div>

      <div
        className="bg-red-500 rounded-full size-5 flex items-center justify-center cursor-pointer text-white text-xs pb-1 hover:bg-red-700"
        onClick={() => handleRemove(fileData)}
      >
        x
      </div>
    </div>
  );
}
export default Preview;
