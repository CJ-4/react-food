import React from "react";
import Sidebar from "react-sidebar";

class Sidebar extends React.Component {
    constructor (props)  {
        super  (props);
        this.state = {
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open});
    }
    render(){
        return (
            <Sidebar
            Sidebar={<b>Sidebar content</b>}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: {background:"white"}}}
            >
                <button onClick={() => this.onSetSidebarOpen(true)}>
                    Open sidebar
                </button>
            </Sidebar>
        );
    }
}

export default Sidebar;