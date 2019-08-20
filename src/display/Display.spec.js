// Test away!
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "@testing-library/react";

import Display from "./Display";

describe("<Display />", () => {
    // 2. write this test
    it("matches snapshot", () => {
      const tree = renderer.create(<Display />); // generates a DOM tree
  
      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });
  
    // Implementation details ->
    //   - what props.speak is doing...
    //   - if props.speak is invoked...
  
    // What we _want_ to test:
    //    - When our user clicks that button... what happens in the app?
    // it("displays a message when 'speak' button is clicked", () => {

    //   let locked = false;
    //   let closed=false;
  
    //   const { findAllByText } = render(<Display locked={locked} closed={closed} />);
  
    //   fireEvent.click(findAllByText(/Locked/i));
    //   fireEvent.click(findAllByText(/Unlocked/i));
    //   fireEvent.click(findAllByText(/Closed/i));
    //   fireEvent.click(findAllByText(/Open/i));
  

    // });

    it('button should lock when clicked', () => {
        const { getByText, findAllByText } = render(<Display />);

        // expect(getByText(/close gate/i));
        // expect(getByText(/lock gate/i));

        // fireEvent.click(getByText(/close gate/i));
        // expect(findAllByText(/lock gate/i));
        // expect(findAllByText(/open gate/i))

       
        // fireEvent.click(getByText(/lock gate/i));
        // expect(findAllByText(/unlock gate/i));
        // expect(findAllByText(/open gate/i));

        // fireEvent.click(getByText(/unlock gate/i));
        // expect(findAllByText(/lock gate/i));
        // expect(findAllByText(/open gate/i))

        // fireEvent.click(getByText(/open gate/i));
        // expect(findAllByText(/close gate/i));
        // expect(findAllByText(/lock gate/i));
         


    });
  });
  