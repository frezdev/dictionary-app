export class LocalStorage {
  static get(key: string): null | any {
    const item = localStorage.getItem(key)
    if (item) return JSON.parse(item);
    return null;
  }

  static set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}