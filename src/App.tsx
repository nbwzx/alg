import React, { useState } from 'react';
import OptionsForm from './OptionsForm';
import { rewrite } from './rewrite';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [rewritedText, setRewritedText] = useState('');
  const options = ['R', 'L', 'U', 'D', 'F', 'B', 'l', 'r', 'd', 'u', 'b', 'f'];
  const [selectedOptions, setSelectedOptions] = useState<string[]>(options);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    if (isSelectionValid(selectedOptions)) {
      const rewrited = rewrite(e.target.value, selectedOptions);
      setRewritedText(rewrited);
    } else {
      setRewritedText('');
    }
  };

  const handleOptionChange = (option: string) => {
    let selectedOptionsChanged: string[] = [];
    if (selectedOptions.includes(option)) {
      selectedOptionsChanged = selectedOptions.filter((item) => item !== option);
    } else {
      selectedOptionsChanged = [...selectedOptions, option];
    }
    setSelectedOptions(selectedOptionsChanged);
    if (isSelectionValid(selectedOptionsChanged)) {
      const rewrited = rewrite(inputText, selectedOptionsChanged);
      setRewritedText(rewrited);
    } else {
      setRewritedText('');
    }
  };

  const selectAllOptions = () => {
    setSelectedOptions(options);
    const rewrited = rewrite(inputText, options);
    setRewritedText(rewrited);
  };
  
  const selectRightyOptions = () => {
    setSelectedOptions(['R', 'r', 'U', 'd', 'D', 'u', 'F', 'b', 'B', 'f']);
    const rewrited = rewrite(inputText, ['R', 'r', 'U', 'd', 'D', 'u', 'F', 'b', 'B', 'f']);
    setRewritedText(rewrited);
  };

  const selectLeftyOptions = () => {
    setSelectedOptions(['l', 'L', 'U', 'd', 'D', 'u', 'F', 'b', 'B', 'f']);
    const rewrited = rewrite(inputText, ['l', 'L', 'U', 'd', 'D', 'u', 'F', 'b', 'B', 'f']);
    setRewritedText(rewrited);
  };

  const selectSingleOptions = () => {
    setSelectedOptions(['R', 'L', 'U', 'D', 'F', 'B']);
    const rewrited = rewrite(inputText, ['R', 'L', 'U', 'D', 'F', 'B']);
    setRewritedText(rewrited);
  };

  const isPairSelectionValid = () => {
    for (let i = 0; i < options.length / 2; i++) {
      if (!selectedOptions.includes(options[i]) && !selectedOptions.includes(options[i + 6])) {
        return false;
      }
    }
    return true;
  };

  const isSelectionValid = (selectedOptions: string[]) => {
    for (let i = 0; i < options.length / 2; i++) {
      if (!selectedOptions.includes(options[i]) && !selectedOptions.includes(options[i + 6])) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Rewrite Algs</h1>
      <p>It's a useful tool to remove rotations, rewrite algs, etc.</p>
      <div className="grid form-label mt-4">
        <div className="d-flex align-items-center">
          <strong>Algorithm:&nbsp;&nbsp;</strong>
          <input
            type="text"
            className="form-control"
            placeholder="Enter an algorithm"
            value={inputText}
            onChange={handleInputChange}
          />
        </div>
      </div>
      
      <strong>Please Select Allowed Notations:</strong>

      <div className="flex">
        <button className="btn btn-secondary px-2 py-1" onClick={selectAllOptions}>All</button>
        <button className="btn btn-danger px-2 py-1" onClick={selectRightyOptions}>Righty</button>
        <button className="btn btn-success px-2 py-1" onClick={selectLeftyOptions}>Lefty</button>
        <button className="btn btn-warning px-2 py-1" onClick={selectSingleOptions}>Single</button>
      </div>

      <OptionsForm options={options} selectedOptions={selectedOptions} handleOptionChange={handleOptionChange} />

      {!isPairSelectionValid() && (
        <p style={{ color: 'red' }}>You must select at least one checkbox from each pair of options arranged vertically.</p>
      )}

      <div className="grid form-label mt-4">
        <div className="d-flex align-items-center">
          <strong>Result:&nbsp;&nbsp;</strong>
          <div>
            {rewritedText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
