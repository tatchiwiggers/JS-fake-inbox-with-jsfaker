/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-multiple-empty-lines */
const { faker } = require('@faker-js/faker');

const hasNewMessage = () => {
    // TODO: return true with a probability of 20%.
    const n = 0.2;
    return Math.random() <= n;
};
const sample = array => array[Math.floor(Math.random() * array.length)];
const newMessage = () => {
    // TODO: return a random message as an object with two keys, subject and sender
    // let message = {};
    const senders = faker.name.findName(); // Rowan Nikolaus
    const subjects = faker.hacker.phrase(); // Kassandra.Haley@erich.biz
    // const senders = ['GitHub', 'Le Wagon', 'Google', 'Apple'];
    // const subjects = ['You Got Mail!', 'Welcome!', 'You won\'t believe it...', 'Past due invoice'];
    return {
        sender: senders,
        subject: subjects
            // sender: sample(senders),
            // subject: sample(subjects)
    };
};
const appendMessageToDom = (message) => {
    // TODO: append the given message to the DOM (as a new row of `#inbox`)
    const list = document.querySelector('#inbox');
    list.insertAdjacentHTML('afterbegin', `<div class="row message unread"><div class="col-3">${message.sender}</div ><div class="col-9">${message.subject}</div></div >`);
};
const refresh = () => {
    // TODO: Implement the global refresh logic. If there is a new message,
    //       append it to the DOM. Update the unread counter in title as well.
    if (hasNewMessage()) {
        appendMessageToDom(newMessage());
        // console.log(newMessage());
        const allMessages = document.querySelectorAll('.unread');
        console.log(allMessages.length);
        const num = document.querySelector('#count');
        console.log(num);
        num.innerText = `(${allMessages.length})`;
    }
};
// Do not remove these lines:
document.addEventListener("DOMContentLoaded", () => {
    setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});
module.exports = { hasNewMessage, newMessage };