import React from 'react';
import {followAC, setUsersAC, unfollowAC, UserType} from "../../Redux/users-reducer";
import styles from './Users.module.css'


type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void
}
const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://doggi-blog.ru/wp-content/uploads/2014/09/smeshnye-foto-sobak4-237x300.jpg",
                followed: false,
                fullName: "Nikita",
                status: "Everything will be fine!",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 2,
                photoUrl: "https://doggi-blog.ru/wp-content/uploads/2014/09/smeshnye-foto-sobak4-237x300.jpg",
                followed: true,
                fullName: "Evgenia",
                status: "Hey, I will find for you the best hotel!",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: "https://doggi-blog.ru/wp-content/uploads/2014/09/smeshnye-foto-sobak4-237x300.jpg",
                followed: false,
                fullName: "Alena",
                status: "Thailand is good!",
                location: {city: "Moscow", country: "Russia"}
            },
        ])
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={"https://doggi-blog.ru/wp-content/uploads/2014/09/smeshnye-foto-sobak4-237x300.jpg"}
                             className={styles.photo}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};

export default Users;