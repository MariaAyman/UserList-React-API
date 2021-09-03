import { useState, useEffect} from 'react'
import axios from "axios"
import UserTable from './UserTable'
import Loading from './Loading'

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const UserList = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [listOfUsers, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = () => {
            axios.get(BASE_URL)
                .then(
                    response => {
                        console.log('Response: ', response);
                        setIsLoaded(true);
                        setUsers(response.data);
                    },
                    error => {
                        console.log('Error: ', error);
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        }
        getUsers();
    }, []) 

    if(error){
        return <h1 className="m-3 text-danger" style={{textAlign: 'center'}}>Error! {error.message}</h1>;
    } else if (!isLoaded){
        return (
            <Loading />
        );
    } else {
        return (
            <div className="container">
                <h1 className="m-3 text-info" style={{textAlign: 'center'}}>User List</h1>
                <p className="m-3" style={{textAlign: 'center'}}>from jsonplaceholder.typicode.com/users</p>
                <UserTable users={listOfUsers}/>
            </div>
        );
    }

}

export default UserList;