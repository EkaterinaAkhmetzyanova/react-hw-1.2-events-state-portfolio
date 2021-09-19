import React from 'react';
import PropTypes from 'prop-types';

export default function Toolbar({filters, selected, onSelectFilter}) {
    return (
        <div className='toolbar'>
            {filters.map((element) => {
                return (
                    <div 
                    key={element} 
                    className={element === selected ? 'tollbar-btn selected' :'toolbar-btn'}
                    onClick={() => onSelectFilter(element)}
                    >{element}</div>
                );
            })}
        </div>
    )
}

Toolbar.propTypes = {
    filters: PropTypes.array,
    selected: PropTypes.string,
    onSelectFilter: PropTypes.func,
}

Toolbar.defaultProps = {
    filters: ['All'],
    selected: 'All',
    onSelectFilter: () => {},
  };