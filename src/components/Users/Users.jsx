import User from './User/User';
import { Paginator } from '../common/Paginator/Paginator';

function Users(props) {
    return (
        <div>
            <Paginator 
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged} />
            {
                props.users.map((cur) => {
                    return <User 
                        key={cur.id}
                        name={cur.name}
                        avatar={cur.photos.small}
                        location={'cur.location'}
                        status={cur.status}
                        id={cur.id}
                        followed={cur.followed}
                        follow={props.follow}
                        unFollow={props.unFollow}
                        followingInProcess={props.followingInProcess} />
                })
            }
        </div>
    )
}

export default Users;