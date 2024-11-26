import Board from "@/components/Board";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex flex-col justify-center items-center">
      <h1 className="text-9xl font-bold">Tic <span className="text-[#dd3636]">Tac</span> Toe</h1>
      <p className="text-3xl my-10">Laget av <span className="text-[#dd3636]">Lucas</span></p>
      <Board />
    </div>
  );
};