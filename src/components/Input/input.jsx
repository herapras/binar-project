import {useState} from 'react';

function Input(){
    const [value, setValue] = useState('');

    function change(e){
        setValue(e.target.value);
    }
    return(
        <input
        type='text'
        onChange={change}>
        </input>
    )
}

export default Input;