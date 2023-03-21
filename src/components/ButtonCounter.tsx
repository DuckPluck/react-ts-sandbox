import React, {FC, useState} from 'react';

interface ButtonCounterProps {
    setButtons: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ButtonCounterFunc: FC<ButtonCounterProps> = ({setButtons}) => {
    const [counter, setCounter] = useState(0);

    function handleClick() {
        setCounter(counter + 1);
        console.log(counter + 1, 'left button');
        setButtons(prevState => [...prevState, 'func']);
    }

    return (
        <div>
            <button className='btn-func' onClick={handleClick}>{counter}</button>
        </div>
    );
}


export class ButtonCounterClass extends React.Component <ButtonCounterProps, {counter: number}> {
    constructor(props: ButtonCounterProps) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
        console.log(this.state.counter + 1, 'right button');
        this.props.setButtons(prevState => [...prevState, 'class']);
    }

    render() {
        return (
            <div>
                <button className='btn-class' onClick={this.handleClick}>{this.state.counter}</button>
            </div>
        );
    }
}
