// src/pages/ManageContent.tsx
import React from 'react';
import TableData from '@/data/CategoriesData.json'
import Layout from '@/components/Layout/Layout';

const ManageContent: React.FC = () => {
  const { data } = TableData
  return (
    <Layout>
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
    </Layout>
  );
};

export default ManageContent;
