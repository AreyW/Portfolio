function buildLinks(linkArray){
    var i = 0;
    var links = '';

    while(i < linkArray.length){
        links += `
            <li>
                <a href='/${linkArray[i]}'>${linkArray[i]}</a>
            </li>
        `;

        i++;
    }

    return links;
}

export default function Navigation(state){
    return `
<div id="navigation">
    <ul class="container">
    ${buildLinks(state.link)}
        <li>
            <a href="/index.html">Home</a>
        </li>
        <li>
             <a href="/blog">Blog</a> 
        </li>
        <li>
            <a href="/projects/">Projects</a>
            <ul >
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </ul>   
        </li>
        <li>
             <a href="/contact/index.html">Contact</a>
         </li>
    </ul>
</div>
`;
}