import { useState } from "react";

function FileExplorer({ data }: { data: any }) {
  const [showFolder, setShowFolder] = useState(false);

  return (
    <div className="file-explorer">
      <h5>
        {data.type == "folder" ? (showFolder ? "📂" : "📁") : "📄"}
        <span onClick={() => setShowFolder(!showFolder)}>{data.name}</span>
      </h5>

      {showFolder &&
        data?.children.map((child: any) => (
          <FileExplorer key={data.name} data={child} />
        ))}
    </div>
  );
}
export default FileExplorer;
