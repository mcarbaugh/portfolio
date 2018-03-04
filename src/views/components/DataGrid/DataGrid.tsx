import * as React from 'react';
import DataGridCell from './DataGridCell';
import { DEFAULT_STATE, DEFAULT_COLUMN_WIDTH, DEFAULT_ROW_HEIGHT } from './constants';
import {
    AutoSizer,
    Dimensions,
    Grid,
    GridCellProps,
    ScrollParams,
} from 'react-virtualized';

export interface Props {
    id?: string;
    rowHeight?: number;
    columnWidth?: number;
}

export interface State {
    rowCount: number;
    columnCount: number;
}

export default class DataGrid extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this._handleScroll = this._handleScroll.bind(this);
        this.state = DEFAULT_STATE;
    }

    public render() {
        const {
            rowHeight,
            columnWidth,
        } = this.props;
        return (
            <AutoSizer>
                { (dimensions: Dimensions) =>
                    <Grid
                        height={dimensions.height}
                        width={dimensions.width}
                        rowCount={this.state.rowCount}
                        columnCount={this.state.columnCount}
                        rowHeight={rowHeight || DEFAULT_ROW_HEIGHT}
                        columnWidth={columnWidth || DEFAULT_COLUMN_WIDTH}
                        cellRenderer={this._cellRenderer}
                        onScroll={this._handleScroll}
                    />
                }
            </AutoSizer>
        );
    }

    private _cellRenderer(props: GridCellProps) {
        const content = `row ${props.rowIndex} - col ${props.columnIndex}`;
        return (
            <DataGridCell
                key={props.key}
                style={props.style}
                content={content}
            />
        );
    }

    private _handleScroll(params: ScrollParams) {
        const {
            scrollHeight,
            scrollTop,
            clientHeight,
            scrollWidth,
            scrollLeft,
            clientWidth,
        } = params;

        const rowCount = this.state.rowCount;
        const columnCount = this.state.columnCount;

        if (scrollHeight < scrollTop + clientHeight) {
            this.setState({
                rowCount: rowCount + 5,
            });
        }

        if (scrollWidth < scrollLeft + clientWidth) {
            this.setState({
                columnCount: columnCount + 2,
            });
        }
    }
}
