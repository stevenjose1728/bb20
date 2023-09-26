import React from 'react';
import Link from 'next/link';
import SidebarData from '@/data/SidebarData.json'

const Sidebar: React.FC = () => {
  const { data } = SidebarData
  return (
    <aside className="uk-width-1-4@m uk-visible@m">
      <ul data-uk-accordion>
        {
          data.map((element, i) => {
            return (
              <li key={element.label} className={i === 1 ? 'uk-open' : ''}>
                <a className="uk-accordion-title accordion-title-sidebar" href="#">
                  {element.label}
                </a>
                <div className="uk-accordion-content accordion-content-sidebar">
                  <ul className='uk-list'>
                    {
                      element.items.map(item => {
                        return (
                          <li key={item.title}>
                            <Link href={item.href} className='uk-link-heading'>
                              {item.title}
                            </Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
};
export default Sidebar;
