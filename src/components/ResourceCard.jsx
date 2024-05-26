import React from 'react'

const ResourceCard = ({ resource }) => {
  const { title, icon_url, link, description, category,   } = resource;
  return (
    <article className="item" key={resource.id}>
      <div className="card-header">
        <img src={icon_url} alt={title}/>
        <div>
          <div className="item-title">{title}</div>
          <div className="item-subtitle">{category}</div>
        </div>
      </div>
      <a href={link} className="item-link">{link}</a>
      <p className="item-description">{description}</p>
    </article>
  )
}

export default ResourceCard