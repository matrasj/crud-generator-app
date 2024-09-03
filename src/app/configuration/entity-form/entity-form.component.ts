import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ColumnDataType} from "../../enum/column-data-type";
import {EntityService} from "../../service/entity/entity.service";
import {EntityQuery} from "../../model/entity/entity-query";
import {finalize} from "rxjs";
import {AlertService} from "../../service/alert/alert.service";
import {SaveEntityCommand} from "../../model/entity/save-entity-command";
import {SaveColCommand} from "../../model/col/save-col-command";
import {Router} from "@angular/router";
import {RouteManager} from "../../infrastructure/route-manager";

interface ColFormGroup {
  nameControl: FormControl,
  columnDataTypeControl: FormControl,
  foreignKeyControl: FormControl,
  required: FormControl
}

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.scss']
})
export class EntityFormComponent implements OnInit {
  public readonly ColumnDataType = ColumnDataType;
  public readonly columnDataTypes: string[] = Object.keys(ColumnDataType);
  public entityNameControl: FormControl = new FormControl(null, [Validators.required]);
  public cols: ColFormGroup[] = [];
  public isLoading: boolean = false;
  public entities: EntityQuery[] = [];
  constructor(private entityService: EntityService,
              private alertService: AlertService,
              private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.entityService.getAll()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
      next: (res) => this.entities = res,
      error: (err) => this.alertService.error('global.error_during_fetching_entities')
    });
  }

  public addColumn(): void {
    this.cols.push({
      nameControl: new FormControl(null, [Validators.required]),
      columnDataTypeControl: new FormControl(ColumnDataType.TEXT, Validators.required),
      foreignKeyControl: new FormControl(null),
      required: new FormControl(false)
    } as ColFormGroup)
  }

  public save(): void {
    this.isLoading = true;
    this.entityService.save(this.saveEntityCommand)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: (res) => {
          this.alertService.success('global.successfully_created_entity');
          this.router.navigate(RouteManager.getConfigurationEntitiesTable());
        },
        error: (err) => this.alertService.error('global.error_during_saving_entity')
      });
  }

  private get saveEntityCommand(): SaveEntityCommand {
    return {
      entityName: this.entityNameControl.value,
      icon: null,
      transitable: false,
      cols: this.saveColCommands
    } as SaveEntityCommand;
  }

  private get saveColCommands(): SaveColCommand[] {
    return this.cols.map(col => {
      return {
        name: col.nameControl.value,
        required: col.required.value,
        columnDataType: col.columnDataTypeControl.value,
        foreignKeyId: col.foreignKeyControl.value
      } as SaveColCommand;
    });
  }
}
