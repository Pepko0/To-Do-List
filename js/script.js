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

        for (const task of tasks) {
            htmlString += `
                <li ${task.done ? " class=\"task__decoration\"" : ""}>
                    ${task.content}
                </li>
            `;
        }
        
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        })
        render();
    }

const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();
    if (newTaskContent === "") {
        return;
    }

    addNewTask(newTaskContent);
}

    const init = () => {
        welcome();
        render();
    
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
}

    init();
}