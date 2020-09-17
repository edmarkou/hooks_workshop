import React, { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const titleClicked = index => {
        setActiveIndex(index);
    }

    return (
        <div className="ui styled accordion">
            {items.map((item, i) => {
                const isActive = i === activeIndex ? 'active' : '';
                return (
                    <React.Fragment key={i}>
                        <div className={`title ${isActive}`} onClick={() => titleClicked(i)}>
                            <i className="dropdown icon"/>
                            {item.title} 
                        </div>
                        <div className={`content ${isActive}`}>
                            <p>{item.content}</p>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    );
}

export default Accordion;