import { fireEvent, render } from '@testing-library/react';

import Table, { ITableColumn, SortDirection } from './table';

interface IStateData {
  name: ISortableDataCell | unknown;
  orderAdmitted: ISortableDataCell | unknown;
  dateOfVote: ISortableDataCell | unknown;
  dateAdmitted: ISortableDataCell | unknown;
  percentVoters: ISortableDataCell | unknown;
  votesCast: ISortableDataCell | unknown;
  estimatedPopulation: ISortableDataCell | unknown;
}

interface ISortableDataCell {
  value: unknown;
  sortValue: unknown;
}

describe('Table', () => {
  const columns: ITableColumn[] = [
    { id: 'name', name: 'Name' },
    { id: 'orderAdmitted', name: 'Order admitted to union' },
    { id: 'dateOfVote', name: 'Date of ratification vote' },
    { id: 'dateAdmitted', name: 'Date admitted to union' },
    { id: 'percentVoters', name: 'Percent of voters in favor of ratification' },
    { id: 'votesCast', name: 'Votes cast in favor of ratification' },
    {
      id: 'estimatedPopulation',
      name: 'Estimated population at time of admission',
    },
  ];

  const basicData: IStateData[] = [
    {
      name: 'Hawaii',
      orderAdmitted: '50th',
      dateOfVote: 'Apr. 24, 1956',
      dateAdmitted: 'Aug. 21, 1959',
      percentVoters: '94.3%',
      votesCast: '132,773',
      estimatedPopulation: '632,772',
    },
    {
      name: 'Alaska',
      orderAdmitted: '49th',
      dateOfVote: 'Jun. 27, 1959',
      dateAdmitted: 'Jan. 3, 1959',
      percentVoters: '68.1%',
      votesCast: '17,477',
      estimatedPopulation: '226,167',
    },
    {
      name: 'Arizona',
      orderAdmitted: '48th',
      dateOfVote: 'Feb. 9, 1911',
      dateAdmitted: 'Feb. 14, 1912',
      percentVoters: '78.7%',
      votesCast: '12,187',
      estimatedPopulation: '204,354',
    },
  ];

  const sortableData: IStateData[] = [
    {
      name: { value: 'Hawaii', sortValue: 'Hawaii' },
      orderAdmitted: { value: '50th', sortValue: '50' },
      dateOfVote: { value: 'Apr. 24, 1956', sortValue: '331844400' },
      dateAdmitted: { value: 'Aug. 21, 1959', sortValue: '327092400' },
      percentVoters: { value: '94.3%', sortValue: '0.943' },
      votesCast: { value: '132,773', sortValue: '132773' },
      estimatedPopulation: { value: '632,772', sortValue: '632772' },
    },
    {
      name: { value: 'Alaska', sortValue: 'Alaska' },
      orderAdmitted: { value: '49th', sortValue: '49' },
      dateOfVote: { value: 'Jun. 27, 1959', sortValue: '431978400' },
      dateAdmitted: { value: 'Jan. 3, 1959', sortValue: '346960800' },
      percentVoters: { value: '68.1%', sortValue: '0.681' },
      votesCast: { value: '17,477', sortValue: '17477' },
      estimatedPopulation: { value: '226,167', sortValue: '226167' },
    },
    {
      name: { value: 'Arizona', sortValue: 'Arizona' },
      orderAdmitted: { value: '48th', sortValue: '48' },
      dateOfVote: { value: 'Feb. 9, 1911', sortValue: '1858528800' },
      dateAdmitted: { value: 'Feb. 14, 1912', sortValue: '1826560800' },
      percentVoters: { value: '78.7%', sortValue: '0.787' },
      votesCast: { value: '12,187', sortValue: '12187' },
      estimatedPopulation: { value: '204,354', sortValue: '204354' },
    },
  ];

  it('should render a basic table successfully', () => {
    const { baseElement } = render(
      <Table id="table1" columns={columns} data={basicData} />
    );
    const tables = baseElement.querySelectorAll('#table1');
    expect(tables[0]).toBeTruthy();
  });

  it('should render a basic table with caption successfully', () => {
    const { baseElement } = render(
      <Table id="table1" columns={columns} data={basicData} caption="Table 1" />
    );
    const caption = baseElement.querySelector('caption');
    expect(caption).toBeTruthy();
  });

  it('should render a default sortable table successfully', () => {
    const { baseElement } = render(
      <Table
        id="table1"
        columns={columns}
        data={sortableData}
        sortable={true}
        sortIndex={0}
      />
    );
    const th = baseElement.querySelectorAll('th');
    expect(th[0].getAttribute('aria-sort')).not.toBeNull();
  });

  it('should render a descending sortable table successfully', () => {
    const { baseElement } = render(
      <Table
        id="table1"
        columns={columns}
        data={sortableData}
        sortable={true}
        sortIndex={0}
        sortDir={SortDirection.Descending}
      />
    );
    const th = baseElement.querySelectorAll('th');
    expect(th[0].getAttribute('aria-sort')).not.toBeNull();
  });

  describe('sorted table', () => {
    it('should match data before sorting', () => {
      const { baseElement } = render(
        <Table
          id="table1"
          columns={columns}
          data={sortableData}
          sortable={true}
          sortIndex={-1}
          sortDir={SortDirection.Descending}
        />
      );

      expect(baseElement.querySelectorAll('th[aria-sort]')).toHaveLength(0);

      const headings = baseElement.querySelectorAll('th');
      for (
        let headingIndex = 0;
        headingIndex < headings.length;
        headingIndex++
      ) {
        verifySortedDataColumn(baseElement, headingIndex, sortableData);
      }
    });

    const testMatrix = columns.reduce<
      {
        id: string;
        name: string;
        columnIndex: number;
        sortDir: SortDirection;
      }[]
    >(
      (acc, column, columnIndex) =>
        acc.concat([
          {
            ...column,
            columnIndex: columnIndex,
            sortDir: SortDirection.Ascending,
          },
          {
            ...column,
            columnIndex: columnIndex,
            sortDir: SortDirection.Descending,
          },
        ]),
      []
    );
    it.each(testMatrix)(
      'should sort by $name $sortDir',
      ({ id, name, columnIndex, sortDir }) => {
        const { baseElement } = render(
          <Table
            id="table1"
            columns={columns}
            data={sortableData}
            sortable={true}
            sortIndex={-1}
            sortDir={SortDirection.Descending}
          />
        );
        const th = baseElement.querySelector(`th[id="${id}"]`);
        const thButton = th?.querySelector('button') as Element;
        fireEvent.click(thButton);

        if (sortDir === SortDirection.Descending) {
          fireEvent.click(thButton);
        }

        const sortedData = sortData(
          baseElement,
          columnIndex,
          sortDir,
          sortableData
        );
        verifySortedDataColumn(baseElement, columnIndex, sortedData);
      }
    );
  });
});

