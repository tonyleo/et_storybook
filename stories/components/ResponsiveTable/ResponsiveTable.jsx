import React from 'react';
import PropTypes from 'prop-types';
import './ResponsiveTable.scss';

/**
 * **-- WORK IN PROGRESS --**
 * 
 * Controls for a table that gracefully handles responsive states.
 * 
 * Works by allowing table columns to be configured to collapse into a container below the row. Can be configured which columns collapse, and at what breakpoint they begin collapsing. If a row has collapsed content, an expand icon will appear on the left side of the row.
 * 
 * This could generate a poor UX if a table is sortable and is being sorted on a column that has been collapsed. If a column is sortable, it should be always visible for the best user experience.
 * 
 * **Configurable via markup**
 * 
 * Collapsing behavior is controlled through the `data-collapse` attribute on the column header `<th>`. Options follow Bootstrap breakpoints, including:
 * 
 * `xs`, `sm`, `md`, `lg`, and `all` which would force that column content to always be collapsed.
 * Content will be collapsed at all breakpoints smaller than it's setting. Ex, `data-collapse="sm"` will collapse that content at xs and sm breakpoints.
 * 
 */


export const ResponsiveTable = ({ ...props }) => {
  return (
    <table className="responsive-table" id="table">
  <thead>
    <tr>
      <th></th>
      <th>First Name</th>
      <th>Last Name</th>
      <th data-collapse="xs">Email</th>
      <th data-collapse="sm">Phone</th>
      <th data-collapse="all">Address</th>
      <th data-collapse="lg">City</th>
      <th data-collapse="md">State</th>
      <th data-collapse="all">Zip Code</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><i className="expandable-trigger far fa-circle-plus"></i></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
      <td className="actions">
        <i className="row-edit far fa-pen-to-square"></i> 
        <i className="row-delete far fa-trash"></i>
      </td>
	</tr>
  </tbody>
</table>
  )
};

ResponsiveTable.propTypes = {
};

ResponsiveTable.defaultProps = {
};
