// Test away!
import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "@testing-library/react";

import Controls from "./Controls";

describe("<Controls />", () => {
    // 2. write this test
    it("matches snapshot", () => {
      const tree = renderer.create(<Controls />); // generates a DOM tree
  
      // snapshots are a JSON representation of the DOM tree
      expect(tree.toJSON()).toMatchSnapshot();
    });

    // it("displays a message when 'speak' button is clicked", () => {
    //     const tree = render(<Controls />);

    //     tree.getByText(/Unlocked/i)
    //     tree.getByText(/Locked/i)

    //   });
    it("should have close and lock by default", () =>{
        const { getByText } = render(<Controls />);

        expect(getByText(/close gate/i));
        expect(getByText(/lock gate/i));
    })
    it("close gate", ()=>{
        const { getByText, findAllByText } = render(<Controls />);       

        fireEvent.click(getByText(/close gate/i));
        expect(findAllByText(/lock gate/i));
        expect(findAllByText(/open gate/i))

    })
    it('lock gate', () => {
        const { getByText, findAllByText } = render(<Controls />);       
       
        fireEvent.click(getByText(/lock gate/i));
        expect(findAllByText(/unlock gate/i));
        expect(findAllByText(/open gate/i));

    });
    // it('open gate', () => {
    //     const { getByText, findAllByText } = render(<Controls />);    

    //     fireEvent.click(findAllByText(/open gate/i));
    //     expect(findAllByText(/close gate/i));
    //     expect(findAllByText(/lock gate/i));
         

    // });

    // it('unlock gate', () => {
    //     const { getByText, findAllByText } = render(<Controls />);    



    //     fireEvent.click(getByText(/unlock gate/i));
    //     expect(findAllByText(/lock gate/i));
    //     expect(findAllByText(/open gate/i))
 

    // });

});

