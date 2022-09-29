// create new task
POST /add_new_task 
{
    "task_id"           : 1,
    "task_title"        : "Title 1",
    "task_description"  : "Description 1",
    "completed"         : false
}

// get all task
GET /get_all_task 
{
    [
        (
            {
                "task_id"           : 1,
                "task_title"        : "Title 1",
                "task_description"  : "Description 1",
                "completed"         : false
            },
            {
                "task_id"           : 2,
                "task_title"        : "Title 2",
                "task_description"  : "Description 2",
                "completed"         : true
            }    
        )
    ]
}

// get task by ID
GET /task/{ID}
{
    "task_id"           : 2,
    "task_title"        : "Title 2",
    "task_description"  : "Description 2",
    "completed"         : true
}

// get completed task
GET /get_completed_task?completed=true 
{
    "task_id"           : 2,
    "task_title"        : "Title 2",
    "task_description"  : "Description 2",
    "completed"         : true
}

//get task by paginate
GET /get_task?pagination=true&itemsPerPage=100&pages=2
[
    (
        {
            "task_id"           : 102,
            "task_title"        : "Title 102",
            "task_description"  : "Description 102",
            "completed"         : false
        },
        {
            "task_id"           : 103,
            "task_title"        : "Title 103",
            "task_description"  : "Description 103",
            "completed"         : true
        }    
    )
]

// update task by ID
PUT /update_task/{ID}
{
    "task_id"           : 1,
    "task_title"        : "Update Title 1",
    "task_description"  : "Update Description 1",
    "completed"         : true
}

// delete task by ID
DELETE /delete_task/{ID}
