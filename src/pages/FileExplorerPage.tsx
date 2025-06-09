import FileExplorer from "../components/fileexplorer/FileExplorer"
import folderData from "../components/fileexplorer/data_fileexplorer.json"
import "../styles/filexplorer.css"

function FileExplorerPage() {
  return (
    <div className="file-explorer-container">
      <FileExplorer data={folderData}/>
    </div>
  )
}
export default FileExplorerPage