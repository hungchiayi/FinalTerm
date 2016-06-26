import React from 'react';

export default class TodosListHeader extends React.Component {
    render() {
        return (
          <div>
            <thead>
                <tr>
                    <th>List</th>
                    <th>Action</th>
                </tr>
            </thead>
          </div>
        );
    }
}
