import { styled } from "@mui/material";
import { ReactNode } from "react";

const T = styled("table")`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  width: 100%;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  border: 1px solid lightgray;
  border-collapse: seperate;
  border-spacing: 0;
`;

const Th = styled("th")<{ center?: boolean }>`
  font-weight: bold;
  text-align: start;
  position: relative;
  padding: ${({ theme }) => theme.spacing(1)};
  text-align: ${({ center }) => center && "center"};
  :not(:last-of-type)::after {
    content: "";
    right: 0;
    top: 10px;
    bottom: 10px;
    border-right: 1px solid lightgray;
    position: absolute;
  }
`;

const Td = styled("td")<{ center?: boolean }>`
  font-weight: 300;
  padding: ${({ theme }) => theme.spacing(1)};
  border-top: 1px solid lightgray;
  text-align: ${({ center }) => center && "center"};
  :last-of-type {
    width: 100%;
  }
`;

const Tr = styled("tr")`
  border-top: 1px solid lightgray;
  :hover {
    background-color: lightgray;
  }
`;

type Column<Data> = {
  header: ReactNode;
  center?: boolean;
  renderCell: (row: Data) => ReactNode;
};

export default function Table<Data>({
  rows,
  columns,
}: {
  rows: Data[];
  columns: Column<Data>[];
}) {
  return (
    <T>
      <thead>
        <tr>
          {columns.map(({ header, center }, index) => (
            <Th key={index} center={center}>
              {header}
            </Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <Tr key={index}>
            {columns.map(({ center, renderCell }, index) => (
              <Td key={index} center={center}>
                {renderCell(row)}
              </Td>
            ))}
          </Tr>
        ))}
      </tbody>
    </T>
  );
}
