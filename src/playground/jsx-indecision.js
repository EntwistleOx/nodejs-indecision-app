const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()
    let option = e.target.elements.option.value
    if(option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderApp()
    }
}

const onRemoveAll = () => {
    app.options = []
    renderApp()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const appRoot = document.getElementById('app')

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {app.options.map((text) => <li key={text}>{text}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderApp()