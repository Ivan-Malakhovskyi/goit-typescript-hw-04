import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { User } from "./App.types";

type Props = {
  user: User;
};

// type Props1 = {
//   name: string;
//   age: number;
// };

class Employee {
  // Заповніть модифікатори доступу
  constructor(
    public name: string,
    private department: string,
    protected salary: number
  ) {}

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
  // Реалізуйте конструктор та збільшіть salary на 10000
}

const manager = new Manager("Ivan", "Dev", 100);
console.log(manager);

const newMAnager = new Manager("Bob", "Adertysing", 6000);
console.log(newMAnager);

export { manager };

export const App: React.FC<Props> = ({ user }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{user.email}</p>
      </header>
    </div>
  );
};
