import React from "react";
import './TicTacToe.css';
import { Board } from "./Board";
import { useState } from "react";
export const TicTacToe =()=>{
    return(
        <div>
            <div className="game">
                <h1>TIC-TAC-TOE</h1>
                <Board/>
            </div>
        </div>
    );
}