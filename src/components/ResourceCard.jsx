import React from 'react'

const ResourceCard = ({ resource }) => {
  const { title, icon_url, link, description, category,   } = resource;
  return (
    <article className="item" style={{ flex: '0 0 25%'}} key={resource.id}>
      <img src={icon_url} alt={title} className="shrink-0 w-11 aspect-square" />
      <div>
        <div className="item-title">{title}</div>
        <div className="item-subtitle">{category}</div>
      </div>
      <a href={link} className="item-link">{link}</a>
      <p className="item-description">{description}</p>
    </article>
  )
}

export default ResourceCard