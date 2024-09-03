import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {EntityQuery} from "../../model/entity/entity-query";
import {Observable} from "rxjs";
import {SaveEntityCommand} from "../../model/entity/save-entity-command";

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  public resourceUrl: string = environment.API_URL + 'entity'

  constructor(private http: HttpClient) {}

  public getAll(): Observable<EntityQuery[]> {
    return this.http.get<EntityQuery[]>(this.resourceUrl);
  }

  public save(command: SaveEntityCommand): Observable<EntityQuery> {
    return this.http.post<EntityQuery>(this.resourceUrl, command);
  }
}
