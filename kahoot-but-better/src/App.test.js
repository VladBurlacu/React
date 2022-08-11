import { render, screen } from '@testing-library/react';
import App from './App';
import React, {useState} from 'react';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});




function Header(props) {

  const [title, setTitle] = useState("Hello World!");

  return (
      <div className={"header"}>
        <h1>{{title}}</h1>
        <button onClick={setTitle("Hello State!")}>Click me to change state!</button>
      </div>
  );
}

export default Header
