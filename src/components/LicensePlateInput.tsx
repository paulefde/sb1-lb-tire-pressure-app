import React, { useState } from 'react'

interface LicensePlateInputProps {
  onSubmit: (licensePlate: string) => void
}

const LicensePlateInput: React.FC<LicensePlateInputProps> = ({ onSubmit }) => {
  const [licensePlate, setLicensePlate] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(licensePlate)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label htmlFor="licensePlate" className="block mb-2 font-bold">
        License Plate:
      </label>
      <div className="flex">
        <input
          type="text"
          id="licensePlate"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
          className="flex-grow p-2 border rounded-l"
          placeholder="Enter license plate"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
          Check
        </button>
      </div>
    </form>
  )
}

export default LicensePlateInput