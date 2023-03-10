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


    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        })
        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const removeButton = document.querySelectorAll(".js-remove");

        removeButton.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButton = document.querySelectorAll(".js-done");

        toggleDoneButton.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);

            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li ${task.done ? " class=\"task__decoration\"" : ""}><button class="js-done">zrobione</button>
                    ${task.content}<button class="js-remove">usuń</button>
                </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;
        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        if (newTaskContent === "") {
            return;
        };

        addNewTask(newTaskContent);
    };

    const init = () => {
        welcome();
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };
    init();
};