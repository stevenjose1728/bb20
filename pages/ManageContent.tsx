// src/components/ManageContent.tsx
import React from 'react';
import TableData from '@/data/CategoriesData.json'

const ManageContent: React.FC = () => {
  const { data } = TableData
  return (
    <div>
      <h1>Dashboard</h1>
      <table className="uk-table uk-table-divider uk-table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>


        </thead>
        <tbody>
          {
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ManageContent;
