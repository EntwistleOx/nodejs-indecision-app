console.log('Works')

// const appRoot = document.getElementById('app')

// const msg = {
//     button: 'Show details',
//     text: 'Hey. These are some details you can now see!'
// }

// const onAction = () => {
//     if(msg.text === ''){
//         msg.text = 'Hey. These are some details you can now see!'
//         msg.button = 'Show details'
//     }else {
//         msg.text = ''
//         msg.button = 'Hide details'
//     }
//     renderApp()
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onAction}>{msg.button}</button>
//             <p>{msg.text}</p>
//         </div>
//     )
//     ReactDOM.render(template, appRoot)
// }

// renderApp()

// let visibility = false 
// const toggleVisibility = () => {
//     visibility = !visibility
//     render()
// }

// const render = () => {
//     const jsx = (
//         <div>
//         <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility && (<p>Hey. These are some details you can now see!</p>)}
//         </div>
//     )
//     ReactDOM.render(jsx, document.getElementById('app'))
// }

// render()

class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }

    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (<p>Hey. These are some details you can now see!</p>)}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))