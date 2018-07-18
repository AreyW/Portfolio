export default function Header(state){
    return`
    <div id="header">
        <div class="container">
            <h1>Areanna Savvy Coders Portfolio${state.title}</h1>
            <img  src="https://avatars1.githubusercontent.com/u/40213998?s=460&v=4My" alt="myface">
            <div id="greeting"> </div>
            <input type="text" />
        </div>
    </div>
    `;
}