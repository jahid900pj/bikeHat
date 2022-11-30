import React from 'react';

const Blogs = () => {
    return (
        <div className='max-w-[1340px] mx-auto'>
            <h3 className='text-2xl'>1 .  What are the different ways to manage a state in a React application?</h3>
            <p>Ans :The Four different Kinds of React State to Manage.
                1. Local state., 2. Global state., 3. Server state. , 4. URL state. </p>
            <br />
            <h3 className='text-2xl'>2 . How does prototypical inheritance work?</h3>
            <p>Ans : The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            <br />
            <h3 className='text-2xl'>3. What is a unit test? Why should we write unit tests?</h3>
            <p>Ans : The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
            </p>
            <br />
            <h3 className='text-2xl'>4 . React vs. Angular vs. Vue?</h3>
            <p>Ans : Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
            </p>

        </div>
    );
};

export default Blogs;