function sortData(
  baseElement: Element,
  sortIndex: number,
  sortDir: SortDirection,
  sortableData: IStateData[]
) {
  const th = baseElement.querySelector(`th:nth-child(${sortIndex + 1})`);
  const columnKey = th?.id as keyof IStateData;

  let sortedData = sortableData.sort((a, b) => {
    let valueA: string | number = (a[columnKey] as ISortableDataCell)
      .sortValue as string | number;
    let valueB: string | number = (b[columnKey] as ISortableDataCell)
      .sortValue as string | number;

    if (!isNaN(valueA as number)) {
      valueA = Number(valueA);
    }
    if (!isNaN(valueB as number)) {
      valueB = Number(valueB);
    }

    if (valueA > valueB) {
      return 1;
    } else if (valueA < valueB) {
      return -1;
    } else {
      return 0;
    }
  });

  if (sortDir === SortDirection.Descending) {
    sortedData = sortedData.reverse();
  }

  return sortedData;
}

function verifySortedDataColumn(
  baseElement: Element,
  sortIndex: number,
  sortedData: IStateData[]
) {
  const th = baseElement.querySelector(`th:nth-child(${sortIndex + 1})`);
  const columnKey = th?.id as keyof IStateData;

  for (let rowIndex = 0; rowIndex < sortedData.length; rowIndex++) {
    const sortedCellValue = (
      sortedData[rowIndex][columnKey] as ISortableDataCell
    ).sortValue;
    const td = baseElement.querySelector(
      `tbody tr:nth-child(${rowIndex + 1}) td:nth-child(${sortIndex + 1})`
    );
    expect(td).not.toBeNull();
    const sortedCellValueFromDom = td?.getAttribute('data-sort-value');

    expect(sortedCellValueFromDom).toEqual(sortedCellValue);
  }
}
