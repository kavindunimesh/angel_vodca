import { ITableCellProps } from '../../../types/components/IAtoms';

export const TableCell = ({ children, className = ''}:ITableCellProps) => (
  <td className={className}>{children}</td>
);
export const TableHeaderCell = ({ children, className = '' }:ITableCellProps) => (
  <th className={className}>{children}</th>
);