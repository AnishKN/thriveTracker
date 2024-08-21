import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { saveAs } from 'file-saver'; // Import file-saver
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const ViewResults = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/results/all');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Flatten the testPayload object and ensure column order
  const flattenPayload = (payload) => {
    try {
      const parsedPayload = JSON.parse(payload);
      return {
        'What is your father\'s occupation?': parsedPayload['What is your father\'s occupation?'] || '',
        'What is your mother\'s occupation?': parsedPayload['What is your mother\'s occupation?'] || '',
        'What is your highest level of education?': parsedPayload['What is your highest level of education?'] || '',
        'What is your current employment status?': parsedPayload['What is your current employment status?'] || '',
        'What is your household\'s annual income?': parsedPayload['What is your household\'s annual income?'] || '',
        'What type of area do you live in?': parsedPayload['What type of area do you live in?'] || '',
        'How would you rate your overall health?': parsedPayload['How would you rate your overall health?'] || '',
        'How many hours do you spend studying or working per week?': parsedPayload['How many hours do you spend studying or working per week?'] || ''
      };
    } catch (error) {
      console.error('Error parsing testPayload:', error);
      return {};
    }
  };

  const exportToCSV = () => {
    // Define the header for the CSV file
    const headers = [
      'SL No', 'testName', 'userName', 'facultyName',
      'What is your father\'s occupation?', 'What is your mother\'s occupation?',
      'What is your highest level of education?', 'What is your current employment status?',
      'What is your household\'s annual income?', 'What type of area do you live in?',
      'How would you rate your overall health?', 'How many hours do you spend studying or working per week?'
    ];

    // Create CSV rows with correct order
    const csvRows = [];
    csvRows.push(headers.join(','));

    data.forEach((item, index) => {
      const payload = flattenPayload(item.testPayload);

      const row = [
        index + 1,
        item.testName,
        item.userName,
        item.facultyName,
        payload['What is your father\'s occupation?'],
        payload['What is your mother\'s occupation?'],
        payload['What is your highest level of education?'],
        payload['What is your current employment status?'],
        payload['What is your household\'s annual income?'],
        payload['What type of area do you live in?'],
        payload['How would you rate your overall health?'],
        payload['How many hours do you spend studying or working per week?']
      ].map(field => `"${String(field).replace(/"/g, '""')}"`); // Ensure fields are strings and escape quotes

      csvRows.push(row.join(','));
    });

    const csvData = csvRows.join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });

    // Use file-saver to save the CSV file
    saveAs(blob, 'results.csv');
  };

  // Define columns for the DataTable
  const columns = [
    {
      name: 'SL No',
      selector: (row, index) => index + 1,
      sortable: true
    },
    {
      name: 'Test Name',
      selector: row => row.testName,
      sortable: true
    },
    {
      name: 'User Name',
      selector: row => row.userName,
      sortable: true
    },
    {
      name: 'Faculty Name',
      selector: row => row.facultyName,
      sortable: true
    },
    // Additional columns for testPayload data
    {
      name: 'Father\'s Occupation',
      selector: row => {
        const payload = flattenPayload(row.testPayload);
        return payload['What is your father\'s occupation?'] || '';
      },
      sortable: true
    },
    {
      name: 'Mother\'s Occupation',
      selector: row => {
        const payload = flattenPayload(row.testPayload);
        return payload['What is your mother\'s occupation?'] || '';
      },
      sortable: true
    },
    {
      name: 'Highest Education Level',
      selector: row => {
        const payload = flattenPayload(row.testPayload);
        return payload['What is your highest level of education?'] || '';
      },
      sortable: true
    },
    {
      name: 'Employment Status',
      selector: row => {
        const payload = flattenPayload(row.testPayload);
        return payload['What is your current employment status?'] || '';
      },
      sortable: true
    },
    {
      name: 'Household Income',
      selector: row => {
        const payload = flattenPayload(row.testPayload);
        return payload['What is your household\'s annual income?'] || '';
      },
      sortable: true
    },
    {
      name: 'Area Type',
      selector: row => {
        const payload = flattenPayload(row.testPayload);
        return payload['What type of area do you live in?'] || '';
      },
      sortable: true
    },
    {
      name: 'Overall Health',
      selector: row => {
        const payload = flattenPayload(row.testPayload);
        return payload['How would you rate your overall health?'] || '';
      },
      sortable: true
    },
    {
      name: 'Study Hours Per Week',
      selector: row => {
        const payload = flattenPayload(row.testPayload);
        return payload['How many hours do you spend studying or working per week?'] || '';
      },
      sortable: true
    }
  ];

  return (
    <div className="p-4">
      <button
        onClick={exportToCSV}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
      >
        Export to CSV
      </button>
      <DataTable
        columns={columns}
        data={data}
        noDataComponent="No records found"
        pagination
        responsive
        highlightOnHover
        striped
        customStyles={{
          rows: {
            style: {
              fontSize: '14px',
              borderBottom: '1px solid #e2e8f0',
            },
          },
          headCells: {
            style: {
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#4a5568',
            },
          },
        }}
      />
    </div>
  );
};

export default ViewResults;