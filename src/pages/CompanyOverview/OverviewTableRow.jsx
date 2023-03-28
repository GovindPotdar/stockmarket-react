import React from 'react'

function OverviewTableRow(props) {
  return (
    <tr>
      <td><b>{props.keyValue}</b></td>
      <td>{props.value}</td>
    </tr>
  )
}

export default OverviewTableRow
