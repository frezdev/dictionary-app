export class LocalStorage {
  static get(key: string): null | any {
    const item = window.localStorage.getItem(key)
    if (item) return JSON.parse(item);
    return null;
  }

  static set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}