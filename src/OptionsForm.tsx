import React from 'react';

interface OptionsFormProps {
  options: string[];
  selectedOptions: string[];
  handleOptionChange: (option: string) => void;
}

const OptionsForm: React.FC<OptionsFormProps> = ({ options, selectedOptions, handleOptionChange }) => {
  return (
    <div className="container mt-2">
      <div className="form-check-group">
        {options.slice(0, 6).map((option, index) => (
            <div className="form-check" key={index} style={{ minWidth: '40px' }}>
            <input
                type="checkbox"
                className="form-check-input"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
            />
            <label className="form-check-label">{option}</label>
            </div>
        )
        )}
      </div>
      <div className="form-check-group">
        {options.slice(6, 12).map((option, index) => (
            <div className="form-check" key={index} style={{ minWidth: '40px' }}>
            <input
                type="checkbox"
                className="form-check-input"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
            />
            <label className="form-check-label">{option}</label>
            </div>
        )
        )}
      </div>
      <div className="form-check-group">
        Slice Moves:
        {options.slice(12, 15).map((option, index) => (
            <div className="form-check" key={index} style={{ minWidth: '40px' }}>
            <input
                type="checkbox"
                className="form-check-input"
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
            />
            <label className="form-check-label">{option}</label>
            </div>
        )
        )}
      </div>
    </div>
  );
};

export default OptionsForm;
