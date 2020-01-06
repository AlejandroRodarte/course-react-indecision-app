const appRoot = document.getElementById('app');

let toggle = false;

const onToggle = () => {
    toggle = !toggle;
    render();
};

const render = () => {

    const template = (
        <div>
            <h1>
                Visibility Toggle
            </h1>

            <button type="button"
                    onClick={ onToggle }>
                { toggle ? 'Hide details' : 'Show details' }
            </button>

            { toggle && <p> { 'This is some secret info dawg' } </p> }
        </div>
    );

    ReactDOM.render(template, appRoot);

};

render();
