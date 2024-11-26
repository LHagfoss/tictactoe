"use client"

import { useState } from 'react';

function Square({ value, onClick }: { value: string, onClick: () => void }) {
    return (
        <button type="button" className="rounded-2xl border border-gray-300 hover:scale-105 duration-300 text-3xl" onClick={onClick}>
            {value}
        </button>
    );
};

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index: number) => {
        if (squares[index] || calculateWinner(squares)) {
            return;
        };

        const newSquares = squares.slice();
        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    const handleRestart = () => {
        setSquares(Array(9).fill(''));
        setIsXNext(true);
    };

    const Restart = () => {
        return <button type="button" className="text-[#0a0a0a] bg-white w-[20vw] py-5 rounded-3xl mt-20 duration-300 hover:scale-105" onClick={handleRestart}>Restart</button>
    };

    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

    return (
        <>
            <div className="w-[20vw] h-[20vw] border-8 rounded-3xl">
                <div className="w-full h-full grid grid-cols-3 grid-rows-3 p-2 gap-2">
                    {squares.map((value, index) => (
                        <Square key={index} value={value} onClick={() => handleClick(index)} />
                    ))}
                </div>
                <div className="mt-8 text-center">{status}</div>
            </div>
            <Restart />
        </>
    );
}

function calculateWinner(squares: string[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        };
    };

    return null;
};