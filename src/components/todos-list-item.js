import React from 'react';

export default class TodosListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderTaskSection() {
        const { task, isCompleted } = this.props;

        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" className="mt2" defaultValue={task} ref="editInput" />
                    </form>
                </td>
            );
        }

        return (
            <td style={taskStyle}
                onClick={this.props.toggleTask.bind(this, task)}
            >
                {task}
            </td>
        );
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button className="btn btn-info btn-sm mg mt2" onClick={this.onSaveClick.bind(this)}>儲存</button>
                    <button className="btn btn-danger btn-sm mg mt2" onClick={this.onCancelClick.bind(this)}>取消</button>
                </td>
            );
        }

        return (
            <td>
                <button className="btn btn-warning btn-sm mg mt2" onClick={this.onEditClick.bind(this)}>修改</button>
                <button className="btn btn-danger btn-sm mg mt2" onClick={this.props.deleteTask.bind(this, this.props.task)}>刪除</button>
            </td>
        );
    }

    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </tr>
        );
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }
}
