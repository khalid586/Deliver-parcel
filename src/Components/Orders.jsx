import React from 'react'

function Orders({orders}) {
  return (
    <div className="text-xs m-4 p-4 border-2 border-blue-600 rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Receiver Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((
              {
                _id,
                orderTime,
                deliveredBy,
                phoneNumber,
                parcelType,
                parcelWeight,
                receiverName,
                receiverPhoneNumber,
                parcelDeliveryAddress,
                requestedDeliveryDate,
                status
              }
            )=> (
              <tr key={_id}>
                <td className="px-6 py-4 whitespace-nowrap"> {_id}</td>
                <td><span className={`p-2 px-3 font-bold text-xs rounded-full whitespace-nowrap text-white ${status === 'pending' ? 'bg-gray-800' :status === 'on the way' ? 'bg-yellow-400' : 'bg-green-500'}`}>{status}</span></td>
                <td className="px-6 py-4 whitespace-nowrap"> {receiverName}</td>
                <td className="px-6 py-4 whitespace-nowrap"> {parcelDeliveryAddress}</td>
                <td className="px-6 py-4 whitespace-nowrap"> {orderTime}</td>
                <td className="px-6 py-4 whitespace-nowrap"> {requestedDeliveryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default Orders