import React from "react";
import { render, fireEvent, waitForElement } from '@testing-library/react';
import ContactForm from './ContactForm.js';



//fails because originally an ID was not set on the input forms to correspond with labels. 
//changed and added ID's so this now passes
test("check if inputs are allowed", () => {
    const {getByLabelText, getByText, getByTestId} = render(<ContactForm/>);

    //querying for all the input nodes
    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    //use the change event to add text to each input
    fireEvent.change(firstNameInput, {target: {value: "First"}});
    fireEvent.change(lastNameInput, {target: {value: "Last"}});
    fireEvent.change(emailInput, {target: {value: "Email@email.com"}});
    fireEvent.change(messageInput, {target: {value: "Test Message"}});

    expect(firstNameInput.value).toBe("First");
    expect(lastNameInput.value).toBe("Last");
    expect(emailInput.value).toBe("Email@email.com");
    expect(messageInput.value).toBe("Test Message");
}) 

test("check if inputs are submitted properly", async () => {
    const {getByLabelText, getByText, getByTestId} = render(<ContactForm/>);

    //querying for all the input nodes
    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    //use the change event to add text to each input
    fireEvent.change(firstNameInput, {target: {value: "Brandi"}});
    fireEvent.change(lastNameInput, {target: {value: "Jones"}});
    fireEvent.change(emailInput, {target: {value: "Email@email.com"}});
    fireEvent.change(messageInput, {target: {value: "Test Message"}});

    expect(firstNameInput.value).toBe("Brandi");
    expect(lastNameInput.value).toBe("Jones");
    expect(emailInput.value).toBe("Email@email.com");
    expect(messageInput.value).toBe("Test Message");

    //click button
    fireEvent.click(getByTestId(/submit/i));

    await waitForElement(() => {
        
    })

}) 