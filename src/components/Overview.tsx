import React, { useState } from 'react'

const Overview: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  // TODO: Replace with actual data fetching logic
  const mockData = [
    { licensePlate: 'ABC123', date: '2023-11-01' },
    { licensePlate: 'DEF456', date: '2023-11-02' },
    { licensePlate: 'GHI789', date: '2023-11-03' },
  ]

  const filteredData = mockData.filter((item) =>
    item.licensePlate.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Serviced License Plates</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search license plates"
        className="w-full p-2 border rounded mb-4"
      />
      <ul className="space-y-2">
        {filteredData.map((item) => (
          <li key={item.licensePlate} className="bg-white p-4 rounded shadow">
            <span className="font-bold">{item.licensePlate}</span> - {item.date}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Overview