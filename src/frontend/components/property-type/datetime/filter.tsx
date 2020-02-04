import React from 'react'

import * as BackendFilter from '../../../../backend/utils/filter'
import { FilterPropertyProps } from '../base-property-props'
import { FormGroup, Label, DatePicker } from '../../design-system'

const { PARAM_SEPARATOR } = BackendFilter


const Filter: React.FC<FilterPropertyProps> = (props) => {
  const { property, filter, onChange } = props

  const fromKey = `${property.name}${PARAM_SEPARATOR}from`
  const toKey = `${property.name}${PARAM_SEPARATOR}to`
  const fromValue = filter[fromKey]
  const toValue = filter[toKey]

  return (
    <React.Fragment>
      <FormGroup>
        <Label>{property.label}</Label>
        <Label>- From: </Label>
        <DatePicker
          variant="filter"
          value={fromValue}
          onChange={(data: string): void => onChange(fromKey, data)}
        />
        <Label mt="default">- To: </Label>
        <DatePicker
          variant="filter"
          value={toValue}
          onChange={(data: string): void => onChange(toKey, data)}
        />
      </FormGroup>
    </React.Fragment>
  )
}

export default Filter
