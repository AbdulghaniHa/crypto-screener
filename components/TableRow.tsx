import React, { FunctionComponent } from "react";

interface Props {
    token: string;
    percentage: string;
    timeframe: string;
    platform: string;
}

const TableRow: FunctionComponent<Props> = ({ token, percentage, timeframe, platform }) => {
    return <tr className="border-b-2">
      <td className="p-3 text-sm text-gray-700 text-center">{token}</td>
      <td className="p-3 text-sm text-gray-700 text-center">{percentage}</td>
      <td className="p-3 text-sm text-gray-700 text-center">{timeframe}</td>
      <td className="p-3 text-sm text-gray-700 text-center">{platform}</td>
    </tr>;
}

export default TableRow;
  
