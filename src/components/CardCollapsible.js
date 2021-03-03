import React from 'react'
import Collapsible from 'react-collapsible'
import ArrowSortedUp from '../assets/svg/arrow-sorted-up.svg'
import '../css/card-collapsible.css'

const CollapsingTrigger = ({ title, className = 'bg-gray-400', }) => {
  return (
    <div className={`flex px-2 py-2 cursor-pointer ${className}`}>
      <div className='arrow-up' >
        <ArrowSortedUp />
      </div>
      <p className='collapsing__text pl-1'>{title || 'Title'}</p>
    </div>
  )
}

export const CardCollapsible = ({ open = false, sectionTitle, children, className = '', triggerClassname = '',}) => {
  return (
    <Collapsible
      trigger={<CollapsingTrigger title={sectionTitle} className={triggerClassname} />}
      open={open}
      className={`collapsing ${className}`}
      triggerClassName='collapsing__trigger'
      openedClassName='collapsing collapsing--is-open'
      triggerOpenedClassName='collapsing__trigger collapsing__trigger--is-open'
      transitionTime={70}
      contentOuterClassName='collapsing__outer'
      contentInnerClassName='collapsing__inner'
    >
      {children}
    </Collapsible>
  )
}