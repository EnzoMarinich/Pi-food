import React from 'react'

export const CheckboxField = ({label, value, formData, handleCheckbox}) => {
  return (
        <label htmlFor={value}>
            <input type="checkbox" checked={formData.diets.includes(value)} onChange={handleCheckbox} value={value} />
            {label}
        </label>
  )
}
