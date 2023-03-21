import React, {FC, MouseEventHandler, useState} from 'react';

interface ButtonCounterProps {
    setButtons: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ButtonCounterFunc: FC<ButtonCounterProps> = ({setButtons}) => {
    const [counter, setCounter] = useState<number>(0);

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        setCounter(counter + 1);
        console.log(counter + 1, 'left button');
        setButtons(prevState => [...prevState, 'func']);
        const target = e.target as HTMLButtonElement
        target.className += ' btn-func-activated';
    }

    return (
        <div>
            <button className={'btn-func'} onClick={handleClick}>{counter}</button>
        </div>
    );
}


export class ButtonCounterClass extends React.Component <ButtonCounterProps, { counter: number }> {
    constructor(props: ButtonCounterProps) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        this.setState({
            counter: this.state.counter + 1,
        });
        console.log(this.state.counter + 1, 'right button');
        this.props.setButtons(prevState => [...prevState, 'class']);
        const target = e.target as HTMLButtonElement
        target.className += ' btn-class-activated';
    }

    render() {
        return (
            <div>
                <button className='btn-class' onClick={this.handleClick}>{this.state.counter}</button>
            </div>
        );
    }
}
