import React from 'react';

const Link = ({href, className, label}) => {
  const onClick = e => {
    if (e.metaKey || e.ctrlKey) return;

    e.preventDefault();
    window.history.pushState({}, '', href);
    
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }
  return (
    <a onClick={onClick} href={href} className={className}>
      {label}
    </a>
  )
}

export default Link;