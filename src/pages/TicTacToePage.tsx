import TicTacToe from "../components/tictactoe/TicTacToe"

function TicTacToePage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <TicTacToe size={3}/>
    </div>
  )
}
export default TicTacToePage