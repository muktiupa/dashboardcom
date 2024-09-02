import { useEffect, useState } from 'react';

const InquiryTable = () => {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    // Fetch inquiries from your API endpoint
    const fetchInquiries = async () => {
      const response = await fetch('/api/inquiries');
      const data = await response.json();
      setInquiries(data);
    };
    fetchInquiries();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Inquiries</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Course</th>
            <th className="border p-2">Inquiry Type</th>
            <th className="border p-2">Message</th>
            <th className="border p-2">Status</th>
            {/* Add more columns if needed */}
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry) => (
            <tr key={inquiry.id}>
              <td className="border p-2">{inquiry.name}</td>
              <td className="border p-2">{inquiry.email}</td>
              <td className="border p-2">{inquiry.phone}</td>
              <td className="border p-2">{inquiry.course}</td>
              <td className="border p-2">{inquiry.inquiryType}</td>
              <td className="border p-2">{inquiry.message}</td>
              <td className="border p-2">
                <select
                  value={inquiry.status}
                  onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
                  className="p-1 border"
                >
                  <option value="Pending">Pending</option>
                  <option value="Responded">Responded</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const handleStatusChange = async (id, status) => {
  await fetch(`/api/inquiries/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  });
  // Optionally, refetch inquiries or update state directly
};

export default InquiryTable;
