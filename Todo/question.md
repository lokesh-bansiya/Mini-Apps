# Redux hooks
 - create a login/register page
 - use the api mocker (http://github.com/masai-school/api-mocker) -> this is just the github repo, read how to use it
 - https://github.com/masai-school/api-mocker/wiki ( WIKI, Please )
 - https://github.com/masai-school/api-mocker/wiki/Deployed-Link ( link )
 - use redux with hooks to make all the requests
 - use mock server and create the following
 - all api calls should be done with thunks
 - create a sidebar with user profile details which you retrieve from the api mocker on the left side
 - user should be able to logout from the sidebar
 - create a new task page
 - create an edit a task page ( refer create task page, pre-fill information )
 - create a summary page
 - When creating a task, a task can have tags associated with it. It can be [ personal, official, others ], and can add multiple tags
 - A task has a title, description, and a list of subtask with it, a subtask can have its own status
 - A task should be given a category/task_status [ Todo, In Progress, Done ]
 - users can toggle the status of each subtask on the main page, a user can edit the task by clicking on an edit button on the task

 - use react-router-dom hooks to get everything working

# Note:

 - useDispatch, useSelector, useParams, useNavigate etc to make your application
BONUS:

 - use react-spring to make an animation of your choice keyframes animation transform - mdn