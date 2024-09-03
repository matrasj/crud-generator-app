import {TranslateService} from "@ngx-translate/core";
import {ToastrService} from "ngx-toastr";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private translateService: TranslateService,
              private toastr: ToastrService) {
  }

  public success(translateKey: string): void {
    this.toastr.success(this.translateService.instant(translateKey));
  }

  public warning(translateKey: string): void {
    this.toastr.warning(this.translateService.instant(translateKey));
  }

  public error(translateKey: string): void {
    this.toastr.error(this.translateService.instant(translateKey));
  }
}
