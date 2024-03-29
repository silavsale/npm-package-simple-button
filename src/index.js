import React from 'react';

const MyButton = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>;
};

export default MyButton;