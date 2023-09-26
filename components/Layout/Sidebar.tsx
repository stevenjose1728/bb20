import React from 'react';
import SidebarData from '@/data/SidebarData.json'

const Sidebar: React.FC = () => {
  const { data } = SidebarData
  return (
    <aside className="uk-width-1-4@m uk-visible@m">
      <ul className="uk-nav uk-nav-default">
        {
          data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>
                {item.title}
              </a>
            </li>
          ))
        }
      </ul>
    </aside>
  )
};
export default Sidebar;
