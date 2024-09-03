import {ColumnDataType} from "../../enum/column-data-type";

export interface SaveColCommand {
  id: number;
  name: string;
  required: boolean;
  columnDataType: ColumnDataType;
  entityId: number;
  foreignKeyId: number;
}
