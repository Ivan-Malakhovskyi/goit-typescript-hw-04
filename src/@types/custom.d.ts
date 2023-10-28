//*Без цього імпорти виду import logo from "./logo.svg"; викликатимуть помилку.

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}
