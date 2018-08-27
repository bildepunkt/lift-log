export default class Api {
  public static GET (path:string):any {
    return JSON.parse(localStorage.getItem(path));
  }

  public static PUT (path:string, data:any):void {
    return localStorage.setItem(path, JSON.stringify(data));
  }

  public static DELETE (path:string):void {
    return localStorage.removeItem(path);
  }
}
