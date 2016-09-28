import React from 'react';
import NavigationBar from './NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';
import infoBar from './infoBar';



class App extends React.Component {
    render() {
        return (
            <div>
                {/*<NavigationBar />*/}
                {/*<FlashMessagesList />*/}
                {/*<infoBar />*/}
                {this.props.children}
            </div>

        );
    }
}

export default App;