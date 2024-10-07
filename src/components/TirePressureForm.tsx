import React, { useState } from 'react'

interface TirePressureFormProps {
  licensePlate: string
}

const TirePressureForm: React.FC<TirePressureFormProps> = ({ licensePlate }) => {
  const [tirePressures, setTirePressures] = useState({
    frontLeftBefore: '',
    frontRightBefore: '',
    rearLeftBefore: '',
    rearRightBefore: '',
    frontLeftAfter: '',
    frontRightAfter: '',
    rearLeftAfter: '',
    rearRightAfter: '',
  })
  const [comments, setComments] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setTirePressures((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement data saving logic
    console.log('Saving data:', { licensePlate, tirePressures, comments })
    alert('Data saved successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Tire Pressure for {licensePlate}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold">Before Service</h3>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              name="frontLeftBefore"
              value={tirePressures.frontLeftBefore}
              onChange={handleInputChange}
              placeholder="Front Left"
              className="p-2 border rounded"
              required
            />
            <input
              type="number"
              name="frontRightBefore"
              value={tirePressures.frontRightBefore}
              onChange={handleInputChange}
              placeholder="Front Right"
              className="p-2 border rounded"
              required
            />
            <input
              type="number"
              name="rearLeftBefore"
              value={tirePressures.rearLeftBefore}
              onChange={handleInputChange}
              placeholder="Rear Left"
              className="p-2 border rounded"
              required
            />
            <input
              type="number"
              name="rearRightBefore"
              value={tirePressures.rearRightBefore}
              onChange={handleInputChange}
              placeholder="Rear Right"
              className="p-2 border rounded"
              required
            />
          </div>
        </div>
        <div>
          <h3 className="font-bold">After Service</h3>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              name="frontLeftAfter"
              value={tirePressures.frontLeftAfter}
              onChange={handleInputChange}
              placeholder="Front Left"
              className="p-2 border rounded"
              required
            />
            <input
              type="number"
              name="frontRightAfter"
              value={tirePressures.frontRightAfter}
              onChange={handleInputChange}
              placeholder="Front Right"
              className="p-2 border rounded"
              required
            />
            <input
              type="number"
              name="rearLeftAfter"
              value={tirePressures.rearLeftAfter}
              onChange={handleInputChange}
              placeholder="Rear Left"
              className="p-2 border rounded"
              required
            />
            <input
              type="number"
              name="rearRightAfter"
              value={tirePressures.rearRightAfter}
              onChange={handleInputChange}
              placeholder="Rear Right"
              className="p-2 border rounded"
              required
            />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="comments" className="block font-bold mb-2">
          Comments:
        </label>
        <textarea
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className="w-full p-2 border rounded"
          rows={3}
        ></textarea>
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Save Data
      </button>
    </form>
  )
}

export default TirePressureForm