import VirtualizedList from "../components/vlist/VirtualizedList"

const list = Array.from({length: 1000}, (_, idx) => idx + 1)

function VirtualizedListPage() {

  return (
    <div className="flex justify-center items-center h-screen">
      <VirtualizedList list={list} height={400} width={300} itemHeight={35} />
    </div>
  )
}
export default VirtualizedListPage