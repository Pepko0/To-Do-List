{

    const welcome = () => {
        console.log("Hello!!");
    };

    let tasks = ([
        { content: "LALA", done: true },
    ]);


    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent },
        ];
        
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

    const renderTask = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li 
                    class="task__item">
                    <button class="form__buttonDone form__buttonDone--click js-done"> 
                    ${task.done ? "✔" : ""}
                    </button>
                    <span class="form__text ${task.done ? " task__decoration " : ""}">${task.content} </span>
                    <button class="js-remove form__buttonRemove">🗑</button>
                </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const renderButtons = () => {
        const buttonRender = document.querySelector(".js-buttons");

        if(tasks.length === 0) {
            buttonRender.innerHTML = "";   
        } else {
            buttonRender.innerHTML = `
            <button class="buttons__header">
            Ukryj ukończone
            </button>
            <button class="buttons__header">
            Ukończ wszystkie
            </button>
            `;
        };
           

    
        
        console.log(tasks)

    
    };

    const bindButtonsEvents = () => {};

    const render = () => {
        renderTask();
        renderButtons();


        bindEvents();
        bindButtonsEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskTekst =  document.querySelector(".js-newTask");
        const newTaskContent = newTaskTekst.value.trim();
        
        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskTekst.value = "";
        }

        newTaskTekst.focus();
    };

    const init = () => {
        welcome();
        render();
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

    };
    init();
    

};
