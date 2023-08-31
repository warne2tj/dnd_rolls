import { useEffect, useState } from "react"

export function Dice() {
    const diceOptions = [20, 12, 10, 8, 6, 4];
    const rollCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const [numDice, setNumDice] = useState<number>(1);
    const [selectedDice, setSelectedDice] = useState<number>(20);
    const [modifier, setModifier] = useState<number>(0);
    const [rollResults, setRollResults] = useState<number[]>([]);
    const [sum, setSum] = useState(0)
  
    const rollDice = (sides: number, numRolls: number) => {
        const results = [];
        for (let i = 0; i < numRolls; i++) {
          const result = Math.floor(Math.random() * sides) + 1 + modifier;
          results.push(result);
        }
        setRollResults(results);
    };

    useEffect(() => {
        const count = rollResults.reduce((result, index) => result + index, 0);
        setSum(count)
    }, rollResults)

    const handleNumDiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumDice(Number(e.target.value));
    };
  
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedDice(Number(e.target.value));
    };
  
    const handleModifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setModifier(Number(e.target.value));
    };
  
    return (
      <div className="dice-roller">
        <h1>Dice Roller</h1>

        <div className="row-flex">

        <div className="dice-options">
          {rollCounts.map((count) => (
            <label key={count}
            className={`dice-option ${
                numDice === count ? "selected" : ""
            }`}>
              <input
                type="radio"
                value={count}
                checked={numDice === count}
                onChange={handleNumDiceChange}
              />
              {count}
            </label>
          ))}
        </div>

        <div className="dice-options">
        {diceOptions.map((sides) => (
            <label
            key={sides}
            className={`dice-option ${
                selectedDice === sides ? "selected" : ""
            }`}
            >
                    <input
                        type="radio"
                        value={sides}
                        checked={selectedDice === sides}
                        onChange={handleRadioChange}
                    />
                    D{sides}    </label>
        ))}
        </div>

        </div>



        <div className="modifier-options">
        {[...Array(21)].map((_, index) => (
            <label
            key={index}
            className={`modifier-option ${modifier === index - 5 ? "selected" : ""}`}
            >
        <input
                        type="radio"
                        value={index - 5}
                        checked={modifier === index - 5}
                        onChange={handleModifierChange}
                    />
                    {index - 5}    </label>
        ))}
        </div>
        <div className="results-display">
            <button className="roll-button" onClick={() => rollDice(selectedDice, numDice)}>Roll</button>
            <h1>Total:  {sum}</h1>
        </div>

      <div className="results-display">
        {rollResults.map((result, index) => (
            <div className="roll">
                <p className="roll-result" key={index}>{result-modifier} + ({modifier}) = {result}</p>
                {(result !== null && result - modifier >= selectedDice) && <p className="roll-result flash">NUMMY NUMMY</p>}
                {(result !== null && result - modifier == 1) && <p className="roll-result flash">EAT SHIT</p>}
            </div>
        ))}
      </div>
      
    </div>
    );
  };
