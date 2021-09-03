const UserTable = (props) => {
    return(
        <table className="table table-hover table-borderless w-75 mx-auto">
            <thead className="table-dark">
                <tr>
                    <th scope="col"></th>
                    <th scope='col'>UserName</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map((user) => {
                    return(
                        <tr key={user.id} className="bg-info">
                            <th scopr="row">{user.id}</th>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default UserTable;