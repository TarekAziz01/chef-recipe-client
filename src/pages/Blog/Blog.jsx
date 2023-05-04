/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
    return (
      <div>
        <div className="py-3">
          <h5>
            Tell us the differences between uncontrolled and controlled
            components.
          </h5>
          <p>
            Ans:The difference between controlled and uncontrolled components in
            React lies in how they manage input state. Controlled components
            manage input state in React, while uncontrolled components leave
            input state to the browser. Controlled components provide more
            control and flexibility for form inputs, while uncontrolled
            components can be simpler to implement in certain situations.
          </p>
        </div>
        <div className="py-3">
          <h5>How to validate React props using PropTypes</h5>
          <p>
            Ans:To validate React props using PropTypes, you need to install the
            prop-types package, import it in your component, and define the prop
            types using PropTypes. You can define the type, shape, and
            requirement of each prop using the propTypes object. This will help
            catch errors early in development and make your code more robust and
            maintainable.
          </p>
        </div>
        <div className="py-3">
          <h5>Tell us the difference between nodejs and express js.</h5>
          <p>
            Ans:Node.js is a server-side runtime environment that allows
            developers to run JavaScript code outside of a web browser.
            Express.js, on the other hand, is a web application framework for
            Node.js that provides a set of tools and utilities for building web
            applications, including handling HTTP requests, defining routes, and
            managing middleware. In summary, Node.js is a runtime environment,
            while Express.js is a framework that runs on top of Node.js.
          </p>
        </div>
        <div className="py-3">
          <h5>What is a custom hook, and why will you create a custom hook?</h5>
          <p>
            Ans:A custom hook is a JavaScript function that uses one or more
            React hooks and encapsulates complex or repetitive logic that can be
            reused across multiple components. Custom hooks enable developers to
            abstract away common logic and make their code more reusable,
            modular, and easier to maintain. Custom hooks can also help reduce
            code duplication and improve code readability, making it easier to
            reason about and debug.
          </p>
        </div>
      </div>
    );
};

export default Blog;