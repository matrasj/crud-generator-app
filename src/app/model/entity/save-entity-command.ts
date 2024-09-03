import {SaveColCommand} from "../col/save-col-command";

export interface SaveEntityCommand {
  id: number;
  entityName: string;
  icon: string | null;
  transitable: boolean;
  cols: SaveColCommand[];
}
