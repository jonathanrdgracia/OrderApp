import React, { useState } from 'react';

interface DateInputProps {
  onDateChange: (date: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ onDateChange }) => {
  const [date, setDate] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setDate(newDate);
    onDateChange(newDate);
  };

  return (
    <div className="p-4">
      <label htmlFor="OrderDate" className="block text-sm font-medium text-gray-700">
        Fecha de la Orden:
      </label>
      <input
        type="date"
        id="OrderDate"
        value={date}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default DateInput;