import { of } from 'rxjs'

import { ApiService } from './api.service';

describe('ApiService', () => {

  it('get current time Europe/Amsterdam', () => {
    let spyHttp = jasmine.createSpyObj('HttpClient', { get: of({timeZone: "Europe/Amsterdam"}) })
    let service = new ApiService(spyHttp);
    service.currentTime({timeZone: "Europe/Amsterdam"}).subscribe(
      response => {
        expect(response.timeZone).toBe("Europe/Amsterdam")
      }
    )
  });

});
