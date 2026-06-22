project_list = {};


function createProject() {
    const projectName = document.getElementById('project_name_input').value;
    if (projectName.trim() === '') {
        alert('Please enter a project name.');
        return;
    }
    if (project_list[projectName]) {
        alert('Project already exists. Please choose a different name.');
        return;
    }
    project_list[projectName] = {
        tasks: []
    };
    updateProjectList();
    document.getElementById('project_name_input').value = '';
}

function updateProjectList() {
    const projectListDiv = document.getElementById('project_list');
    projectListDiv.innerHTML = '';
    for (const projectName in project_list) {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = projectName;
        projectListDiv.appendChild(projectDiv);
    }
}



