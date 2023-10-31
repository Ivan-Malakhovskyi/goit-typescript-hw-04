export { App } from "../App";

//* Давайте трохи розберемося у цих типах для children.

//React.ReactNode: і майже всі можливі типи, які можуть бути відрендерені в компоненті React
//string, number, null, undefined, boolean, ReactElement, ReactFragment, ReactPortal

//!React.ReactElement: якщо ви використовуєте ReactElement у типах для children,
//! ви зможете приймати тільки елементи React.

// Это работает:
// <Panel>
//   <div>Hello, world!</div>
// </Panel>

// Это не работает, потому что "Hello, world!" - это строка, а не элемент
// <Panel>Hello, world!</Panel>

//? =============================Типізація хуків==================

//* useState

// function name() {
//     const [counter,setCounter] = useState<string>('')
// }

//*useImperativeHandle();

//*Не потрібно типізувати такі хуки як

//? useEffect,
//? useMemo,
//? useCallback,

// досить прямолінійні і зазвичай вимагають додаткової роботи.

//! ========Першочерговість типізування компонентів =========

//* 1. Типізація state

//* 2. Типізація пропсів
