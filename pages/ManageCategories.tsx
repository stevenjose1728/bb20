import React from 'react'
import CategoriesData from '@/data/CategoriesData.json'
import Layout from '@/components/Layout/Layout'
import Link from 'next/link'

function ManageCategories() {
  const { data } = CategoriesData
  return (
    <Layout>
      <div className="uk-card uk-card-default uk-card-hover uk-card-body custom-card">
        <h3 className="uk-card-title">Default</h3>
        <table className="uk-table uk-table-divider uk-table-striped custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Display</th>
              <th>Sort</th>
              <th>Edit</th>
              <th></th>
            </tr>


          </thead>
          <tbody>
            {
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td className='uk-text-capitalize'>
                    <span className={(item.display === 'hidden' ? 'red' : 'green') + '-circle'}></span>
                    {item.display}
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <Link href={'/edit/' + item.id} data-uk-icon="icon: pencil"></Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default ManageCategories
