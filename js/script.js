{

    const welcome = () => {
        console.log("Hello!!");
    }; 
    
    const tasks = [
        {
            content: "Kupić rower",
            done: false,
        },
        {
            content: "Kupic mięso",
            done: true,
        },
    ];
    
    const render = () => {
        let htmlString = "";

        for (const tasks of task) {
            htmlString += `
                <li>
                    ${task.content}
                </li>
            `;
        }
        
        document.querySelector("js-tasks").innerHTML = htmlString;
    }


    const init = () => {
        welcome();
        render();
    };


    init();
};