import { IHCProject } from "./ihcproject";

/*
IHCManager is a singleton. use IHCManager.instance
*/
export class IHCManager {

  private _hass;
  private static theoneandonly;
  private controllers: IHCController[];

  private constructor(hass) {
    this._hass = hass;
    this.controllers = [];
  }

  static initialize(hass) {
    IHCManager.theoneandonly = new IHCManager(hass)
  }

  static get instance(): IHCManager {
    return IHCManager.theoneandonly;
  }

  get hass() {
    return this._hass;
  }

  get(controllerId) {
    if (!(controllerId in this.controllers)) {
      this.controllers[controllerId] = new IHCController(controllerId);
    }
    return this.controllers[controllerId];
  }

  async fetchWithAuth(input: RequestInfo, init: RequestInit = {}): Promise<Response> {
    let auth = this.hass.connection.options.auth;
    if (auth.expired) {
      await auth.refreshAccessToken();
    }
    if (!init.headers) {
      init.headers = {};
    }
    init.headers['authorization'] = `Bearer ${auth.accessToken}`;
    return await fetch(input, init);

  }
}

class IHCController {

  private controllerId: string;
  private project: IHCProject;
  private ihcmapping;

  constructor(controllerId: string) {

    this.controllerId = controllerId;
    this.project = null;
    this.ihcmapping = null;
  }

  async getProject(): Promise<IHCProject> {

    if (this.project == null) {
      let response = await IHCManager.instance.fetchWithAuth(`/api/ihcviewer/project/${this.controllerId}`);
      if (response.ok) {
        let projectdata = await response.text();
        let xmlparser = new DOMParser();
        let projectxml = xmlparser.parseFromString(projectdata, "text/xml");
        this.project = new IHCProject(projectxml);
      }
    }
    return this.project;
  }

  async getMapping() {

    if (this.ihcmapping == null) {
      let response = await IHCManager.instance.fetchWithAuth(`/api/ihcviewer/mapping/${this.controllerId}`);
      if (response.ok) {
        this.ihcmapping = await response.json();
      }
    }
    return this.ihcmapping;
  }


}