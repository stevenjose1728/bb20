import React from 'react'
import CategoriesData from '@/data/CategoriesData.json'
import Layout from '@/components/Layout/Layout'
import Link from 'next/link'

function ManageCategories() {
  const { data } = CategoriesData
  return (
    <Layout>
      <div className="uk-card uk-card-default uk-card-hover uk-card-body custom-card">
        <div className="uk-card-header">
          <div className="uk-grid-small uk-flex-middle" data-uk-grid>
            <div className="uk-width-expand">
              <h4 className="uk-card-title uk-margin-remove-bottom uk-text-uppercase uk-text-center">Manage Content categories</h4>
            </div>
          </div>
        </div>
        <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
          <div>
            <div className="uk-card uk-card-default uk-card-body">Item</div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">Item</div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">Item</div>
          </div>
        </div>
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
                  <td >{item.name}</td>
                  <td className='uk-text-capitalize'>
                    <span className={(item.display === 'hidden' ? 'red' : 'green') + '-circle'}></span>
                    {item.display}
                  </td>
                  <td>

                  </td>
                  <td>
                    <Link href={'/edit/' + item.id} data-uk-icon="icon: pencil"></Link>
                  </td>
                  <td>
                    <Link href={'/delete/' + item.id} data-uk-icon="icon: trash"></Link>
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
