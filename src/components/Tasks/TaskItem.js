// A single task - displayed in Bootstrap Card
const TaskItem = (props) => {
	return (
		<div className="card mb-3">
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
			</div>
		</div>
	);
};

export default TaskItem;
