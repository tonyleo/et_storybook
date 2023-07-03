import React from 'react';
import PropTypes from 'prop-types';
import './ResponsiveTable.scss';

/**
 * <span className="status-badge workinprogress">Work In Progress</span>
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
  const breakpoint = () => {
    let currentBreakpoint;
    const breakpointMaxWidths = [
        {size: 'xs', max: 575},
        {size: 'sm', max: 767},
        {size: 'md', max: 991},
        {size: 'lg', max: 1199}
    ];
    currentBreakpoint = breakpointMaxWidths.filter(bp => bp.max >= window.innerWidth);
  
    if(currentBreakpoint.length){
        currentBreakpoint = currentBreakpoint[0].size;
    } else {
        currentBreakpoint = 'all';
    }
    return currentBreakpoint;
  }
  
  const toggleExpandedRow = (e) => {
    e.target.classList.toggle('fa-circle-plus');
    e.target.classList.toggle('fa-circle-minus');
    e.target.closest('tr').nextElementSibling.classList.toggle('expanded');
  }
  
  const collapseColumnContent = () => {
    // capture collapsible columns
    const breakpointSizes = ['xs','sm', 'md', 'lg', 'all'];
    let collapsingBreakpoints = [];
    const currBp = breakpoint();
    for(let i = breakpointSizes.length - 1; i >= 0; i--){
        if(breakpointSizes[i] !== currBp){
            collapsingBreakpoints.push(breakpointSizes[i]);
        } else {
            collapsingBreakpoints.push(breakpointSizes[i]);
            break;
        }
    }
    let collapseString = '';
    collapsingBreakpoints.forEach(function(x){
        collapseString += "[data-collapse='"+x+"'],";
    });
    collapseString = collapseString.slice(0, -1);
    const collapsibleColumns = document.querySelectorAll(collapseString);
    
    // get reference info about each column
    let colRefs = [];
    collapsibleColumns.forEach(function(col){
        const column = {
            index: Array.prototype.indexOf.call(col.parentNode.children, col),
            name: col.textContent
        };
        colRefs.push(column);
        col.classList.add('d-none');
    });
  
    if(colRefs.length) {
        const table = document.getElementById("table");
        const collapsedIndexes = colRefs.map(col => col.index);
        for (let i = 1, row; row = table.rows[i]; i++) {
            if(!row.classList.contains('expanded-row')){
                row.classList.add('expandable-parent');
                // capture collapsible content
                let collapsedContent = [];
                collapsedIndexes.forEach(function(i){
                    collapsedContent.push(row.children[i].textContent);
                    // remove content from main row
                    row.children[i].classList.add('d-none');
                });
                // create expanded row
                const collapsedNames = colRefs.map(col => col.name);
                let newRollContent = "<td></td><td colspan='9'><div class='expanded-content'><table>";
                collapsedNames.forEach(function(r,i){
                    newRollContent += "<tr><td>";
                    newRollContent +=r;
                    newRollContent +="</td><td>";
                    newRollContent +=collapsedContent[i];
                    newRollContent +="</td></tr>";
                });
                newRollContent += "</table></td>";
                const tr = document.createElement("tr");
                tr.innerHTML = newRollContent;
                tr.classList.add('expanded-row');
                row.parentNode.insertBefore(tr, row.nextSibling);
            };
        };
    }
  }

  React.useEffect(() => {
    let completeFunction;
    function handleResize() {
      clearTimeout(completeFunction);
      completeFunction = setTimeout(collapseColumnContent, 200);
    }
    window.addEventListener('resize', handleResize);
  });


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
      <td><i className="expandable-trigger far fa-circle-plus" onClick={toggleExpandedRow}></i></td>
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
