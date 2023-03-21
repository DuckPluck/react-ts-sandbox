import React from 'react';

interface OpenWeatherInputFormProps {
    getWeather: (cityName: string) => void;
}

export class OpenWeatherInputForm extends React.Component <OpenWeatherInputFormProps, { search: string }> {
    constructor(props: OpenWeatherInputFormProps) {
        super(props);
        this.state = {search: 'Moscow'}
    }

    getWeather = this.props.getWeather;

    handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const target = e.target as HTMLInputElement;
            this.setState({search: target.value});
            this.getWeather(this.state.search);
        }
    }

    render() {
        return (
            <>
                <div>
                    <input
                        type="search"
                        value={this.state.search}
                        onChange={e => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey} />
                </div>
            </>
        );
    }
}